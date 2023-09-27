import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./Init.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense>
      <App />
    </Suspense>
  </React.StrictMode>
);
