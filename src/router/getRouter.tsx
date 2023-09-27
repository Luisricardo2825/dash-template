import { createMemoryRouter, RouteObject } from "react-router-dom";

export async function getRouter() {
  const routes = await (await import("./getRoutes")).default();
  if (routes.length > 0) {
    const _routes = routes.map(({ Element, ErrorBoundary, ...rest }) => ({
      ...rest,
      element: Element && <Element />,
      ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
      lazy: rest.lazy,
    })) as RouteObject[];

    const router = createMemoryRouter(_routes);
    return router;
  }
  return null;
}
