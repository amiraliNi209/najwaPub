import { NavBar } from "../../componentes/NavBar/NavBar"
import styled from "./cretiveCreators.module.css"
import author from "../../assets/images/author.jpg"
import classicStorys from "../../assets/images/classicStorys.jpg"
import finishing from "../../assets/images/finishing.webp"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

export function CretiveCreators() {
  return (
    <div className={styled.cretiveCreatorsContainer}>
      <NavBar />

      <section className={styled.head}>
        <div className={styled.headImg}><img src={author} /> </div>
        <div className={styled.headTextContent}>
          <FontAwesomeIcon  icon={faQuoteLeft} />
          <h2>نویسندگی خلاق</h2>
          <p>انتشارات نجوای قلم در این بخش تلاش می‌نماید تا درباره نویسندگی خلاق اطلاعات گرانسنگی را در اختیار کاربران قرار دهد: اولین و مهم‌ترین گام برای نوشتن خلاق اعتماد به خود است و اینکه می‌توان بدون دنبال کردن راه‌های پیموده شده، بیکران‌های ناشناخته‌ای را با نوشتن در نوردید</p>
        </div>
      </section>

      <section className={styled.secondSn}>
        <div className={styled.snImg}><img src={classicStorys} /></div>
        <div className={styled.snTextContent}>
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h2>مولفه های ادبیات داستانی پست مدرن</h2>
          <p>داستان‌ها از نظر تبارشناسی به سه دوره اصلی تقسیم می‌شوند: کلاسیک، مدرن و پست‌مدرن. در داستان‌های کلاسیک (از سده هفدهم تا اوایل سده بیستم)، طرحی کلاسیک با گره‌افکنی، گره‌گشایی، زاویه دید و تعلیق مشخص وجود دارد، شخصیت‌پردازی در بستر داستان شکل می‌گیرد و زمان خطی است. در داستان‌های مدرن، طرح فشرده و کوتاه است و تأکید بر پرداخت صحنه و موقعیت داستان است. در داستان‌های پست‌مدرن، طرح به‌طور سنتی وجود ندارد و نوعی فروپاشی عمدی و بی‌نظمی دیده می‌شود که انسجام کلاسیک را از بین می‌برد. شناخت این تفاوت‌ها گام مهمی در انتخاب سبک نوشتن است.</p>
        </div>
      </section>
      <section className={styled.finishing}>
        <div className={styled.fImg}><img src={finishing} /></div>
        <div className={styled.fTextContent}>
          <FontAwesomeIcon icon={faQuoteLeft}/>
          <h2>شخصیت‌ها و پایان‌بندی</h2>
          <p>در داستان کلاسیک، شخصیت مرکزی فعال و برجسته است، اما در داستان مدرن با چند شخصیت کنش‌پذیر و برابر روبه‌رو هستیم. در داستان پست‌مدرن، شخصیت‌ها حضوری کاریکاتورگونه دارند. از نظر پایان‌بندی، داستان کلاسیک پایانی بسته و اقناع‌کننده دارد، درحالی‌که در داستان مدرن، پایان باز است و ادامه آن در ذهن خواننده شکل می‌گیرد. اما در داستان پست‌مدرن، پایان مشخصی وجود ندارد و حتی خواننده می‌تواند بخش‌های مختلف داستان را جابه‌جا کند، بدون اینکه به ساختار آن آسیبی برسد.</p>
        </div>
      </section>
    </div>
  )
}