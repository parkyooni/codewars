import { defineConfig } from "vite";
import { resolve } from "path";
import { configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/**/*.test.js"],
  },
});
