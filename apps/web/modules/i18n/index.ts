import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import {importLocale} from '@bbnocode/i18n'

import { config as Config } from '@bbnocode/config'

const {defaultLocale,locales,namespace} = Config.i18n


const initI18Next = async (lng = defaultLocale,ns = namespace) => {
	const i18nInstance = createInstance()

	await i18nInstance.use(initReactI18next)
		.use(resourcesToBackend( (language: string, namespace: string) =>  importLocale(language, namespace)))
		.init({
			supportedLngs: locales,
			fallbackLng: defaultLocale,
			lng,
			fallbackNS: ns,
			defaultNS: ns,
			ns:ns
		})
	
	return i18nInstance
}


export async function useTranslation(lng: string, ns?: string | string[], options:Record<string, any> = {}) {
	const i18nInstance = await initI18Next(lng)
	return {
		t: i18nInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
		i18n: i18nInstance
	}
}
