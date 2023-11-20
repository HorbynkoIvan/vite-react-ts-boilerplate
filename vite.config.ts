import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import * as path from "path";

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  const projectEnv = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  // Resolve server port
  const defaultPort = 3000;
  const port =
    mode === "production"
      ? parseInt(projectEnv.VITE_PROD_PORT, 10)
      : parseInt(projectEnv.VITE_DEV_PORT, 10) || defaultPort;

  if (isNaN(port)) {
    throw new Error(`Invalid port value: ${port}`);
  }

  return defineConfig({
    base: projectEnv.VITE_BASE_PATH,
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
      // ToDO consider:
      //  vite-plugin-compression2,
      //  vite-plugin-environment,
      //  vite-plugin-svgr,
      //  vite-plugin-simple-gql
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
