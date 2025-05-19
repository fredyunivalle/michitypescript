import { Container, Row, Col, Image } from 'react-bootstrap';
import catImage from '../assets/cat-teacher.png'; // Cambia según tu imagen

const Home = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container className="text-center py-5">
        <Row className="justify-content-center mb-4">
          <Col xs={10} md={6}>
            <Image src={catImage} fluid alt="Cat Teacher" style={{ maxHeight: '250px' }} />
          </Col>
        </Row>

        <h1 className="fw-bold mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Welcome to MichinglishAPP!
        </h1>
        <p className="mb-4 fs-5" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Learn English through fun games, quizzes, and a friendly cat.
        </p>
      </Container>
    </div>
  );
};

export default Home;
