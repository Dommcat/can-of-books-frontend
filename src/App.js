import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Books from './Books';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom";
import About from './About.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Books: [],
    }
  }

  // PLACEHOLDER: add a route with a path of '/about' that renders the `About` component

  render() {
    return (
      <>
        <Router>
          <Header />

          <Routes>
            <Route
              // eslint-disable-next-line react/jsx-no-comment-textnodes
            path="/"
              element={<Books />}

            />

            {/* <Books/> */}
            {/* </Route> */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* <About /> */}

          </Routes>



          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
