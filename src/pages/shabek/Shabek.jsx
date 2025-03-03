import styled from "./shabek.module.css"
import { NavBar } from "../../componentes/NavBar/NavBar"
import isdn from "../../assets/images/isbn-location.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export function Shabek() {
	return (
		<div className={styled.Shabek}>
			<NavBar />

		<section className={styled.head}>
			<div className={styled.logoContainer}><img src={isdn} alt="isdn logo" /></div>
			<div className={styled.info}>
				<FontAwesomeIcon icon={faQuoteLeft}/>
				<h2>شابک چیست ؟</h2>
				<p>شابک (شماره استاندارد بین‌المللی کتاب) یک کد منحصربه‌فرد برای شناسایی کتاب‌ها در سطح جهانی است. این شماره ۱۳ رقمی به ناشران، کتابخانه‌ها و فروشندگان کمک می‌کند تا کتاب‌ها را به‌درستی دسته‌بندی و مدیریت کنند. در این صفحه، با ساختار شابک، کاربردهای آن و نحوه دریافت آن آشنا خواهید شد.</p>
			</div>
		</section>

		</div>
	)
}