import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: "/InternProject-2/",
  plugins: [vue()],
});
