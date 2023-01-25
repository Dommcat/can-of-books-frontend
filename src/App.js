import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Books from './Books';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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
              exact path="/"
              element={<Books
                Books={this.state.Books}
            />}
          >
          </Route>
          <Route
            exact path="/about"
            element={<About />}
          >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
