import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./lib/db";

const socialProviders = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
  },
  github: {
    clientId: process.env.GITHUB_CLIENT_ID ?? "",
    clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
  },
  discord: {
    clientId: process.env.DISCORD_CLIENT_ID ?? "",
    clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
  },
} as const;

export type SocialProviders = keyof typeof socialProviders;

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  // Google oauthを設定する
  socialProviders,
  trustedOrigins: [process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"],
});
