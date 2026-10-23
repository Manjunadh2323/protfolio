import { resolve } from "node:path";
import { defineConfig } from "vite";
import { readdirSync } from "node:fs";

const htmlEntries = Object.fromEntries(
  readdirSync(resolve(__dirname, "html"))
    .filter((file) => file.endsWith(".html"))
    .map((file) => [file.replace(/\.html$/, ""), resolve(__dirname, "html", file)])
);

export default defineConfig({
  build: {
    rollupOptions: {
      input: { main: resolve(__dirname, "index.html"), ...htmlEntries }
    }
  }
});
