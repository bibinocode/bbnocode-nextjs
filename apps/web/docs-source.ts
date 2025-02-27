import { createMDXSource } from "@fumadocs/content-collections";
import { allDocs, allDocsMetas } from "content-collections";

import { loader } from "fumadocs-core/source";

export const docsSource = loader({
	baseUrl: "/docs",
	source: createMDXSource(allDocs, allDocsMetas),
});
