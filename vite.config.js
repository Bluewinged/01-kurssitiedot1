import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/01-kurssitiedot1 ",

  plugins: [react()],
});
