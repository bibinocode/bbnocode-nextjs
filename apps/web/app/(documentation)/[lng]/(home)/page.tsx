import { Button } from "@ui/components/button";
import "./style.css";
import { useTranslation} from '@i18n'


export default async function Home({ params: { lng} }:{params:{lng:string}}) {
	const {t} = await useTranslation(lng)
	return (
		<div className="min-w-screen min-h-screen bg-white relative">
			<div className="cloud-1" />
			<div className="cloud-2" />
			<div className="cloud-3" />
			<div className="cloud-4" />
			{/* 个人介绍 */}
			<div className="info-container">
				<h1 className="icon-container__title">{ t("app.home.title")}</h1>
				<p className="icon-container__desc-bold">
					{t("app.home.subtitle")}
				</p>
				<p className="icon-container__desc-normal">
					{t("app.home.description")}
				</p>
				<Button className="info-container__button">了解更多</Button>
			</div>
		</div>
	);
}
