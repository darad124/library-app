import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import NavigationBar from './navbar'; 

import HomePage from '../pages/HomePage';
import AdminAddBook from '../pages/AdminAddBook';
import AdminSearch from '../pages/AdminSearch';
import AdminEditDelete from '../pages/AdminEditDelete';
import BookDetail from '../pages/BookDetail';
import QRCodePage from '../pages/QRCodePage';


function booksReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
}


const store = createStore(booksReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/add" element={<AdminAddBook />} />
          <Route path="/admin/search" element={<AdminSearch />} />
          <Route path="/admin/edit/:id" element={<AdminEditDelete />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/qr/:id" element={<QRCodePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
