
import styled from "./contactUs.module.css"
import { NavBar } from "../../componentes/NavBar/NavBar"
import qrCode from "../../assets/images/Untitled.png"
import { faAnglesRight, faEnvelope, faLocationDot, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export function ContactUs(p) {
  return (
    <div className={styled.contactUsContainer}>
      <NavBar />

      <section className={styled.topContainer}>
        <FontAwesomeIcon icon={faAnglesRight} className={styled.topArrow} />
        <h1 className={styled.title}>ارتباط با ما</h1>
        <p className={styled.info} style={{marginBottom:"15px"}}> . انتشارات نجوای قلم با مجوز رسمی از وزارت ارشاد و فرهنگ اسلامی افتخار دارد تا در عرصه مقدس کتاب اقدام به چاپ آثار هم وطنان عزیز نماید</p>
        <img src={qrCode} alt="" />
        <FontAwesomeIcon icon={faAnglesRight} className={styled.bottomArrow} />
        <p className={styled.bottomPar}>کارشناسان انتشارات نجوای قلم حداکثر بعد از پانزده روز پاسخ شما را خواهند داد</p>
      </section>

      <section className={styled.main}>
        <div className={styled.rowOne}>
          <input type="text" placeholder="نام خود را وارد کنید" name="name" id="name" required className={styled.name} />
          <input type="text" placeholder="نام خانوادگی خود را وارد کنید " name="name" id="" required className={styled.lastName} />
        </div>
        <input type="email" required className={styled.emailInput} placeholder="لطفا ایمیل خود را وارد کنید" />
        <textarea name="" id="" required></textarea>
        <input type="submit" value="ارسال" className={styled.submit} />
      </section>

      <section className={styled.bottomContainer}>
        <div className={styled.left}>
          <h4>شماره تلفن برای ارتباط بیشتر<FontAwesomeIcon icon={faPhone} /></h4>
          <h5>0021 1386 602</h5>
        </div>
        <div className={styled.center}>
          <h4>آدرس ایمیل <FontAwesomeIcon icon={faEnvelope} /></h4>
          <h5>example@gmail.com</h5>
        </div>
        <div className={styled.right}>
          <h4>آدرس ارتباط حضوری <FontAwesomeIcon icon={faLocationDot} /></h4>
          <h5>تهران: اشرفی اصفهانی - بلوار مرزداران - خیابان خرم رودی - برج الوند - واحد 25 - انتشارات نجوای قلم</h5>
        </div>
      </section>

    </div>
  )
}