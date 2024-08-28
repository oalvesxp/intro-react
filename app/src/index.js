import React from 'react'
import ReactDOM from 'react-dom/client'
import book1 from './assets/book-1.jpg'
import book2 from './assets/book-2.jpg'
import book3 from './assets/book-3.jpg'
import './index.css'

const books = [
  {
    title: 'A Lenda de Ruff Ghanor: O Garoto-Cabra',
    author: 'Leonel Caldela',
    img: book1,
  },
  {
    title: 'OZOB: Protocolo Molotov',
    author: 'Deive Pazos',
    img: book2,
  },
  {
    title: 'O cavaleiro dos Sete Reinos',
    author: 'George R. R. Martin',
    img: book3,
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book
        return <Book img={img} title={title} author={author} />
      })}
    </section>
  )
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
