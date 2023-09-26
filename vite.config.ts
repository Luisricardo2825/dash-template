import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { plugin } from "web-dash-builder";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), plugin()],
});
