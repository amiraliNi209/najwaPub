
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import styled from "./footer.module.css"
import {Link} from "react-router-dom";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
export function Footer(p) {
    return (
        <div className={styled.footerContainer}>
          <div className={styled.top}>
            <div className={styled.icons}>
              <FontAwesomeIcon icon={faInstagram} className={styled.icon} />
              <FontAwesomeIcon icon={faTelegram} className={styled.icon} />
              <FontAwesomeIcon icon={faWhatsapp} className={styled.icon} />
            </div>
            <div className={styled.copyRight}>
              . کلیه حقوق این سایت محفوظ و متعلق به انتشارات نجوای قلم می باشد ©
            </div>
          </div>
          <div className={styled.bottom}>
            <ul className={styled.linksContainer}>
              <li className={styled.li}><Link className={styled.link} to="/ContactUs">تماس با ما</Link></li>
              <li className={styled.li}><Link className={styled.link} to="Send">ارسال و بررسی آثار</Link></li>
              <li className={styled.li}>سوال های متداول</li>
              <li className={styled.li}>مراحل چاپ کتاب</li>
            </ul>
          </div>
        </div>
    )
}