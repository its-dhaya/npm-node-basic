#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const projectName = process.argv[2];

if (!projectName) {
  console.log("Please provide project name");
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);

fs.mkdirSync(projectPath);
fs.mkdirSync(path.join(projectPath, "src"));

fs.writeFileSync(
  path.join(projectPath, "src", "index.js"),
  "console.log('Hello Project');"
);

fs.writeFileSync(path.join(projectPath, ".gitignore"), "node_modules/\n.env");

fs.writeFileSync(path.join(projectPath, ".env.example"), "PORT=3000");

console.log(`Project ${projectName} created 🚀`);
