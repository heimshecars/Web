import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/*
 * Design-system guard rails for TSX. CSS has its own in stylelint.config.mjs.
 *   - no `style={…}`: style with CSS modules + tokens
 *   - no colour literals (#hex, rgb(), oklch()…) in code
 *   - no raw CSS lengths/durations ("14px", "200ms") in code
 *   - icons only through <Icon name="…" />
 */
const COLOUR = String.raw`/#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b|\b(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch)\(/`;
const RAW_UNIT = String.raw`/^-?\d*\.?\d+(?:px|rem|em|ms|s|pt)$/`;

const designSystemRules = {
  "react/forbid-dom-props": ["error", { forbid: [{ propName: "style", message: "No inline styles — use a CSS module with tokens." }] }],
  "react/forbid-component-props": ["error", { forbid: [{ propName: "style", message: "No inline styles — use a CSS module with tokens." }] }],
  "react/no-danger": "error",
  "no-restricted-syntax": [
    "error",
    { selector: `Literal[value=${COLOUR}]`, message: "No raw colours — use a colour token from design-system/tokens.css." },
    { selector: `TemplateElement[value.raw=${COLOUR}]`, message: "No raw colours — use a colour token from design-system/tokens.css." },
    { selector: `Literal[value=${RAW_UNIT}]`, message: "No raw sizes or durations — use a token from tokens.css / animations.css." },
  ],
  "no-restricted-imports": [
    "error",
    { paths: [{ name: "lucide-react", message: "Use <Icon name=\"…\" /> from @/design-system (add new icons in design-system/icons.ts)." }] },
  ],
};

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  { rules: designSystemRules },
  {
    files: ["src/design-system/icons.ts"],
    rules: { "no-restricted-imports": "off" },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
