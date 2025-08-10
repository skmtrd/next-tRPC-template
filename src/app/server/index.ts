import { healthcheckRouter } from "./healthcheck";
import { router } from "./trpc";

export const apiRoutes = router({
  healthcheck: healthcheckRouter.healthcheck,
});

export type ApiRoutes = typeof apiRoutes;
