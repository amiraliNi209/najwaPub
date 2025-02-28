
import { NavBar } from '../../componentes/NavBar/NavBar'
import { Footer } from "../../componentes/footer/footer"
import styled from "./childrenAndTeens.module.css"
import image1 from "../../assets/images/childrenAndTeens/download.jpg"

export function ChildrenAndTeens(p) {
    return (
        <div className={styled.childrenAndTeensContainer}>
            <NavBar />

            <div className={styled.banerContainer}>
                <div className={styled.wrapper}>
                    <h1>بخش کودک و نوجوان</h1>
                    <p>یک رده‌بندی خاص، برای تفکیک میان آثار مختلف کانون پرورش فکری کودکان و نوجوانان. بر پایهٔ این رده‌بندی، کلیهٔ کتاب‌هایی که در این سازمان برای کودکان به چاپ می‌رسند، بر اساس حجم کتاب و تعداد صفحات، میزان نقاشی‌ها، نوع مطلب، و معیارهایی از این قبیل، به شش گروه مختلف تفکیک می‌شوند.</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}