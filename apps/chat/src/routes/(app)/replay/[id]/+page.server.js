import { error } from "@sveltejs/kit";
import database from "$lib/server/database";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params, cookies }) => {
  const { id } = params;

  const session = cookies.get("session");

  if (!session) {
    throw error(401, "Invalid session");
  }

  try {
    const sql = database();
    const data = await sql`
      SELECT *
      FROM replays
      WHERE account = ${session}
      AND id = ${id}
      ORDER BY id DESC
      LIMIT 1;
    `;

    const replay = data?.map(({ id, prompt, url }) => ({ id, prompt, url }))[0];
    return { replay };
  } catch (err) {
    console.error("Error querying database: ", err);
    throw error(500, "Error loading replay");
  }
};
