import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, ListGroup, Card, Row, Col } from 'react-bootstrap';
import { CalendarEvent, GeoAltFill } from 'react-bootstrap-icons';

const events = [
  { date: new Date(2025, 4, 10), title: 'Beach Festival', location: 'Panambur Beach' },
  { date: new Date(2025, 4, 12), title: 'Sunset Yoga Session', location: 'Tannirbhavi Beach' },
  { date: new Date(2025, 4, 14), title: 'Food Carnival', location: 'Someshwar Beach' },
  { date: new Date(2025, 4, 18), title: 'Sand Art Competition', location: 'Panambur Beach' },
  { date: new Date(2025, 4, 20), title: 'Night Beach Concert', location: 'Tannirbhavi Beach' },
  { date: new Date(2025, 4, 22), title: 'Kite Flying Contest', location: 'Ullal Beach' },
];

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getEventsForDate = (date) =>
    events.filter((event) => event.date.toDateString() === date.toDateString());

  const matchedEvents = getEventsForDate(selectedDate);

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4">📅 Festival Calendar</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="w-100 shadow-sm p-2 rounded"
          />
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card className="shadow p-3">
            <Card.Body>
              <Card.Title className="mb-3">
                Events on <span className="text-primary">{selectedDate.toDateString()}</span>
              </Card.Title>
              {matchedEvents.length > 0 ? (
                <ListGroup>
                  {matchedEvents.map((event, index) => (
                    <ListGroup.Item key={index} className="d-flex align-items-center gap-2">
                      <CalendarEvent className="text-success" />
                      <div>
                        <strong>{event.title}</strong>
                        <br />
                        <GeoAltFill className="text-danger me-1" />
                        {event.location}
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <Card bg="light" text="dark" className="p-3 text-center mt-2">
                  <p className="mb-0">No events scheduled for this date.</p>
                </Card>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CalendarPage;