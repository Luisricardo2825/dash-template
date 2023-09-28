import { RouteObject, LoaderFunction, ActionFunction } from "react-router-dom";

type Route = Omit<RouteObject, "Element"> & {
  Element?: () => React.ReactNode;
};

window.__routes = [];
type Loader = {
  [x in "Loader" | "loader"]: LoaderFunction<unknown> | undefined;
};
type Action = {
  [y in "action" | "Action"]: ActionFunction<unknown> | undefined;
};

type Page = {
  default: React.ComponentType<unknown>;
  ErrorBoundary?: React.ComponentType<unknown>;
} & Loader &
  Action;
export default async function getRoutes() {
  const pages = import.meta.glob<Page>("../pages/**/*.tsx");

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

    const {
      Action,
      action,
      Loader,
      loader,
      ErrorBoundary,
      default: Component,
    } = await pages[path]();

    routes.push({
      path: definitivePath,
      Element: Component as unknown as () => React.ReactNode,
      loader: loader || Loader,
      action: action || Action,
      ErrorBoundary: ErrorBoundary,
    });
  }
  return routes;
}
