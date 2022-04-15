/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

// eslint-disable-next-line no-undef
module.exports = {
  extends: getExtends(),
  plugins: getPlugins(),
  rules: getRules(),
  parserOptions: getParserOptions(),
  parser: "@typescript-eslint/parser",
  env: getEnv(),
  settings: getSettings(),
}

function getExtends() {
  return [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
  ]
}

function getPlugins() {
  return ["@typescript-eslint"]
}

function getRules() {
  return {
    // Import
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "index",
          "parent",
          "sibling",
        ],
        "newlines-between": "always",
      },
    ],
  }
}

function getParserOptions() {
  return {
    ecmaVersion: 12,
    // eslint-disable-next-line no-undef
    project: [path.resolve(__dirname, "tsconfig.json")],
  }
}

function getEnv() {
  return {
    es2021: true,
  }
}

function getSettings() {
  return {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", "js"],
    },
    "import/resolver": {
      node: {
        extensions: [".ts", "js"],
      },
    },
  }
}
