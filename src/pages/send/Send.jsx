import { NavBar } from "../../componentes/NavBar/NavBar.jsx"
import styled from "./Send.module.css"
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export function Send(p) {

    const [fileName, setFileName] = useState("فایلی انتخاب نشده است")

    const handelFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setFileName(file.name)
        } else {
            setFileName("فایلی انتخاب نشده است")
        }
    }

    return (
        <div className={styled.contactusWrapper}>
            <NavBar />
            <h1 className={styled.title}> ارسال و بررسی آثار </h1>
            <div className={styled.sendFormat}>
                <h3>فرمت ارسال آثار</h3>
                <ul>
                    <li>............نام و نام خانوادگی</li>
                    <li>...سابقه ، رزومه فعالیت ها</li>
                    <li>..........................نوع اثر</li>
                    <li>...................شماره تماس</li>
                    <li>....................آدرس ایمیل</li>
                </ul>
            </div>
            <div className={styled.info}>
                <h4>آدرس : تهران: اشرفی اصفهانی - بلوار مرزداران - خیابان خرم رودی - برج الوند - واحد 25 - انتشارات نجوای قلم</h4>
                <h4>0098 921 1386 602</h4>
                <h4>021-666-777-35</h4>
                <h4>example@gmail.com</h4>
            </div>
            <div className={styled.iconContainer}>
                <div className={styled.icons}>
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTelegram} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
            </div>
            <div className={styled.inputContainer}>
                <input type="file" className={styled.fileInput} id="file-input" onChange={handelFileChange} />
                <label for="file-input">فایل خود را ارسال کنید</label>
                <span style={{ marginLeft: "10px" }}>{fileName}</span>
            </div>
        </div>
    )
}