import { Button } from "@ui/components/button";
import "./style.css";
export default function Home() {
	return (
		<div className="min-w-screen min-h-screen bg-white relative">
			<div className="cloud-1" />
			<div className="cloud-2" />
			<div className="cloud-3" />
			<div className="cloud-4" />
			{/* 个人介绍 */}
			<div className="info-container">
				<h1 className="icon-container__title">嗨，我是阿逼 👋🏻</h1>
				<p className="icon-container__desc-bold">
					Web 全栈开发者 · 极客爱好者 · 编程探索者
				</p>
				<p className="icon-container__desc-normal">
					我喜欢学习新的技术和框架，目前正在寻找新的工作机会 👨‍💻
				</p>
				<Button className="info-container__button">了解更多</Button>
			</div>
		</div>
	);
}
