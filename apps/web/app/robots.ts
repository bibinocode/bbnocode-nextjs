import type { MetadataRoute } from "next";

/**
 * 设置robots.txt 爬虫规则
 * @returns {MetadataRoute.Robots}
 */
export default function Robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
	};
}
