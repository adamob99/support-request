import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SupportRequestForm from './components/SupportRequestForm';
import ConfirmationPage from './components/ConfirmationPage';
import { store } from './redux/store';


import './App.css';

const App = ({ store: providedStore }) => {
  return (
    <Provider store={providedStore || store}>
      <Router>
        <Routes>
          <Route path="/" element={<SupportRequestForm />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
