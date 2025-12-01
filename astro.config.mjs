import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import { resolve } from "path";

export default defineConfig({
  integrations: [react()],
  output: "static",
  trailingSlash: "always",
  vite: {
    resolve: {
      alias: {
        "@": resolve("./src"),
      },
    },
    envPrefix: ["PUBLIC_", "VITE_"],
  },
});
