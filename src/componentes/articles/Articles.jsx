import styled from "./Articles.module.css"
import image from "../../assets/images/books/آخرین آرزو جلد.jpg"

export function Article(p) {
    return (

        <div className={styled.articles}>

          <div className={styled.imageContainer}>
            <img src={image} />
          </div>

          <div className={styled.infoContainer}>
            <div className={styled.bookName}>{p.article.title}</div>
            <div className={styled.author}>{p.article.author}</div>
          </div>

        </div>

    )
}