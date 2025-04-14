import React, { useState } from 'react';
import { Container, Card, Row, Col, Badge, Button, Modal, Form } from 'react-bootstrap';

// Import local images
import beachFestival from '../assets/beach1.jpg';
import yoga from '../assets/yoga.jpg';
import foodCarnival from '../assets/foodCarnival.jpg';
import sandArt from '../assets/sandart.png'
import nightConcert from '../assets/nightConcert.jpg';
import kiteFlying from '../assets/kite.jpg';

const events = [
  {
    title: 'Beach Festival',
    date: 'May 10, 2025',
    location: 'Panambur Beach',
    image: beachFestival,
    category: 'Festival',
  },
  {
    title: 'Sunset Yoga Session',
    date: 'May 12, 2025',
    location: 'Tannirbhavi Beach',
    image: yoga,
    category: 'Wellness',
  },
  {
    title: 'Food Carnival',
    date: 'May 14, 2025',
    location: 'Someshwar Beach',
    image: foodCarnival,
    category: 'Food & Fun',
  },
  {
    title: 'Sand Art Competition',
    date: 'May 18, 2025',
    location: 'Panambur Beach',
    image: sandArt,
    category: 'Art',
  },
  {
    title: 'Night Beach Concert',
    date: 'May 20, 2025',
    location: 'Tannirbhavi Beach',
    image: nightConcert,
    category: 'Music',
  },
  {
    title: 'Kite Flying Contest',
    date: 'May 22, 2025',
    location: 'Ullal Beach',
    image: kiteFlying,
    category: 'Games',
  },
];

function EventsPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleTicketClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedDate('');
    setSelectedTime('');
  };

  const handleConfirm = () => {
    alert(`Ticket booked for ${selectedEvent.title} on ${selectedDate} at ${selectedTime}`);
    handleClose();
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">📅 Upcoming Events</h2>
      <Row>
        {events.map((event, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={event.image} 
                alt={event.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>
                    <strong>Date:</strong> {event.date} <br />
                    <strong>Location:</strong> {event.location}
                  </Card.Text>
                  <Badge bg="info" className="mb-2">{event.category}</Badge>
                </div>
                <Button
                  variant="primary"
                  onClick={() => handleTicketClick(event)}
                >
                  Buy Ticket
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Ticket Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>🎟️ Book Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <>
              <h5>{selectedEvent.title}</h5>
              <p><strong>Location:</strong> {selectedEvent.location}</p>

              <Form>
                <Form.Group className="mb-3" controlId="formDate">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTime">
                  <Form.Label>Select Time</Form.Label>
                  <Form.Control
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={handleConfirm}
            disabled={!selectedDate || !selectedTime}
          >
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default EventsPage;