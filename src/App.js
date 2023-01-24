import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";






import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BestBooks: [],
    }
  }

  //TODO: use axios to call out to my server get all the books from the DB 

  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`

      let bookData = await axios.get(url);

      this.setState({
        cats: catsData.data
      });

    } catch (error) {
      console.log(error.response)
    }

  }




  render() {
    console.log('App State >>>', this.state);
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}
  export default App;
