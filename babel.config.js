// babel.config.js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-syntax-optional-chaining",
    "@babel/plugin-syntax-nullish-coalescing-operator",
  ],
};
