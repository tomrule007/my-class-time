import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Navbar />
    <div>
      Hello World
    </div>
    <Footer />
  </Router>
);

export default App;
