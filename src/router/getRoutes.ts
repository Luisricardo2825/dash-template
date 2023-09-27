import { RouteObject, LoaderFunction, ActionFunction } from "react-router-dom";
import loadable from "@loadable/component";

type Route = Omit<RouteObject, "Element"> & {
  Element?: () => React.ReactNode;
};

window.__routes = [];

export default async function getRoutes() {
  const pages = import.meta.glob<{
    default: React.ComponentType<unknown>;
    loader: LoaderFunction<unknown> | undefined;
    action: ActionFunction<unknown> | undefined;
    ErrorBoundary?: React.ComponentType<unknown>;
  }>("../pages/**/*.tsx");

  const routes: Route[] = [];
  for (const path of Object.keys(pages)) {
    const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
    if (!fileName) {
      continue;
    }

    const normalizedPathName = fileName.includes("$")
      ? fileName.replace("$", ":")
      : fileName.replace(/\/index/, "");

    const definitivePath =
      fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`;
      
    const founded = window.__routes.find((item) => item == definitivePath);
    if (!founded) window.__routes.push(definitivePath);

    const { action, loader, ErrorBoundary } = await pages[path]();
    routes.push({
      path: definitivePath,
      Element: loadable(pages[path]) as unknown as () => React.ReactNode,
      loader: loader,
      action: action,
      ErrorBoundary: ErrorBoundary,
    });
  }
  return routes;
}
