import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Icons from "unplugin-icons/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      _api: path.resolve("./src/api"),
      _assets: path.resolve("./src/assets"),
      _components: path.resolve("./src/components"),
      _pages: path.resolve("./src/pages"),
      _services: path.resolve("./src/services"),
      _theme: path.resolve("./src/theme"),
      _utils: path.resolve("./src/utils"),
    },
  },
  plugins: [
    react(),
    Icons({
      autoInstall: true,
      compiler: "jsx",
      jsx: "react",
    }),
  ],
});
