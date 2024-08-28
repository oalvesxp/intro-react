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
      <Book img={first.img} title={first.title} author={first.author}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          architecto magnam non. Autem, corporis. Quas earum consectetur
          assumenda explicabo sapiente.
        </p>
        <button>Saiba Mais</button>
      </Book>
      <Book img={second.img} title={second.title} author={second.author}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          commodi voluptatum culpa praesentium et laborum.
        </p>
        <button>Saiba Mais</button>
      </Book>
      <Book img={third.img} title={third.title} author={third.author}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          blanditiis asperiores voluptates suscipit beatae nemo magnam
          provident.
        </p>
        <button>Saiba Mais</button>
      </Book>
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
