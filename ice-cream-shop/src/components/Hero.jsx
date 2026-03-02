import { Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <div 
      className="d-flex align-items-center justify-content-center position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #aed4e6 0%, #f8e8eb 100%)',
        minHeight: '350px'
      }}
    >
      {/* Decorative popsicle elements */}
      <div 
        className="position-absolute opacity-25"
        style={{
          top: '-50px',
          left: '10%',
          width: '150px',
          height: '200px',
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)',
          borderRadius: '50% 50% 0 0'
        }}
      />
      <div 
        className="position-absolute opacity-25"
        style={{
          top: '-30px',
          right: '15%',
          width: '120px',
          height: '180px',
          background: 'linear-gradient(135deg, #ffd93d 0%, #ffe66d 100%)',
          borderRadius: '50% 50% 0 0'
        }}
      />
      
      <Container>
        <h1 className="display-1 fw-bold text-center text-dark position-relative" style={{ letterSpacing: '2px', zIndex: 1 }}>
          About Us
        </h1>
      </Container>
    </div>
  );
};

export default Hero;
