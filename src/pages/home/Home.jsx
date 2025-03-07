import { NavBar } from "../../componentes/NavBar/NavBar";
import styled from "./home.module.css"
import { Footer } from "../../componentes/footer/footer";
import { Article } from "../../componentes/articles/Articles.jsx";
import logo from "../../assets/images/logo-removebg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronLeft, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import image1 from "../../assets/images/profile/pro-fake(1).png"
import image2 from "../../assets/images/profile/pro-fake(2).png"
import image3 from "../../assets/images/profile/pro-fake(3).png"
import image4 from "../../assets/images/profile/pro-fake(4).png"
import creative from "../../assets/images/creative.webp"
import poetry from "../../assets/images/poetry.webp"
import { Link } from "react-router-dom";





export function Home() {

    const data = [
        {
            "id": 1,
            "title": "عنوان 1",
            "content": "متن 1",
            "date": "2021-01-01",
            "author": "نویسنده 1"
        },
        {
            "id": 2,
            "title": "عنوان 2",
            "content": "متن 2",
            "date": "2021-01-01",
            "author": "نویسنده 2"
        },
        {
            "id": 3,
            "title": "عنوان 3",
            "content": "متن 3",
            "date": "2021-01-01",
            "author": "نویسنده 3"
        },
        {
            "id": 4,
            "title": "عنوان 4",
            "content": "متن 4",
            "date": "2021-01-01",
            "author": "نویسنده 4"
        }
    ]

    return (

        <div className={styled.homeWrapper}>
            <NavBar />

            <div className={styled.bannerContainer}>

                <div className={styled.logoContainer}><img src={logo} alt="انتشارات نجوای قلم" className={styled.logo} /></div>

                <h1 className={styled.brandName}>انتشارات نجوای قلم</h1>

                <div className={styled.sd}><h3 ><FontAwesomeIcon className={styled.chevronDown} icon={faChevronDown} /> به سمت
                    پائین پیمایش کنید</h3>
                </div>
            </div>

            <div className={styled.bestAuthors}>
                <div className={styled.row}>
                    <div className={styled.article}>
                        <img src={image1} alt="bestAuthors" />
                        <h3>نویسنده شماره یک</h3>
                    </div>
                    <div className={styled.article}>
                        <img src={image2} alt="bestAuthors" />
                        <h3>نویسنده شماره دوم</h3>
                    </div>
                </div>
                <div className={styled.row}>
                    <div className={styled.article}>
                        <img src={image3} alt="bestAuthors" />
                        <h3>نویسنده شماره سه</h3>
                    </div>
                    <div className={styled.article}>
                        <img src={image4} alt="bestAuthors" />
                        <h3>نویسنده شماره چهار</h3>
                    </div>
                </div>
            </div>

            <section className={styled.cretiveContainer}>
                <div className={styled.imageContainer}><img src={creative} /></div>
                <div className={styled.creativeTextContent}>
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                    <h2>نوسیندگی خلاق</h2>
                    <p>"نویسندگی خلاق دنیایی بی‌کران از ایده‌ها و سبک‌هاست. در این صفحه، با اصول نویسندگی خلاق، ویژگی‌های ادبیات داستانی مدرن و پست‌مدرن، و تفاوت‌های شخصیت‌پردازی و پایان‌بندی در داستان آشنا شوید. همراه ما باشید تا مرزهای روایت را گسترش دهید!"</p>
                </div>
            </section>
            <section className={styled.poetryContainer}>
                <div className={styled.imageContainer}><img src={poetry} /></div>
                <div className={styled.TextContent}>
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                    <h2>شعر و ترانه</h2>
                    <p>"شعر و ترانه، دو جلوه از بیان احساس و اندیشه‌اند. در این صفحه، با شعر کلاسیک و نو، تفاوت ترانه و شعر، و سبک‌های ادبی از رودکی تا نیما آشنا شوید. سفری به دنیای کلمات و موسیقی در انتظار شماست!"</p>
                </div>
            </section>
            <section className={styled.isbnContainer}>
                <div className={styled.imageContainer}><img src={creative} /></div>
                <div className={styled.TextContent}>
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                    <h2>شابک</h2>
                    <p>"شابک (ISBN) شماره‌ای جهانی برای شناسایی کتاب‌هاست. در این صفحه با تاریخچه، کاربردها و نظام شماره‌گذاری شابک در ایران آشنا شوید و اهمیت آن در نشر را کشف کنید."</p>
                </div>
            </section>
            <section className={styled.fipaContainer}>
                <div className={styled.imageContainer}><img src={creative} /></div>
                <div className={styled.TextContent}>
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                    <h2>فیپا چیست ؟</h2>
                    <p>برای دسترسی به اطلاعات جامع و مفید در مورد فرآیند فهرستنویسی پیش از انتشار (فیپا)، مراحل اجرایی، استانداردها و مزایای آن، به صفحه مربوطه مراجعه کنید. این اطلاعات به شما کمک می‌کند تا با روند قانونی و فنی فیپا آشنا شوید و از فواید آن بهره‌برداری کنید.</p>
                </div>
            </section>

            <div className={styled.articlesWrapper}>
                {
                    data.map(article => (
                        <Article key={article.id} article={article} />
                    ))
                }
            </div>

            <Link to="/books"><p className={styled.allBooksLi}> مشاهده تمام آثار <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faChevronLeft} /></p></Link>

            <Footer />
        </div>

    )
}