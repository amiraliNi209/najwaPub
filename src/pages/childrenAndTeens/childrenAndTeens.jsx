
import { NavBar } from '../../componentes/NavBar/NavBar'
import styled from "./childrenAndTeens.module.css"
import headImg from "../../assets/images/gabe-pierce-2w46Lv6EYT4-unsplash.jpg"
import rangeImg from "../../assets/images/rang.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

export function ChildrenAndTeens(p) {
	return (
		<div className={styled.childrenAndTeensContainer}>
			<NavBar />

			<section className={styled.head}>
				<div className={styled.headImg}><img src={headImg} alt="#"/></div>
				<div className={styled.headTextContent}>
					<FontAwesomeIcon icon={faQuoteLeft} />
					<h2>بخش کودک و نوجوان</h2>
					<p>یک رده‌بندی خاص، برای تفکیک میان آثار مختلف کانون پرورش فکری کودکان و نوجوانان. بر پایهٔ این رده‌بندی، کلیهٔ کتاب‌هایی که در این سازمان برای کودکان به چاپ می‌رسند، بر اساس حجم کتاب و تعداد صفحات، میزان نقاشی‌ها، نوع مطلب، و معیارهایی از این قبیل، به شش گروه مختلف تفکیک می‌شوند.</p>
				</div>
			</section>

			<section className={styled.main}>
				<div className={styled.mainImg}><img src={rangeImg} alt="رده سنی" /></div>
				<div className={styled.mainTextContent}>
					<FontAwesomeIcon icon={faQuoteLeft} />
					<h2>رده سنی کودک و نوجوان</h2>
					<p>رده‌بندی سنی کودکان و نوجوانان به پنج گروه تقسیم می‌شود: **گروه الف** شامل کودکان خردسال و سال اول دبستان است که در مرحله‌ی ابتدایی رشد شناختی هستند. **گروه ب** کودکان سال‌های دوم و سوم دبستان است که مهارت‌های خواندن و نوشتن‌شان تقویت می‌شود. **گروه ج** شامل سال‌های چهارم تا ششم دبستان است که توانایی تفکر انتزاعی در آن‌ها رشد می‌کند. **گروه د** نوجوانان سال‌های هفتم تا نهم دبیرستان را در بر می‌گیرد که توانایی تحلیل مسائل عمیق‌تر در آن‌ها بیشتر می‌شود. در نهایت، **گروه هـ** نوجوانان سال‌های دهم تا دوازدهم دبیرستان است که مهارت‌های فکری و تحلیلی‌شان به بلوغ می‌رسد.</p>
				</div>
			</section>

		</div>
	)
}