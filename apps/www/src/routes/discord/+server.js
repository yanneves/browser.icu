import { redirect } from "@sveltejs/kit";
import { env } from "$env/dynamic/public";

export const prerender = false;

const FALLBACK_DISCORD_INVITE_KEY = "9R6TF23UNR";

export const GET = () => {
  const inviteKey =
    env.PUBLIC_DISCORD_INVITE_KEY || FALLBACK_DISCORD_INVITE_KEY;
  throw redirect(307, `https://discord.gg/${inviteKey}`);
};
