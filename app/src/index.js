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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src={book} alt="A lenda de Ruff Ghanor Vol. 1" />
const Title = () => <h2>A Lenda de Ruff Ghanor: O Garoto-Cabra</h2>

const Author = () => {
  const inLine = {
    color: '#e87202',
    fontSize: '0.75',
    fontStyle: 'italic',
    fontWeight: '500',
    marginTop: '0.75rem',
  }
  return <h4 style={inLine}>Leonel Caldela</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
