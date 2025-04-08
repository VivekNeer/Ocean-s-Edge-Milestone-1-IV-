import React from 'react';
import { Container, Button } from 'react-bootstrap';

function HomePage() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Mangalore Beach Events 🌴</h1>
      <p>Discover festivals, beach parties, and more!</p>
      <Button variant="primary">Explore Events</Button>
    </Container>
  );
}

export default HomePage;