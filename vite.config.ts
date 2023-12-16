import { URL, fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import VueRouter from "unplugin-vue-router/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Markdown from "unplugin-vue-markdown/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },

  plugins: [
    VueRouter({
      dts: "types/typed-router.d.ts",
    }),
    vue({
      include: [/\.vue$/, /\.md$/],
      script: {
        defineModel: true,
      },
    }),
    vueJsx(),
    Markdown({}),
    Components({
      dirs: ["src/components", "src/modules"],
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      resolvers: [
        NaiveUiResolver(),
        IconsResolver({
          prefix: false,
          alias: {
            i: "tabler",
          },
        }),
      ],
      dts: "types/components.d.ts",
    }),
    AutoImport({
      dirs: ["src/composables", "src/stores", "src/utils"],
      imports: [
        "vue",
        "pinia",
        "@vueuse/head",
        "@vueuse/core",
        VueRouterAutoImports,
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
          axios: [["default", "axios"]],
          dayjs: [["default", "dayjs"]],
          papaparse: [["default", "Papa"]],
          "vue-request": ["useRequest", "usePagination"],
        },
      ],
      vueTemplate: true,
      dts: "types/auto-imports.d.ts",
    }),
    Icons({}),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
