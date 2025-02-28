import type { Message } from "../types"
export const importLocale = async (locale: string, ns: string): Promise<Message> => {
	return (await import(`../translations/${locale}/${ns}.json`))
}
