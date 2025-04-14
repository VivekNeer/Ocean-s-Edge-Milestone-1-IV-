import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, ListGroup, Card, Row, Col } from 'react-bootstrap';
import { CalendarEvent, GeoAltFill } from 'react-bootstrap-icons';
import '../styles/Calender.css';

const sampleTitles = [
  'Beach Festival',
  'Sunset Yoga',
  'Food Carnival',
  'Sand Art Showdown',
  'Night Beach Concert',
  'Kite Flying Contest',
  'Marine Photography Workshop',
  'Surfing Lessons',
  'Eco Beach Cleanup',
  'Full Moon Party',
];

const sampleLocations = [
  'Panambur Beach',
  'Tannirbhavi Beach',
  'Someshwar Beach',
  'Ullal Beach',
];

function generateEvents2025() {
  const events = [];

  for (let month = 0; month < 12; month++) {
    const numEvents = 2 + Math.floor(Math.random() * 3); // 2 to 4 events
    const usedDays = new Set();

    for (let i = 0; i < numEvents; i++) {
      let day;
      do {
        day = 1 + Math.floor(Math.random() * 28); // Avoid invalid dates
      } while (usedDays.has(day));
      usedDays.add(day);

      events.push({
        date: new Date(2025, month, day),
        title: sampleTitles[Math.floor(Math.random() * sampleTitles.length)],
        location: sampleLocations[Math.floor(Math.random() * sampleLocations.length)],
      });
    }
  }

  return events;
}

const allEvents = generateEvents2025();

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getEventsForDate = (date) =>
    allEvents.filter((event) => event.date.toDateString() === date.toDateString());

  const hasEvent = (date) =>
    allEvents.some((event) => event.date.toDateString() === date.toDateString());

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
            tileContent={({ date, view }) => (
              <div className="event-indicator-wrapper">
                {view === 'month' && hasEvent(date) && (
                  <div className="event-indicator">🔵</div>
                )}
              </div>
            )}
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