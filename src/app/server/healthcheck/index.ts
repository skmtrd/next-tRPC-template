import { z } from "zod";
import { procedure, router } from "../trpc";

export const healthcheckRouter = router({
  healthcheck: procedure
    .input(
      z.object({
        message: z.string(),
      }),
    )
    .query(async ({ input }) => {
      return `Hello, ${input.message}`;
    }),
});
