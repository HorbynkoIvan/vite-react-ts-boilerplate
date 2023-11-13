import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: process.env.NODE_ENV === "production" ? 9000 : 3005,
    strictPort: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "./src/common"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@theme": path.resolve(__dirname, "./src/theme"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
