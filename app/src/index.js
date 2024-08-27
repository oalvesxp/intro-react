import React from 'react'
import ReactDOM from 'react-dom/client'
import book1 from './assets/book-1.jpg'
import book2 from './assets/book-2.jpg'
import book3 from './assets/book-3.jpg'
import './index.css'

const title = 'A Lenda de Ruff Ghanor: O Garoto-Cabra'
const author = 'Leonel Caldela'

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={book1}
        title="A Lenda de Ruff Ghanor: O Garoto-Cabra"
        author="Leonel Caldela"
      />
      <Book img={book2} title="OZOB: Protocolo Molotov" author="Deive Pazos" />
      <Book
        img={book3}
        title="O cavaleiro dos Sete Reinos"
        author="George R. R. Martin"
      />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      {console.log(props)}
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
