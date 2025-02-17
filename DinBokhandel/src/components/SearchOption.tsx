import { Routes, Route, Link } from "react-router-dom";
import { Book } from '../types/Books';

export default function SearchOption(book: Book) {
    return (
        <div className='bg-white w-full mx-auto mt-1 rounded-lg shadow-lg '>
        <div className='flex space-x-4 items-center'>
            <img src={book.image} alt={book.title} className='h-10' />
            <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            </div>
            <Link to={`/book/${book.id}`} state={{book}} className="ml-auto p-5">Les mer</Link>
        </div>
        </div>
    );
    }
    