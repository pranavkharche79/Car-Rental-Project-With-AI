import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Car-Rental-Project-With-AI/", // ✔ must EXACTLY match your repo name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
