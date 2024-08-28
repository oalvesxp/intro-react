import React from 'react'
import ReactDOM from 'react-dom/client'
import book1 from './assets/book-1.jpg'
import book2 from './assets/book-2.jpg'
import book3 from './assets/book-3.jpg'
import './index.css'

const first = {
  title: 'A Lenda de Ruff Ghanor: O Garoto-Cabra',
  author: 'Leonel Caldela',
  img: book1,
}

const second = {
  title: 'OZOB: Protocolo Molotov',
  author: 'Deive Pazos',
  img: book2,
}

const third = {
  title: 'O cavaleiro dos Sete Reinos',
  author: 'George R. R. Martin',
  img: book3,
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book img={first.img} title={first.title} author={first.author} />
      <Book img={second.img} title={second.title} author={second.author} />
      <Book img={third.img} title={third.title} author={third.author} />
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
