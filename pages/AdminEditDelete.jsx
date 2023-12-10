import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

function AdminEditDelete() {
  const dispatch = useDispatch();
  const books = useSelector(state => state); // Access the books from the Redux store
  const [book, setBook] = useState({
    id: '',
    name: '',
    isbn: '',
    category: '',
    position: '',
    count: '',
    cost: '',
    availability: ''
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSelectBook = (e) => {
    const selectedBook = books.find(book => book.id === e.target.value);
    setBook(selectedBook);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch({ type: 'EDIT_BOOK', payload: book });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch({ type: 'DELETE_BOOK', payload: book.id });
  };

  return (
    <Form>
      <Form.Group controlId="formSelectBook">
        <Form.Label>Select Book</Form.Label>
        <Form.Control as="select" onChange={handleSelectBook}>
          {books.map((book, idx) => (
            <option key={idx} value={book.id}>{book.name}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBookName">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="text" name="name" value={book.name} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formBookISBN">
        <Form.Label>Book ISBN</Form.Label>
        <Form.Control type="text" name="isbn" value={book.isbn} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formBookCategory">
        <Form.Label>Book Category</Form.Label>
        <Form.Control type="text" name="category" value={book.category} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formShelfPosition">
        <Form.Label>Shelf Position</Form.Label>
        <Form.Control type="text" name="position" value={book.position} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formBookCount">
        <Form.Label>Book Count</Form.Label>
        <Form.Control type="number" name="count" value={book.count} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formBookCost">
        <Form.Label>Cost</Form.Label>
        <Form.Control type="number" name="cost" value={book.cost} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formBookAvailability">
        <Form.Label>Availability</Form.Label>
        <Form.Control type="text" name="availability" value={book.availability} onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" onClick={handleEdit}>
        Edit Book
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Delete Book
      </Button>
    </Form>
  );
}

export default AdminEditDelete;
