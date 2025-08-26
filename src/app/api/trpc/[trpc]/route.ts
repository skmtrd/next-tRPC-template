import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { healthcheckRouter } from "./healthcheck";
import { t } from "./index";

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: apiRoutes,
    createContext: () => ({}),
  });
}

export const apiRoutes = t.router({
  healthcheck: healthcheckRouter.healthcheck,
});

export type ApiRoutes = typeof apiRoutes;

export { handler as GET, handler as POST };
