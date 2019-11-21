import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './scss/layout.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Navbar />
    <div className="content">
      <section className="container input">

        <div className="row">
          <h4>Days to have classes</h4>
          <label htmlFor="wantMonday">
            Monday
            <input name="wantMonday" type="checkbox" />
          </label>
          <label htmlFor="wantTuesday">
            Tuesday
            <input name="wantTuesday" type="checkbox" />
          </label>
          <label htmlFor="wantWednesday">
            Wednesday
            <input name="wantWednesday" type="checkbox" />
          </label>
          <label htmlFor="wantThursday">
            Thursday
            <input name="wantThursday" type="checkbox" />
          </label>
          <label htmlFor="wantFriday">
            Friday
            <input name="wantFriday" type="checkbox" />
          </label>
          <label htmlFor="wantSaturday">
            Saturday
            <input name="wantSaturday" type="checkbox" />
          </label>
          <label htmlFor="wantSunday">
            Sunday
            <input name="wantSunday" type="checkbox" />
          </label>
        </div>

        <div className="row">
          <h4>Desired start/end times</h4>
          <label htmlFor="startTime">
            Start Time
            <input name="startTime" type="time" />
          </label>
          <label htmlFor="endTime">
            End Time
            <input name="endTime" type="time" />
          </label>
        </div>

      </section>
    </div>
    <Footer />
  </Router>
);

export default App;
