import React from 'react'
import ReactDOM from 'react-dom/client'

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src="https://m.media-amazon.com/images/I/81IOICDo00L._SY466_.jpg" />
)
const Title = () => <h2>Batalha do Apocalipse</h2>
const Author = () => <h4>Eduardo Spohr</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
