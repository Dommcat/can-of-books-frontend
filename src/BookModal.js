
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


import './BookModal';


class BookModal extends React.Component {

  render() {

    return (

      <Modal show = {this.props.showModal}
      onHide = {this.props.hideModal}>

        <Modal.Body>
          <Container className="mt-5">
            <Form onSubmit={this.props.addBook}>

              <Form.Group controlId="name">
                <Form.Label>Title</Form.Label>
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
                <Button type="submit">Different?</Button></div>
            </Form>

          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default BookModal;

