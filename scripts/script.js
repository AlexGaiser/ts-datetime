const { exec } = require("child_process");
const fs = require("fs");
exec(
  "npm install typescript eslint ts-jest @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-jest eslint-plugin-prettier jest prettier typescript rollup -D",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);
