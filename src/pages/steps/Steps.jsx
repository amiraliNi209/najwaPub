import styled from "./steps.module.css"
import { NavBar } from "../../componentes/NavBar/NavBar";
import { useState } from "react";
import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Steps() {

  const [activeTab, setActiveTab] = useState("one")

  const tabs = [
    { id: "one", icon: fa1, label: "تنظیم قرارداد برای چاپ کتاب", content: "در این مرحله بین نویسنده/ مترجم با انتشارات نجوای قلم قراردادی منعقد می‌شود. برای کسانی که در شهرستان سکونت دارند شرایطی فراهم می‌شود که به صورت غیرحضوری قرارداد منعقد کنند. در هر دو صورت اطلاعات مفید و لازم در اختیار مولف قرار می‌گیرد تا آگاهانه نسبت به چاپ آثار خود تصمیم‌گیری نماید." },
    { id: "two", icon: fa2, label: " تایپ کتاب و صفحه‌آرایی", content: "کار تحویلی به تایپیستی که در زمینه کتاب تخصص دارد داده می‌شود و سپس با توجه به موضوع کتاب و سایز مناسب صفحه‌آرایی می‌شود (معروف‌ترین سایز کتاب: جیبی، رقعی، وزیری، رحلی). در نهایت چک پرینتی به مولف داده می‌شود تا ایرادات نهایی را برطرف نماید. در این مرحله امکان دارد با صلاحدید مولف یا ناشر کار برای بررسی فنی و ادبی اصلاح گردد که این کار به یک ویراستار خبره واگذار می‌شود." },
    { id: "three", icon: fa3, label: "تعیین عنوان یک کتاب", content: "شاید اگر گفته شود که عنوان کتاب از اهمیت فوق‌العاده‌ای برخوردار است زیاد اغراق نکرده‌ایم و بهتر است در انتخاب نام کتاب از نظر دیگران هم بهره بگیرید. عنوان کتاب باید به گونه‌ای انتخاب شود که گویای مطالب مندرج در کتاب باشد." },
    { id: "four", icon: fa4, label: " طرح جلد کتاب", content: `در این مرحله بعد از رایزنی در مورد متن کتاب و نظر مولف، کتاب برای طراحی جلد به یک طراح خبره واگذار می‌شود.` },
    { id: "five", icon: fa5, label: "اختصاص شابک", content: `ناشر از طریق خانه کتاب و بخش شابک به کتاب یک شابک (شناسنامه استاندارد بین‌المللی کتاب) منحصر به فرد اختصاص می‌دهد که کتاب با آن شماره شناخته می‌شود.` },
    { id: "six", icon: fa6, label: "دریافت فیپا برای کتاب", content: `در این مرحله کتاب به همراه شابک به کتابخانه ملی ارجاع داده می‌شود تا فیپا (فهرستنویسی پیش از انتشار) به کتاب اختصاص داده شود.` },
    { id: "seven", icon: fa7, label: "دریافت مجوز کتاب", content: `در این مرحله فایل نهایی به وزارت فرهنگ و ارشاد اسلامی ارجاع داده می‌شود تا مجوز چاپ کتاب از وزارت فرهنگ و ارشاد اسلامی صادر گردد.` },
    { id: "eight", icon: fa8, label: " تهیه فیلم و زینک متن و جلد کتاب", content: `کتاب‌هایی که با تیراژ بالای هزار نسخه چاپ می‌شود این مرحله انجام می‌گیرد (مقرون به صرفه می‌باشد). برای کتاب‌هایی که به صورت دیجیتالی و با تیراژ پایین چاپ می‌شود نیازی به تهیه زینک و فیلم نمی‌باشد.` },
    { id: "nine", icon: fa9, label: " چاپ متن و جلد کتاب", content: "متن نهایی به چاپخانه جهت مراحل نهایی چاپ ارسال می‌شود." },
    { id: "ten", icon: fa1, label: "انتخاب سلفون و یووی", content: "جهت جلوگیری از خط و خش روی جلد کتاب از این نوع سلفون استفاده می‌شود." },
    { id: "eleven", icon: fa1, label: "صحافی کتاب", content: "مرحله نهایی کتاب به صحافی اختصاص دارد که بعد از عمل تا و ترتیب فرم‌های چاپ جلد شده و صحافی می‌گردد." },
    { id: "tewelve", icon: fa1, label: "مشاوره و ارسال آثار", content: "می‌توانید آثار خود را برای بررسی به آدرس ایمیل ما ارسال و یا برای مشاوره بیشتر با شماره زیر تماس بگیرید:" }
  ]



  return (
    <div className={styled.stepsContainer}>
      <NavBar />

      <div className={styled.main}>
        <sectoin className={styled.container}>

          <div className={styled.list}>

            {tabs.map((tab) => (
              <label key={tab.id} className={`${tab.id} ${activeTab === tab.id ? styled.active : ""}`} onClick={() => setActiveTab(tab.id)}>
                <div>
                {tab.id === "ten" ? <FontAwesomeIcon icon={fa0}/> : ""}
                {tab.id === "eleven" ? <FontAwesomeIcon icon={fa1}/> : ""}
                {tab.id === "tewelve" ? <FontAwesomeIcon icon={fa2}/> : ""}
                <FontAwesomeIcon icon={tab.icon} />
                </div>
                <span>{tab.label}</span>
              </label>
            ))}

          </div>

          <div className={styled.mainContent}>

            {tabs.map((tab) => (
              <div key={tab.id} className={`text ${tab.id} ${activeTab === tab.id ? styled.show : styled.hide}`}>
                <p>{tab.content}</p>
              </div>
            ))}

          </div>

        </sectoin>
      </div>

    </div>
  )
}