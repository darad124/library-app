import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';

function HomePage() {
  const books = useSelector(state => state); // Access the books from the Redux store

  return (
    <div>
      <h1>Welcome to the Bookshelf App!</h1>
      <p>This is a book management application with QR code functionality.</p>
      <Row xs={1} md={2} lg={4} className="g-4">
        {books.map((book, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>
                  ISBN: {book.isbn}<br />
                  Category: {book.category}<br />
                  Shelf Position: {book.position}<br />
                  Count: {book.count}<br />
                  Cost: {book.cost}<br />
                  Availability: {book.availability}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomePage;
