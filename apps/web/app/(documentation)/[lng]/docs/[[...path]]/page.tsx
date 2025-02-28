import { config as Config } from "@bbnocode/config";
import { MDXContent } from "@content-collections/mdx/react";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { docsSource } from "../../../../../docs-source";

export default async function Page(props: {
	params: Promise<{ path?: string[] }>;
}) {
	const params = await props.params;
	const page = docsSource.getPage(params.path);

	if (!page) {
		notFound();
	}

	return (
		<DocsPage
			toc={page.data.toc}
			full={page.data.full}
			breadcrumb={{
				enabled: true,
				includePage: true,
				includeSeparator: true,
			}}
			tableOfContent={{
				enabled: true,
			}}
		>
			<DocsBody>
				<h1 className="text-foreground">{page.data.title}</h1>
				{page.data.description && (
					<p className="-mt-6 text-foreground/50 text-lg lg:text-xl">
						{page.data.description}
					</p>
				)}
				<div className="prose dark:prose-invert max-w-full prose-a:text-foreground prose-p:text-foreground/80">
					<MDXContent
						code={page.data.body}
						components={{
							...defaultMdxComponents,
							File,
							Folder,
							Files,
							Step,
							Steps,
							Tab,
							Tabs,
							pre: ({ ref: _ref, ...props }) => (
								<CodeBlock keepBackground {...props}>
									<Pre>{props.children}</Pre>
								</CodeBlock>
							),
							img: () => (
								<ImageZoom
									{...(props as any)}
									className="rounded-lg border-4 border-secondary/10"
								/>
							),
						}}
					/>
				</div>
			</DocsBody>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return docsSource.getPages().flatMap((page) => ({
		path: page.slugs,
		locale: page.locale ?? Config.i18n.defaultLocale,
	}));
}

export async function generateMetadata(props: {
	params: Promise<{ path?: string[]; lng: string }>;
}) {
	const params = await props.params;
	const page = docsSource.getPage(params.path, params.lng);

	if (!page) notFound();

	return {
		title: page.data.title || "未知标题",
		description: page.data.description,
	} satisfies Metadata;
}
