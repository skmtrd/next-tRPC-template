import { z } from "zod";
import { router, procedure } from "../trpc";

export const healthcheckRouter = router({
  healthcheck: procedure
    .input(
      z.object({
        message: z.string(),
      })
    )
    .query(async ({ input }) => {
      return `Hello, ${input.message}`;
    }),
});


