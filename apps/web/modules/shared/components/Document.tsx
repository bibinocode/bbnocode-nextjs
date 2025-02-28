import { cn } from "@ui/lib";
import { ThemeProvider } from "next-themes";
import { Poppins, Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";

const sansFont = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-sans",
});

const robotoFont = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	variable: "--font-roboto",
});

export function Document({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen font-sans",
					sansFont.variable,
					robotoFont.variable,
				)}
			>
				<NextTopLoader />
				<ThemeProvider
					attribute="class"
					disableTransitionOnChange
					defaultTheme="light"
					themes={["light", "dark"]}
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
