import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  build: {
    // sourcemap: true,
    lib: {
      entry: "src/index.ts",
      name: "VueFrogCommon",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "axios"],
      output: [
        { dir: "dist", format: "cjs", globals: { vue: "Vue", axios: "axios" } },
        { dir: "dist", format: "es", globals: { vue: "Vue", axios: "axios" } },
      ],
    },
  },
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
      outputDir: "dist", // 类型声明输出到 dist 目录，配合 types 字段
      entryFileName: "index.d.ts", // 生成的类型文件名，对应 types 字段
    } as import("vite-plugin-dts").PluginOptions),
  ],
  resolve: {
    alias: {
      "@frog/common-ui": resolve(__dirname, "src/common-ui"),
      "@frog/utils": resolve(__dirname, "src/utils"),
      "@frog/hooks": resolve(__dirname, "src/hooks"),
      "@frog/icons": resolve(__dirname, "src/icons"),
    },
  },
});
