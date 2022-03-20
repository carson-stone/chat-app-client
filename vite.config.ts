
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue(),
    tsconfigPaths(), ],
  server: { port: 5000, },
  build : {
    commonjsOptions: {
      include: [ /lib-cjs/u, /node_modules/u, ],
    },
    outDir: "out",
  },
});
