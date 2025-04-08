import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/Home';
import EventsPage from '../src/pages/Event';
import CalendarPage from '../src/pages/Calender';
import ReviewsPage from '../src/pages/Reviews'; 
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/reviews" element={<ReviewsPage />} /> 
      </Routes>
    </>
  );
}

export default App;