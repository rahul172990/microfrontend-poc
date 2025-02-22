import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mainApp",
      filename: "remoteEntry.js",
      remotes: {
        chatApp: "http://localhost:5001/assets/remoteEntry.js",
        emailApp: "http://localhost:5002/assets/remoteEntry.js",
      },
      exposes: {
        "./Button": "./src/components/Button",
        "./store": "./src/store.js", // Ensure this path is correct
      },
      shared: ["react", "react-dom", "zustand"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5173, // Make sure it's 5173 if chat-app expects it here
    cors: true,
    strictPort: true,
  },
});
