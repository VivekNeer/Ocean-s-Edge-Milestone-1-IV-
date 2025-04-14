import React from 'react';
import { Container, Button, Row, Col, Card, Carousel, Form } from 'react-bootstrap';

// Import local images
import beach1 from '../assets/beach1.jpg';
import festival1 from '../assets/festival1.jpg';
import festival2 from '../assets/festival2.jpg';
import mangaloreBeach from '../assets/mangalore.jpg';

function HomePage() {
  const eventImages = [festival1, festival2, beach1];

  return (
    <div>
      {/* Hero Section */}
      <Container fluid className="bg-light text-center py-5">
        <h1 className="display-4">Welcome to Mangalore Beach Events 🌴</h1>
        <p className="lead">Discover festivals, beach parties, food carnivals, and more!</p>
        <Button variant="primary" size="lg">Explore Events</Button>
      </Container>

      {/* Carousel Section */}
      <Container className="my-5">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={beach1} alt="First slide" />
            <Carousel.Caption>
              <h3>Panambur Beach Festival</h3>
              <p>Experience the rhythm of the waves and music together!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={festival1} alt="Second slide" />
            <Carousel.Caption>
              <h3>Sunset Concerts</h3>
              <p>Live performances as the sun sets behind the waves.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Featured Events */}
      <Container className="my-5">
        <h2 className="text-center mb-4">🎉 Featured Events</h2>
        <Row>
          {eventImages.map((img, idx) => (
            <Col md={4} key={idx}>
              <Card className="mb-4 shadow-sm">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>Beach Festival {idx + 1}</Card.Title>
                  <Card.Text>
                    Join us for a vibrant experience of dance, food, and fun!
                  </Card.Text>
                  <Button variant="outline-primary">Register Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* About Beaches Section */}
      <Container className="bg-light py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h3>🌊 Discover Mangalore’s Beaches</h3>
            <p>Mangalore is home to some of the cleanest and most scenic beaches in Karnataka. Whether you're a fan of sunset walks or adrenaline-packed water sports, we’ve got something for everyone.</p>
            <ul>
              <li>🏖️ Panambur Beach</li>
              <li>🌅 Tannirbhavi Beach</li>
              <li>🌊 Someshwar Beach</li>
            </ul>
          </Col>
          <Col md={6}>
            <img src={mangaloreBeach} alt="Beaches" className="img-fluid rounded shadow" />
          </Col>
        </Row>
      </Container>

      {/* Testimonials */}
      <Container className="my-5">
        <h2 className="text-center mb-4">What People Are Saying 💬</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>“Best beach festival I’ve ever attended! Can’t wait for the next one.”</p>
                  <footer className="blockquote-footer">Rohit, Bengaluru</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>“Music, food, and waves — what more could you want?”</p>
                  <footer className="blockquote-footer">Anjali, Mangalore</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>“Smooth registration and amazing vibe!”</p>
                  <footer className="blockquote-footer">Sahil, Udupi</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Newsletter */}
      <Container className="my-5 text-center">
        <h2>📬 Stay Updated</h2>
        <p>Subscribe to our newsletter for event alerts and exclusive offers.</p>
        <Form className="d-flex justify-content-center">
          <Form.Control type="email" placeholder="Enter your email" style={{ maxWidth: '400px' }} className="me-2" />
          <Button variant="primary">Subscribe</Button>
        </Form>
      </Container>
    </div>
  );
}

export default HomePage;