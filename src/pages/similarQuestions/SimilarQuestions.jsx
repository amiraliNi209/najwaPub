import styled from "./SimilarQuestions.module.css"
import { NavBar } from "../../componentes/NavBar/NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export function SimilarQuestions(p) {



  return (
    <div className={styled.SimilarQuestionsContainer}>
      <NavBar />
      <section className={styled.head}>
        <h1 className={styled.title}>سوال های متدوال</h1>
        <p><FontAwesomeIcon icon={faChevronDown} className={styled.chevronDown} />در این بخش تعدادی از سوال های متداول شما پاسخ داده شده است</p>
      </section>
      <section className={styled.main}>
        <div className={styled.questionContainer}>

          <div className={styled.article}>
            <div className={styled.question}>
              سلام من یک عکاسم آیا می‌توانم عکس‌هایم را به صورت کتاب منتشر کنم؟
            </div>

            <div className={styled.anwser}>
              بله، هر مجموعه‌ای که به صورت کاغذی چاپ می‌شود به عنوان کتاب مراحل خود را طی می‌نماید.
            </div>
          </div>
          <div className={styled.article}>
            <div className={styled.question}>
              زمان چاپ کتاب حدوداً چند ماه طول می‌کشد؟
            </div>

            <div className={styled.anwser}>
              زمان چاپ کتاب متغیر بوده و بستگی به نوع کار و محتوای اثر دارد. ضمناً برای کتاب‌های رمان و شعر زمان بیشتری برای گرفتن مجوز نیاز دارد. متوسط این زمان بین ۲ تا ۵ ماه متغیر است.
            </div>
          </div>
          <div className={styled.article}>
            <div className={styled.question}>
              فیپا مخفف چیست؟
            </div>

            <div className={styled.anwser}>
              (فهرست‌نویسی پیش از انتشار) که واحدی است مستقر در کتابخانه ملی، که کتاب بعد از مرحله تخصیص شابک به این واحد ارسال می‌گردد. به بخش آماده‌سازی کتاب مراجعه فرمایید تا اطلاعات جامع‌تری را دریافت کنید.
            </div>
          </div>
          <div className={styled.article}>
            <div className={styled.question}>
              چگونه می‌توانم پایان‌نامه کارشناسی ارشد خودم را به کتاب تبدیل کنم؟
            </div>

            <div className={styled.anwser}>
              برای تبدیل پایان‌نامه به کتاب، تمام مراحل کتاب را باید طی کنید و علاوه بر موارد عنوان شده، باید در مرحله آماده‌سازی به صورت حرفه‌ای ویرایش ادبی شود تا بتواند به صورت کتاب قابل قبول چاپ شود. پایان‌نامه‌های با مخاطب عام‌تر، کتاب‌های موفق‌تری خواهند شد.
            </div>
          </div>

        </div>

        <div className={styled.right}>
          <h3>سوال های خود را در این قسمت از بپرسید</h3>
          <form action="">
            <input type="text" name="" id="" placeholder="نام خود را وارد کنید" required/>
            <input type="email" name="" id="" placeholder="ادرس ایمیل خود را وارد کنید" required/>
            <textarea name="" id="" placeholder="متن پرسش خود را وارد کنیم" required></textarea>
            <input type="submit" value="ارسال" />
          </form>
        </div>
      </section>
    </div>
  )
}