import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "emailApp",
      filename: "remoteEntry.js",
      remotes: {
        mainApp: "http://localhost:5173/assets/remoteEntry.js", // Add Host App as a remote
      },
      exposes: {
        "./EmailApp": "./src/App",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5002,
    cors: true,
  },
});
