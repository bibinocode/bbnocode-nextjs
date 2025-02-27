import { Document } from "@shared/components/Document";
import { RootProvider as FumadocsRootProvider } from "fumadocs-ui/provider";
import type { PropsWithChildren } from "react";

export default function DocumentationLayout({ children }: PropsWithChildren) {
	return (
		<Document>
			<FumadocsRootProvider>
				<main className="min-h-screen">{children}</main>
			</FumadocsRootProvider>
		</Document>
	);
}
