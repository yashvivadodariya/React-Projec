import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

const Manufacture = () => {
  return (
    <section className="py-5 bg-white">
      <Container className="py-md-5">
        <Row className="align-items-center">
          <Col lg={6} md={12} className="mb-4 mb-lg-0">
            <h3 className="script-font mb-3">Sweet Escape</h3>
            <h2 className="display-4 fw-bold text-dark mb-4">Manufacture</h2>
            <p className="text-muted mb-4" style={{ fontSize: '1rem', lineHeight: '1.8', maxWidth: '500px' }}>
              Once the ingredients have cooled enough, it's time to pour them into molds and freeze in a brine bath. After that, the ice cream sticks are dried and packaged in the freezer in square boxes. From here, this cool ice cream is ready to be delivered to visitors.
            </p>
            <Button 
              variant="danger" 
              className="btn-custom-red rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center"
              style={{ transition: 'all 0.3s ease' }}
            >
              View More <BsArrowRight className="ms-2" />
            </Button>
          </Col>
          <Col lg={6} md={12}>
            <div 
              className="w-100 rounded-4 d-flex align-items-center justify-content-center"
              style={{
                height: '400px',
                background: 'linear-gradient(135deg, #dc143c 0%, #ff6b9d 100%)'
              }}
            >
              <div className="text-center text-white fw-semibold fs-5">
                <p className="mb-0">Ice Cream Cones Image</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Manufacture;
