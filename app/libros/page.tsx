const books = [
  { title: "La isla del tesoro", author: "Robert Louis Stevenson", description: "Una aventura clásica de piratas y búsqueda de un tesoro." },
  { title: "Frankenstein", author: "Mary Shelley", description: "Una novela sobre la ciencia, la responsabilidad y sus consecuencias." },
  { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", description: "Una obra fundamental de la literatura en español." },
];
export default function BooksPage() {
  return <><h1>Catálogo público</h1><p>Esta información puede consultarse sin iniciar sesión.</p><div className="book-list">{books.map(book => <article className="book" key={book.title}><h2>{book.title}</h2><p><strong>Autor:</strong> {book.author}</p><p>{book.description}</p></article>)}</div></>;
}
