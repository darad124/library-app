import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Form, Card } from 'react-bootstrap';

function BookDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const bookFromStore = useSelector(state => state.find(book => book.id === id));

  const [book, setBook] = useState({
    name: '',
    isbn: '',
    category: '',
    position: '',
    count: '',
    cost: '',
    availability: ''
  });

  useEffect(() => {
    if (bookFromStore) {
      setBook(bookFromStore);
    }
  }, [id, bookFromStore]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'EDIT_BOOK', payload: book });
  };

  return (
    <Form onSubmit={handleSubmit}>
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

      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
}

export default BookDetail;
