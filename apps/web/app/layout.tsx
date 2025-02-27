import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		absolute: "bbnocode.nextjs - Application",
		default: "bbnocode.nextjs - Application",
		template: "%s | bbnocode.nextjs - Application",
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return children;
}
