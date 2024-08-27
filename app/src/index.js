import React from 'react'
import ReactDOM from 'react-dom/client'
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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src="https://m.media-amazon.com/images/I/91w-SqrDpnL._SY342_.jpg" />
)
const Title = () => <h2>A Lenda de Ruff Ghanor: O Garoto-Cabra</h2>
const Author = () => <h4>Leonel Caldela</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
