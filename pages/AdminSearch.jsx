import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button, Form, FormControl, Card, Row, Col } from 'react-bootstrap';

function AdminSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Call useNavigate to get the navigate function
  const [searchTerm, setSearchTerm] = useState('');
  const books = useSelector(state => state); // Access the books from the Redux store


  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to handle the search
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_BOOK", payload: id });
  };
  const handleEdit = (id) => {
    navigate(`/book/${id}`);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.includes(searchTerm)
  );

  return (
    <div>
      <Form inline onSubmit={handleSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
      <Row xs={1} md={2} lg={4} className="g-4">
        {filteredBooks.map((book, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>
                  ISBN: {book.isbn}
                  <br />
                  Category: {book.category}
                  <br />
                  Shelf Position: {book.position}
                  <br />
                  Count: {book.count}
                  <br />
                  Cost: {book.cost}
                  <br />
                  Availability: {book.availability}
                </Card.Text>
                <Button variant="primary" onClick={() => handleEdit(book.id)}>
                  Edit
                </Button>

                <Button variant="danger" onClick={() => handleDelete(book.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AdminSearch;
