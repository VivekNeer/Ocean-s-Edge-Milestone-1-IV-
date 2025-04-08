import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function EventsPage() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Beach Festival</Card.Title>
              <Card.Text>Date: May 10, 2025 | Location: Panambur Beach</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more event cards here */}
      </Row>
    </Container>
  );
}

export default EventsPage;