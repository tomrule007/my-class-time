import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './scss/layout.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Navbar />
    <div className="content container">
      Hello World
    </div>
    <Footer />
  </Router>
);

export default App;
