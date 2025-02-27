import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		absolute: "bbnocode.nextjs - Application",
		default: "bbnocode.nextjs - Application",
		template: "%s | bbnocode.nextjs - Application",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
