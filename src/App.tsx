import "./App.css";
import {
  createMemoryRouter,
  RouterProvider,
  RouteObject,
  LoaderFunction,
  ActionFunction,
} from "react-router-dom";

const pages = import.meta.glob<{
  default: React.ComponentType<unknown>;
  loader: LoaderFunction<unknown> | undefined;
  action: ActionFunction<unknown> | undefined;
  ErrorBoundary?: React.ComponentType<unknown>;
}>("./pages/**/*.tsx", {
  eager: true,
});

type Route = Omit<RouteObject, "Element"> & {
  Element?: React.ComponentType<unknown>;
};
window.__routes = [];
const routes: Route[] = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");
  // const dirs = path.split("/");
  // const [file] = dirs[dirs.length - 1].split(".");
  // const joinedDirs = dirs.slice(1, dirs.length - 1).join("/");

  const definitivePath =
    fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`;

  window.__routes.push(definitivePath);
  routes.push({
    path: definitivePath,
    Element: pages[path].default,
    // Element: loadable(
    //   () => import(/* @vite-ignore */ `./${joinedDirs}/${file}`)
    // ),
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

const router = createMemoryRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: Element && <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
    lazy: rest.lazy,
  })) as RouteObject[]
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
