import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`
      let bookData = await axios.get(url);
      this.setState({
        books: bookData.data
      });
    } catch (error) {
      console.log(error.response)
    }
  }


  deleteBooks = async () => {
    let url = `${process.env.REACT_APP_SERVER}/books/${id}`
    await axios.delete(url);
  }

    let updatedBooks = this.state.books.filter(book => book._id !== id);

this.setState({
  books: updatedBooks
})


//*** Create book handlers:  1 to handle the form subissio & 1 to pist to the DB  */

//TODO: Build a boon object form my from values 
let newBook = {
  name: event.target.name.value,
  color:

    console.log()
}
// TODO: post my cat to DB using my 2nd handler




//*** 2nd Handler to postBooks */
postBooks = (catObj) => {

}




//REACT LIFECYCLE METHOD
ComponentDidMount() {
  this.getBooks()
}


render() {
  console.log('App State >>>', this.state);
  /* TODO: render all the books in a Carousel */

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
      {this.state.books.length ? (
        <Carousel slide={false}>
          {this.state.books.map((book, index) => {
            return (
              <Carousel.Item>
                <img src={bookImg} alt="" />
                <P>{book.title}</P>
                <P>{book.description}</P>
                {book.status ? (
                  <p>The book is available</p>
                ) : (
                  <p>Book is not available</p>
                )}
              </Carousel.Item>
            )
          })}

        </Carousel>
      ) : (
        <h3> No Books Found : (</h3>
      )}
    </>
}

export default BestBooks;
