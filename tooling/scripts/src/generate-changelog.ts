import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

interface PackageJson {
	name: string;
	version: string;
}

function getWorkspacePackages(): string[] {
	const output = execSync("pnpm ls -r --json", { encoding: "utf-8" });
	return JSON.parse(output).map((pkg: any) => pkg.path);
}

function generateChangelog(packagePath: string) {
	const packageJson: PackageJson = JSON.parse(
		fs.readFileSync(path.join(packagePath, "package.json"), "utf-8"),
	);

	console.log(`生成 ${packageJson.name} 的 changelog...`);

	const changelogPath = path.join(packagePath, "CHANGELOG.md");
	const hasChangelog = fs.existsSync(changelogPath);

	if (!hasChangelog) {
		fs.writeFileSync(
			changelogPath,
			`# Changelog\n\n${packageJson.name} 的所有重要更改都将记录在此文件中。\n`,
		);
	}

	try {
		execSync(
			`cd ${packagePath} && conventional-changelog -p angular -i CHANGELOG.md -s`,
			{
				stdio: "inherit",
			},
		);
		console.log(`成功生成 ${packageJson.name} 的 changelog`);
	} catch (error) {
		console.error(`生成 ${packageJson.name} 的 changelog 失败:`, error);
	}
}

function main() {
	const args = process.argv.slice(2);
	const packages = getWorkspacePackages();

	// 处理命令行参数
	if (args.includes("--all")) {
		// 为所有包生成 changelog
		packages.forEach(generateChangelog);
		return;
	}

	if (args.includes("--filter")) {
		const filterIndex = args.indexOf("--filter");
		const filterValue = args[filterIndex + 1];

		if (!filterValue) {
			console.error("错误: --filter 参数后需要指定包名");
			process.exit(1);
		}

		// 过滤包
		const filteredPackages = packages.filter((pkg) => {
			const packageJson: PackageJson = JSON.parse(
				fs.readFileSync(path.join(pkg, "package.json"), "utf-8"),
			);
			return filterValue.includes(packageJson.name);
		});

		if (filteredPackages.length === 0) {
			console.warn(`警告: 没有找到匹配 "${filterValue}" 的包`);
			return;
		}

		filteredPackages.forEach(generateChangelog);
		return;
	}

	// 默认行为: 只为当前包生成 changelog
	const currentDir = process.cwd();
	generateChangelog(currentDir);
}

main();
