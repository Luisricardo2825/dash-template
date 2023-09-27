import "./App.css";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import React from "react";

type RouterType = ReturnType<typeof createMemoryRouter>;

function App() {
  const [router, setRouter] = React.useState<RouterType | null>(null);

  React.useEffect(() => {
    import("./router/getRouter").then(async ({ getRouter }) => {
      setRouter(await getRouter());
    });
    return () => {
      setRouter(null);
    };
  }, []);

  return (
    <div className="App">{router && <RouterProvider router={router} />}</div>
  );
}

export default App;
