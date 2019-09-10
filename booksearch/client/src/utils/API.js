import axios from "axios";

export default {
  // Gets all books
  searchBook:function(query,cb){
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`).then(function(response){
      cb(response)
      console.log(response)
    })
  },

  getBooks: function(cb) {
    axios.get("/api/books").then(function(response){
      cb(response)
    });
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id,cb) {
   axios.delete("/api/books/" + id).then(function(response){
      cb(response)
   });
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
