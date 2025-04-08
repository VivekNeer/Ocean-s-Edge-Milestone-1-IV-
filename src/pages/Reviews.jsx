import React from 'react';
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';

const reviews = [
  {
    name: 'Aarav Nair',
    date: 'March 28, 2025',
    rating: 5,
    comment: 'Absolutely loved the Beach Festival! Great vibes and music.',
  },
  {
    name: 'Meera Rao',
    date: 'March 30, 2025',
    rating: 4,
    comment: 'Sunset Yoga was peaceful. Wish it was a bit longer though!',
  },
  {
    name: 'Rahul Shetty',
    date: 'April 1, 2025',
    rating: 5,
    comment: 'Food Carnival was a delight! So many stalls and cuisines.',
  },
  {
    name: 'Sneha Menon',
    date: 'April 3, 2025',
    rating: 3,
    comment: 'The concert was good, but the sound system could be better.',
  },
];

const renderStars = (count) =>
  Array.from({ length: count }, (_, i) => (
    <StarFill key={i} className="text-warning me-1" />
  ));

function ReviewsPage() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🌟 Visitor Reviews</h2>
      <Row>
        {reviews.map((review, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="mb-0">{review.name}</h5>
                  <Badge bg="light" text="dark">{review.date}</Badge>
                </div>
                <div className="mb-2">{renderStars(review.rating)}</div>
                <Card.Text>{review.comment}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ReviewsPage;