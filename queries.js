// queries.js

// 1️⃣ Find all books in a specific genre
db.books.find({ genre: "Self-Help" })

// 2️⃣ Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } })

// 3️⃣ Find books by a specific author
db.books.find({ author: "George Orwell" })

// 4️⃣ Update the price of a specific book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 12.50 } }
)

// 5️⃣ Delete a book by its title
db.books.deleteOne({ title: "The Catcher in the Rye" })

// 6️⃣ Find books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// 7️⃣ Projection: return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// 8️⃣ Sorting by price ascending
db.books.find().sort({ price: 1 })

// 9️⃣ Sorting by price descending
db.books.find().sort({ price: -1 })

// 🔟 Pagination: limit and skip (5 per page)
db.books.find().limit(5) // page 1
db.books.find().skip(5).limit(5) // page 2

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
])

// Group books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $concat: [{ $toString: { $multiply: ["$_id", 10] } }, "s"] },
      count: 1,
      _id: 0
    }
  }
])

// Create index on title
db.books.createIndex({ title: 1 })

// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

// Use explain() to show query performance
db.books.find({ title: "The Hobbit" }).explain("executionStats")

