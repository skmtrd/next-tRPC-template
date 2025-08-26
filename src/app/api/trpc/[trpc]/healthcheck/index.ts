import { z } from "zod";
import { t } from "../index";

const router = t.router;
const procedure = t.procedure;
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
