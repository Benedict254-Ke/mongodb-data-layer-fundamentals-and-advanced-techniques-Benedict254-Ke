// insert_books.js

db.books.insertMany([
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", published_year: 1925, price: 12.99, in_stock: true, pages: 180, publisher: "Scribner" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", published_year: 1960, price: 14.99, in_stock: true, pages: 281, publisher: "J.B. Lippincott & Co." },
  { title: "1984", author: "George Orwell", genre: "Dystopian", published_year: 1949, price: 10.99, in_stock: false, pages: 328, publisher: "Secker & Warburg" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", published_year: 1937, price: 16.50, in_stock: true, pages: 310, publisher: "Allen & Unwin" },
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure", published_year: 1988, price: 11.99, in_stock: true, pages: 208, publisher: "HarperCollins" },
  { title: "Becoming", author: "Michelle Obama", genre: "Biography", published_year: 2018, price: 19.99, in_stock: true, pages: 426, publisher: "Crown" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic", published_year: 1951, price: 13.50, in_stock: false, pages: 214, publisher: "Little, Brown and Company" },
  { title: "Atomic Habits", author: "James Clear", genre: "Self-Help", published_year: 2018, price: 20.00, in_stock: true, pages: 320, publisher: "Penguin" },
  { title: "Educated", author: "Tara Westover", genre: "Memoir", published_year: 2018, price: 15.99, in_stock: true, pages: 334, publisher: "Random House" },
  { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", genre: "Self-Help", published_year: 2016, price: 18.00, in_stock: true, pages: 224, publisher: "HarperOne" }
])
