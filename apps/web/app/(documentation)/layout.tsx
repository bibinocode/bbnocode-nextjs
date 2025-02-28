import { Document } from "@shared/components/Document";
import { RootProvider as FumadocsRootProvider } from "fumadocs-ui/provider";
import type { PropsWithChildren } from "react";

export default async function DocumentationLayout({
	children,
	params,
}: PropsWithChildren<{ params: Promise<{ lng: string }> }>) {
	const { lng } = await params;
	return (
		<Document lang={lng}>
			<FumadocsRootProvider>
				<main className="min-h-screen">{children}</main>
			</FumadocsRootProvider>
		</Document>
	);
}
