import type { SocialProviders } from "@/auth";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

export async function oauthSignIn(provider: SocialProviders) {
  try {
    await authClient.signIn.social({
      provider: provider,
      callbackURL: "/dashboard",
    });
  } catch (error) {
    console.error(error);
  }
}
