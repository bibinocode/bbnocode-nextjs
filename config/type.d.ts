export type Config = {
	i18n: {
		locales: string[];
		defaultLocale: string;
		publicFile: RegExp;
		excludeFile: string[];
		namespace:string
	};
};
