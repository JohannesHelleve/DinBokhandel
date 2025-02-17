import { useLocation } from "react-router-dom";
import { Book } from "../types/Books";
import SearchBar from "../components/SearchBar";

export default function BookPage() {
    const location = useLocation();
    const { book } = location.state as { book: Book };
    return (
        <div>
            <div>
                <SearchBar />
            </div>
            <div>
                <img src={book.image} alt={book.title} />
                <h1>{book.title}</h1>
                <p>{book.author}</p>
            </div>
        </div>
    );
}