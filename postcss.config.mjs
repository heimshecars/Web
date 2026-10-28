// Breakpoints are declared once, as @custom-media in tokens.css.
// global-data makes them visible to every CSS file; custom-media compiles them.
const config = {
  plugins: {
    "@csstools/postcss-global-data": { files: ["src/design-system/tokens.css"] },
    "postcss-custom-media": {},
  },
};

export default config;
