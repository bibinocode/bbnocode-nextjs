import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { PropsWithChildren } from "react";
import { docsSource } from "../../../../../docs-source";

export default async function DocumentationLayout({
	children,
	params,
}: PropsWithChildren<{ params: Promise<{ lng: string }> }>) {
	const { lng } = await params;
	return (
		<div>
			<DocsLayout
				tree={docsSource.pageTree[lng]}
				disableThemeSwitch
				nav={{ title: <strong>Docs</strong>, url: "/docs" }}
				sidebar={{
					defaultOpenLevel: 1,
				}}
				i18n={true}
			>
				{children}
			</DocsLayout>
		</div>
	);
}
