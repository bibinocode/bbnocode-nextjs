import { config as Config } from "@bbnocode/config";
import { createMDXSource } from "@fumadocs/content-collections";
import { allDocs, allDocsMetas } from "content-collections";
import { Home } from "lucide-react";

import { loader } from "fumadocs-core/source";
import { createElement } from "react";

export const docsSource = loader({
	baseUrl: "/docs",
	source: createMDXSource(allDocs, allDocsMetas),
	i18n: {
		defaultLanguage: Config.i18n.defaultLocale,
		languages: Config.i18n.locales,
	},
	icon(icon) {
		if (!icon) {
			return;
		}
		const icons = {
			Home,
		};

		if (icon in icons) {
			return createElement(icons[icon as keyof typeof icons]);
		}
	},
});
