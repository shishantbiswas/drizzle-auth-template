import { createAuthClient } from "better-auth/react";
import { magicLinkClient } from "better-auth/client/plugins";

export const { signIn, signOut, signUp, useSession } = createAuthClient({
  baseURL: process.env.BASE_URL!,
  plugins: [magicLinkClient()],
});
