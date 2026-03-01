import { error } from "@sveltejs/kit";
import database from "$lib/server/database";

/** @type {import('./$types').RequestHandler} */
export async function GET({ cookies }) {
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
      AND archived_at IS NOT NULL
      ORDER BY id DESC
    `;

    const replays =
      data?.map(({ id, prompt, url }) => ({ id, prompt, url })) ?? [];
    return new Response(JSON.stringify({ replays }));
  } catch (err) {
    console.error("Error querying database: ", err);
    throw error(500, "Error loading replays");
  }
}

/** @type {import('./$types').RequestHandler} */
export async function PUT({ cookies, request }) {
  const session = cookies.get("session");

  if (!session) {
    throw error(401, "Invalid session");
  }

  // TODO: zod this shit
  const body = await request.json();

  try {
    const sql = database();

    await sql`
      UPDATE replays
      SET archived_at = NOW()
      WHERE id = ANY(${body})
    `;
  } catch (err) {
    console.error("Error querying database: ", err);
    throw error(500, "Error archiving replays");
  }

  return new Response();
}
