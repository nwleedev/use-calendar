import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  clean: true,
  splitting: true,
  dts: true,
  format: ["cjs", "esm"],
  external: ["react", "date-fns"],
});
