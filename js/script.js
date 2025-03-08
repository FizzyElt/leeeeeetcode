import fs from "node:fs";
import path from "node:path";

fs.readdir("./", { withFileTypes: true }, (err, files) => {
  if (err) {
    return;
  }

  const questions = files
    .filter((file) => {
      return file.isDirectory();
    })
    .map((file) => file.name.split("_"))
    .filter(([id, name]) => !Number.isNaN(Number(id)) && !!name)
    .sort((a, b) => {
      const numA = Number.parseInt(a[0]);
      const numB = Number.parseInt(b[0]);
      return numA - numB;
    })
    .map(([id, name]) => {
      return `- \`${id}\` ${name.split("-").join(" ")}`;
    });

  fs.writeFileSync("./README.md", questions.join("\n"));
});
