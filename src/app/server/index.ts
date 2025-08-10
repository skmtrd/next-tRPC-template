import { router } from "./trpc";
import { healthcheckRouter } from "./healthcheck";

export const apiRoutes = router({
  healthcheck: healthcheckRouter.healthcheck,
});

export type ApiRoutes = typeof apiRoutes;
