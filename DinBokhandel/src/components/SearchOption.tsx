import { Book } from '../types/Books';

export default function SearchOption(book: Book) {
    return (
        <div className='bg-white w-full mx-auto mt-1 rounded-lg shadow-lg '>
        <div className='flex items-center justify-between '>
            <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            </div>
            <img src={book.image} alt={book.title} className='h-20' />
        </div>
        </div>
    );
    }
    