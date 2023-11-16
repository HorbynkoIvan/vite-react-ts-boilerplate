import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import * as path from "path";

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  // Resolve server port
  const defaultPort = 3000;
  const port = mode === "production" ? 9000 : parseInt(env.VITE_PORT, 10) || defaultPort;

  if (isNaN(port)) {
    console.warn(`Invalid VITE_PORT value: ${env.VITE_PORT}, using default port ${defaultPort}`);
  }

  return defineConfig({
    server: {
      host: true,
      port: port,
      strictPort: true,
    },
    plugins: [
      react(),
      checker({
        typescript: true,
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@common": path.resolve(__dirname, "./src/common"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@redux": path.resolve(__dirname, "./src/redux"),
      },
    },
  });
};
