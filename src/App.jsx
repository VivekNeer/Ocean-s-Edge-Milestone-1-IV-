import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/Home';
import EventsPage from '../src/pages/Event';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </>
  );
}

export default App;