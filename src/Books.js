import axios from 'axios';
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import bookimg from './assets/bookimg.jpg'
import BookModal from './BookModal.js'
import BookUpdate from './BookUpdate.js'


class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal:false,
      selectedbook:{},
      showUpdateForm:false,
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    console.log('get books');
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`
      let bookData = await axios.get(url);
      this.setState({
        books: bookData.data
      });
      console.log('book data', bookData)
    } catch (error) {
      console.log(error.response)
    }
  }


  deleteBooks = async (id) => {
    // console.log('this is delete books function');
    try {
      console.log('delete books')
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks,
      })
    } catch (error) {
      console.log(error.response)
    }
  }


  //*** 2nd Handler to postBooks */
  postBooks = async (bookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let createdBook = await axios.post(url, bookObj);
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    } catch (error) {
      console.log(error.message);
    }
  }



  updateBooks = async (bookToUpdate) => {
    try {
      //TODO: URL SET FOR AXIOS 
      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`

      let updatedBook = await axios.put(url, bookToUpdate);

      //TODO: UPDATE STATE WITH THTA RETURN FROM AXIOS

      let updateBookArray = this.state.books.map(existingBook => {

        return existingBook._id === bookToUpdate._id
          ? updatedBook.data
          : existingBook


      })
      this.setState({
        books:updateBookArray
      })
    } catch (error) {
      console.log(error.messgae)
    }

  }

handleShow = () =>{
  this.setState({
    showModal:true
  })
}

handleClose = () =>{
  this.setState({
    showModal:false,
    showUpdateForm:false,

  })
}

handleOpenUpdateForm = (bookObj) =>{
  this.setState({
    showUpdateForm:true, 
    selectedbook:bookObj
  })
}



  //*** Create book handlers:  1 to handle the form subissio & 1 to the DB  */
 


  //REACT LIFECYCLE METHOD
  componentDidMount() {
    this.getBooks()
  }

  render() {
    // console.log('App State >>>', this.state);
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length ? (
          <Carousel slide={false}>
            {this.state.books.map((book, index) => {
              return (
                <Carousel.Item>
                  <img className='carouselimage' src={bookimg} alt="books" />
                  <Carousel.Caption>
                    <p>{book.title}</p>
                    <p>{book.description}</p>
                    {book.status ? (
                      <p>The book is available</p>
                    ) : (
                      <p>Book is not available</p>
                    )}
                    <Button onClick={() => this.deleteBooks(book._id)}>Delete a Book</Button>
                    <Button onClick={() => this.handleOpenUpdateForm (book)}>Update Book</Button>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}

          </Carousel>
        ) : (
          <h3> No Books Found and I will add some more : (</h3>
        )}
        <BookModal showmodal={this.state.showModal} handleClose = {this.handleClose} postBooks = {this.postBooks}/>
        <BookUpdate showmodal={this.state.showUpdateForm} handleClose = {this.handleClose} updateBooks = {this.updateBooks} selectedBook = {this.state.selectedbook}/>
        <Button variant="secondary" onClick={this.handleShow}>Add a Book</Button>
      </>
    )
  }

}

export default Books;
