import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { PropsWithChildren } from "react";
import { docsSource } from "../../../../docs-source";

export default async function DocumentationLayout({
	children,
}: PropsWithChildren) {
	return (
		<div>
			<DocsLayout
				tree={docsSource.pageTree}
				disableThemeSwitch
				nav={{ title: <strong>Docs</strong>, url: "/docs" }}
				sidebar={{
					defaultOpenLevel: 1,
				}}
			>
				{children}
			</DocsLayout>
		</div>
	);
}
