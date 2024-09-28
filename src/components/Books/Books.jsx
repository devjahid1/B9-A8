import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('Book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-7'>Books</h2>
            <div className="lg:grid grid-rows-3 grid-flow-col gap-5 mt-10">
                    {
                        books.map(book =><Book key={book.id} book={book}></Book>)
                    }
            </div>
        </div>
    );
};

export default Books;