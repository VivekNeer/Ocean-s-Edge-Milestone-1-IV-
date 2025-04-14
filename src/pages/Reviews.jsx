import React, { useState } from 'react';
import { Container, Card, Row, Col, Badge, Form, Button } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';

const initialReviews = [
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
  {
    name: 'Neha Kulkarni',
    date: 'April 5, 2025',
    rating: 4,
    comment: 'Loved the beach games and team spirit! My kids had a blast.',
  },
  {
    name: 'Arjun Das',
    date: 'April 7, 2025',
    rating: 5,
    comment: 'Amazing crowd and food! One of the best weekends of the year.',
  },
];

const renderStars = (count) =>
  Array.from({ length: count }, (_, i) => (
    <StarFill key={i} className="text-warning me-1" />
  ));

function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      ...formData,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    };
    setReviews((prev) => [newReview, ...prev]);
    setFormData({ name: '', rating: 5, comment: '' });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🌟 Visitor Reviews</h2>

      {/* Review Form */}
      <Form onSubmit={handleSubmit} className="mb-5">
        <Row className="g-3">
          <Col md={4}>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Col>
          <Col md={2}>
            <Form.Select
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              required
            >
              {[5, 4, 3, 2, 1].map((val) => (
                <option key={val} value={val}>
                  {val} Star{val > 1 && 's'}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Control
              type="text"
              name="comment"
              placeholder="Your Review"
              value={formData.comment}
              onChange={handleInputChange}
              required
            />
          </Col>
          <Col md={2}>
            <Button type="submit" variant="primary" className="w-100">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Reviews */}
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