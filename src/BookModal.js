
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


import './BookModal';


class BookModal extends React.Component {
  handleBookSubmit = (event) => {
    event.preventDefault();

    let newBook = {
      title:event.target.name.value,
      author:event.target.author.value,
      description:event.target.description.value,
      status:event.target.read.checked,
    }
    this.props.postBooks(newBook);
    this.props.handleClose(); 
  }
  render() {

    return (

      <Modal show = {this.props.showmodal}
      onHide = {this.props.handleClose}>

        <Modal.Body>
          <Container className="mt-5">
            <Form onSubmit={this.handleBookSubmit}>

              <Form.Group controlId="name">
                <Form.Label>Title</Form.Label>
                <Form.Control type="test" />
              </Form.Group>

              <Form.Group controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control type="test" />
              </Form.Group>


              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="test" />
              </Form.Group>

              <Form.Group controlId="read">
                <Form.Check type="checkbox" label="Read" />
              </Form.Group>

              <div className="flex justify-content-center">
                <Button type="submit">Submit</Button></div>
            </Form>

          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default BookModal;

