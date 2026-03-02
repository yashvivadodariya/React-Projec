import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const testimonialData = [
  {
    id: 1,
    name: 'Mia Chen',
    role: 'Graphic Designer',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur non mattis elit, sit amet hendrerit nibh. Duis congue vulputate urna sit accumsan.',
    image: '#ffc0cb'
  },
  {
    id: 2,
    name: 'Eshan B',
    role: 'CEO',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur non mattis elit, sit amet hendrerit nibh. Duis congue vulputate urna sit accumsan.',
    image: '#d2b48c'
  },
  {
    id: 3,
    name: 'RPindia',
    role: 'Manager',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur non mattis elit, sit amet hendrerit nibh. Duis congue vulputate urna sit accumsan.',
    image: '#ffcc5c'
  },
  {
    id: 4,
    name: 'Sarah M',
    role: 'Customer',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur non mattis elit, sit amet hendrerit nibh. Duis congue vulputate urna sit accumsan.',
    image: '#b5d4e6'
  }
];

const TestimonialCard = ({ name, role, text, image }) => {
  return (
    <Card 
      className="border-0 rounded-4 shadow-sm h-100"
      style={{ transition: 'all 0.3s ease' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
      }}
    >
      <Card.Body className="d-flex flex-column p-4">
        <div className="d-flex align-items-center mb-3">
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0 me-3"
            style={{ 
              width: '60px', 
              height: '60px', 
              background: image,
              fontSize: '1.5rem'
            }}
          >
            <span>{name.charAt(0)}</span>
          </div>
          <div>
            <h5 className="fw-bold text-dark mb-0">{name}</h5>
            <p className="text-muted mb-0 small">{role}</p>
          </div>
        </div>
        <p className="text-muted mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
          {text}
        </p>
      </Card.Body>
    </Card>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonialData.length - itemsPerPage) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev >= testimonialData.length - itemsPerPage ? 0 : prev + 1
    );
  };

  return (
    <section className="py-5 bg-white">
      <Container className="py-md-5">
        <div className="text-center mb-5">
          <h3 className="script-font mb-3">Testimonial</h3>
          <h2 className="display-4 fw-bold text-dark">Ice Cream Shop</h2>
        </div>
        
        <div className="position-relative">
          <Row>
            {testimonialData.slice(currentIndex, currentIndex + itemsPerPage).map((testimonial) => (
              <Col lg={4} md={6} key={testimonial.id} className="mb-4">
                <TestimonialCard {...testimonial} />
              </Col>
            ))}
          </Row>
          
          <div className="d-flex justify-content-end gap-2 mt-4">
            <button 
              className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
              onClick={handlePrev}
              style={{ 
                width: '45px', 
                height: '45px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#dc143c';
                e.currentTarget.style.borderColor = '#dc143c';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.borderColor = '#dee2e6';
                e.currentTarget.style.color = '#212529';
              }}
            >
              <BsChevronLeft size={20} />
            </button>
            <button 
              className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
              onClick={handleNext}
              style={{ 
                width: '45px', 
                height: '45px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#dc143c';
                e.currentTarget.style.borderColor = '#dc143c';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.borderColor = '#dee2e6';
                e.currentTarget.style.color = '#212529';
              }}
            >
              <BsChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
