import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

const History = () => {
  return (
    <section className="py-5 bg-white">
      <Container className="py-md-5">
        <Row className="align-items-center">
          <Col lg={6} md={12} className="mb-4 mb-lg-0 order-lg-1 order-2">
            <div 
              className="w-100 rounded-4 d-flex align-items-center justify-content-center"
              style={{
                height: '400px',
                background: 'linear-gradient(135deg, #d4b5d4 0%, #e6c3e6 100%)'
              }}
            >
              <div className="text-center text-white fw-semibold fs-5">
                <p className="mb-0">Popsicles Image</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} className="order-lg-2 order-1 mb-4 mb-lg-0">
            <h3 className="script-font mb-3">Frozen Joy</h3>
            <h2 className="display-4 fw-bold text-dark mb-4">History Begin</h2>
            <p className="text-muted mb-4" style={{ fontSize: '1rem', lineHeight: '1.8', maxWidth: '500px' }}>
              On hot summer days but today, in addition to a glass of cool beverage, a glass of ice cream is also help relieve some of the heat. Ice cream is a popular not only among children but also loved by many people of many different ages.
            </p>
            <Button 
              variant="danger" 
              className="btn-custom-red rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center"
              style={{ transition: 'all 0.3s ease' }}
            >
              View More <BsArrowRight className="ms-2" />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default History;
