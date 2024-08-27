import React from 'react'
import ReactDOM from 'react-dom/client'
import book from './assets/book-1.jpg'
import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'A Lenda de Ruff Ghanor: O Garoto-Cabra'
  const author = 'Leonel Caldela'

  return (
    <article className="book">
      <img src={book} alt="A lenda de Ruff Ghanor Vol. 1" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
