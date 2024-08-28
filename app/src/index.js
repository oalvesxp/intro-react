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
    id: 1,
  },
  {
    title: 'OZOB: Protocolo Molotov',
    author: 'Deive Pazos',
    img: book2,
    id: 2,
  },
  {
    title: 'O cavaleiro dos Sete Reinos',
    author: 'George R. R. Martin',
    img: book3,
    id: 3,
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return (
          <Book {...book} key={book.id}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              eius aperiam voluptatem neque quas. Sunt expedita eveniet neque
              dolore culpa.
            </p>
            <button>Saiba Mais</button>
          </Book>
        )
      })}
    </section>
  )
}

const EventExamples = () => {
  const handle = () => {
    console.log('handle form input')
  }

  const handleButtonClick = () => {
    alert('handle button click')
  }

  return (
    <section>
      <form>
        <h2>Formulário</h2>
        <input
          type="text"
          name="example"
          onChange={handle}
          style={{ margin: '1rem 0', padding: '0.2rem' }}
        />
      </form>
      <button
        type="submit"
        onClick={handleButtonClick}
        style={{
          padding: '6px 12px',
          border: 'none',
          borderRadius: '4px',
          background: 'rgb(54, 54, 54)',
          color: '#FAFAFA',
        }}
      >
        Clique Aqui
      </button>
    </section>
  )
}

const Book = ({ img, title, author, children }) => {
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
