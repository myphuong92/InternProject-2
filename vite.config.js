import { defineConfig } from "vite";
import historyFallback from "connect-history-api-fallback";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/InternProject-2/",
  plugins: [vue()],
  server: {
    middleware: [historyFallback()],
  },
});
