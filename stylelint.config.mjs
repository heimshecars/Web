/*
 * Design-system guard rails for CSS.
 * Only tokens.css and animations.css may contain raw values. Everywhere
 * else: colours, sizes, fonts, radii, shadows, z-index, durations and
 * easings must come from var(--token).
 */
const TOKEN = "/^var\\(--[\\w-]+\\)$/";
const TOKEN_LIST = "/^var\\(--[\\w-]+\\)(\\s*,\\s*var\\(--[\\w-]+\\))*$/";

/** @type {import("stylelint").Config} */
const config = {
  extends: ["stylelint-config-standard", "stylelint-config-css-modules"],
  rules: {
    // ─── Colour ───
    "color-no-hex": true,
    "color-named": "never",
    "function-disallowed-list": ["rgb", "rgba", "hsl", "hsla", "hwb", "lab", "lch", "oklab", "oklch", "color", "color-mix"],

    // ─── Units: no px / rem / em / ms / s outside the token files ───
    "unit-allowed-list": ["%", "fr", "deg", "turn", "lh", "ch", "vh", "vw", "dvh", "dvw", "svh"],

    // ─── Properties that must come from a token ───
    "declaration-property-value-allowed-list": {
      "/^font-(size|weight|family)$/": [TOKEN, "inherit"],
      "line-height": [TOKEN, "inherit"],
      "letter-spacing": [TOKEN, "inherit"],
      "/^transition(-duration|-timing-function)?$/": [TOKEN, "none"],
      "/^animation(-name|-duration|-timing-function)?$/": [TOKEN, "none"],
      "z-index": [TOKEN, "auto"],
      "box-shadow": [TOKEN_LIST, "none", "/^0 0 0 var\\(--[\\w-]+\\) var\\(--[\\w-]+\\)$/"],
      "/radius$/": [TOKEN, "0", "inherit"],
      "opacity": [TOKEN, "0", "1"],
    },
    "declaration-property-value-disallowed-list": {
      font: ["/./"],
    },

    // ─── Motion only in animations.css ───
    "at-rule-disallowed-list": ["keyframes", "font-face"],

    // ─── House style ───
    "selector-class-pattern": ["^[a-z][a-zA-Z0-9]*$", { message: "Use camelCase class names (styles.myClass)." }],
    "declaration-block-single-line-max-declarations": 2,
    "rule-empty-line-before": ["always-multi-line", { except: ["first-nested"], ignore: ["after-comment"] }],
    "custom-property-empty-line-before": null, // blank lines group related tokens
    "no-descending-specificity": null, // misfires on data-attribute variants
    "declaration-block-no-redundant-longhand-properties": [true, { ignoreShorthands: ["grid-template"] }],
  },
  overrides: [
    {
      // The two files that DEFINE the design system may use raw values.
      files: ["src/design-system/tokens.css", "src/design-system/animations.css"],
      rules: {
        "color-no-hex": null,
        "function-disallowed-list": null,
        "unit-allowed-list": null,
        "declaration-property-value-allowed-list": null,
        "at-rule-disallowed-list": null,
        "value-keyword-case": null,
      },
    },
    {
      // base.css resets inherited font shorthand on form controls.
      files: ["src/design-system/base.css"],
      rules: { "declaration-property-value-disallowed-list": null },
    },
  ],
};

export default config;
