import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/InternProject-2/",
  plugins: [vue()],
  // appType: "spa",
});
