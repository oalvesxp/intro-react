const Book = ({ img, title, author, getBook, id, number }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>Display</button>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  )
}

export default Book
