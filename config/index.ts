import type { Config } from "./type";
export const config: Config = {
	i18n: {
		locales: ["zh", "en"],
		defaultLocale: "zh",
		excludeFile: [""], // 这里配置的是根据不同语言显示不同的文件, 需要定义 public/zh/xxx.js 类似
		publicFile: /.(.*)$/,
		namespace:"index", // 这里是翻译文件json的命名空间 和 @bbnocode/i18n下的lib中的耦合 请注意
	},
};
