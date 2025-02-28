import { NavBar } from '../../componentes/NavBar/NavBar';
import styled from "./Books.module.css"

export  function  Books(p){
  return (
    <div className={styled.booksPageWrapper}>
      <NavBar />

      <section className={styled.topContainer}>
        <h1 className={styled.title}>فهرست آثار</h1>
      </section>
    </div>
  )
}