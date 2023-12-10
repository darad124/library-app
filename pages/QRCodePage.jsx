import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';

function QRCodePage({ match }) {
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
    // Fetch the book details using the ID from the URL (match.params.id)
    // and update the state using setBook
  }, [match.params.id]);

  return (
    <div>
      <h1>{book.name}</h1>
      <QRCode value={book.isbn} />
    </div>
  );
}

export default QRCodePage;
