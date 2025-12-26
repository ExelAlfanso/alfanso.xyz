import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: [
    "**/*.gltf",
    "**/*.glb",
    "**/*.gltf?url",
    "gltf",
    "./*.gltf",
    "**/*.emf",
  ],
  plugins: [react(), tailwindcss()],
});
