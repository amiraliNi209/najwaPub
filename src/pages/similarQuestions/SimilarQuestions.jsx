import styled from "./SimilarQuestions.module.css"
import { NavBar } from "../../componentes/NavBar/NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

export function SimilarQuestions(p) {
  return (
    <div className={styled.SimilarQuestionsContainer}>
      <NavBar />
      <section className={styled.head}>
        <h1 className={styled.title}>سوال های متدوال</h1>
        <p><FontAwesomeIcon icon={faChevronDown} className={styled.chevronDown}/>در این بخش تعدادی از سوال های متداول شما پاسخ داده شده است</p>
      </section>
      <section className={styled.main}>
        
      </section>
    </div>
  )
}