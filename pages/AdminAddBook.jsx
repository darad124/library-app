import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function AdminAddBook() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { ...book, id: uuidv4() };
    dispatch({ type: 'ADD_BOOK', payload: newBook });
    setBook({
      name: '',
      isbn: '',
      category: '',
      position: '',
      count: '',
      cost: '',
      availability: ''
    });
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

      {/* Add more form groups for the other book properties */}

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
        Add Book
      </Button>
    </Form>
  );
}

export default AdminAddBook;
