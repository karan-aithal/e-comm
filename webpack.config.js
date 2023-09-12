const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const http = require("http");

// Check if TypeScript is setup
const useTypeScript = fs.existsSync(paths.appTsConfig);

// Check if Tailwind config exists
const useTailwind = fs.existsSync(
  path.join(paths.appPath, "tailwind.config.js")
);