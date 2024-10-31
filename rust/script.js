import fs from "node:fs";
import path from "node:path";

fs.readdir("./src/solutions", { withFileTypes: true }, (err, files) => {
	if (err) {
		return;
	}

	const questions = files
		.map((file) => {
			const [fullName] = file.name.split(".");
			const name = fullName.split("_");
			const id = name.pop();
			return [id, name.join(" ")];
		})
		.filter(([id, name]) => !Number.isNaN(Number(id)) && !!name)
		.sort((a, b) => {
			const numA = Number.parseInt(a[0]);
			const numB = Number.parseInt(b[0]);
			return numA - numB;
		})
		.map(([id, name]) => {
			return `- \`${id}\` ${name}`;
		});

	fs.writeFileSync("./README.md", questions.join("\n"));
});
