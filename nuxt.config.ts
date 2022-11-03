// Local app development requires following aws-amplify alias for Amplify library to work. Without the alias app won't run
// On App build alias are strictly not required. Adding them won't build the app
const developmentAliases =
  process.env.NODE_ENV === "development"
    ? { "aws-amplify": "aws-amplify/lib" }
    : {};

export default defineNuxtConfig({
  srcDir: "src/",
  css: ["~/assets/sass/main.scss"],
  alias: {
    ...developmentAliases,
    "./runtimeConfig": "./runtimeConfig.browser",
  },
  define: {
    global: {},
    buffer: {},
    process: {},
  },
  meta: {
    script: [{ src: "/polyfill.js" }],
  },
});
