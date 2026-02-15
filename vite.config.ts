import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // Use "/" for Vercel (root). Use "/Car-Rental-Project-With-AI/" only for GitHub Pages.
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
