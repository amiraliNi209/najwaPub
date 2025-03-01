
import styled from "./navBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChildReaching , faQuestion , faWebAwesome } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export function NavBar(p) {

    const [isOpen, setIsOpen] = useState(false);

    const [isScrolled , setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500){
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

    function handelMouseEnter() {
        setIsOpen(true);
    }
    function handelMouseLeave() {
        setIsOpen(false);
    }


    return (
        <div className={isScrolled ? styled.sticky : styled.navBar}>
            <FontAwesomeIcon icon={faBars} className={styled.barsIcon} onClick={() => {
                setIsOpen(!isOpen);
            }} onMouseEnter={handelMouseEnter} />

            {isOpen && (
                <div className={styled.menu} >
                    {isOpen && (<FontAwesomeIcon className={styled.xMark} icon={faXmark} onClick={()=>{setIsOpen(false)}} />)}
                    <ul className={styled.ul} onMouseLeave={handelMouseLeave} >
                        <li className={styled.li}><Link to="/" className={styled.ulLink}>صفحه اصلی<span style={{ marginLeft: "5px" }}><FontAwesomeIcon icon={faHouse} /></span></Link></li>
                        <li className={styled.li}>جستجوهای مرتبط<span style={{ marginLeft: "5px" }}><FontAwesomeIcon icon={faMagnifyingGlass} /></span></li>
                        <li className={styled.li}><Link className={styled.ulLink} to="/ChildrenAndTeenagers">بخش کودک نوجوان<span style={{ marginLeft: "5px" }}><FontAwesomeIcon icon={faChildReaching} /></span></Link></li>
                        <li className={styled.li}><Link className={styled.ulLink} to="/similarQuestions">سوال های متدوال<span style={{ marginLeft: "5px" }}><FontAwesomeIcon icon={faQuestion} /></span></Link></li>
                        <li className={styled.li}>نویسندهای خلاق<span style={{ marginLeft: "5px" }}><FontAwesomeIcon icon={faWebAwesome} /></span></li>
                        <li className={styled.li}>خبرنامه<span style={{ marginLeft: "5px" }}><FontAwesomeIcon icon={faHouse} /></span></li>
                    </ul>
                </div>
            )}

            <div className={styled.navLi}>
              <li><Link to="/ContactUs" className={styled.link}>تماس با ما</Link></li>
              <li><Link to="/books" className={styled.link}>فهرست کتاب ها</Link></li>
            </div>

            <div className={styled.searchContainer}>

                <input type="text" id="searchInput" className={styled.searchInput} />

                <div className={styled.searchBtn} >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>


            </div>

        </div>
    )
}