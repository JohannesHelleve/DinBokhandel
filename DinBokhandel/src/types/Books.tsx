// Represents a Review for a book
type Review = {
    user: string;       // Username of the reviewer
    comment: string;    // The review comment
    rating: number;     // Rating given by the reviewer (usually from 1-5)
  }
  
  export type Book = {
    id: number;              // Unique identifier for the book
    title: string;           // Title of the book
    author: string;          // Author of the book
    genre: string;           // Genre of the book (e.g., Adventure, Fiction)
    published_year: number; // Year the book was published
    isbn: string;            // ISBN number of the book
    pages: number;           // Number of pages in the book
    language: string;        // Language of the book (e.g., English)
    publisher: string;       // Publisher of the book
    price: number;           // Price of the book
    available: boolean;      // Availability status of the book
    image: string;           // URL of the book cover image
    rating: number;          // Overall rating of the book (average of all reviews)
    reviews: Review[];       // Array of reviews for the book
  }
  
