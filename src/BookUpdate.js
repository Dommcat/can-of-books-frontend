
import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-boostrap/Modal';
import Button from 'react-bootstrap/Button';


class BookUpdate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.book?._id,
      name: this.props.book?.title,
      description: this.props.book.description,
      read: this.book.read,

    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onUpdate(this.state);
    this.handleClose();

  };

  handleChangeTitle = event => {
    this.setState({ title: event.target.value });

  };

  handleChangeDesc = event => {
    this.setState({ description: event.target.value });

  };

  handleChangeRead = event => {
    this.setState({ read: event.target.checked });

  };

  handleClose = () => {
    this.props.onClose();

  };

  render() {

    return (

      <Modal show={this.props.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Update</Modal.Title>


        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit} className="p-4" >
            <Form.Label>
              <h1>
                Book Update
              </h1>
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text"
              placeholder="Book Title" 
              onChange={this.handleTitleChange} 
              value={this.state.title} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text"
              placeholder="Description" 
              onChange={this.handleDescriptionChange} 
              value={this.state.description} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check type="checkbox" 
              label="Read" 
              onChange={this.handleReadChange} checked={this.state.read} />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>

      </Modal>
    );
  }
}

export default BookUpdate;


