import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const StatItem = ({ value, label, suffix = '+' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = parseInt(value);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Col xs={6} lg={3} className="text-center mb-4 mb-lg-0">
      <div className="p-3">
        <h2 className="display-3 fw-bold text-dark mb-2">
          {count}{suffix}
        </h2>
        <p className="fw-medium text-dark mb-0">{label}</p>
      </div>
    </Col>
  );
};

const Stats = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8e8eb' }}>
      <Container className="py-md-5">
        <Row>
          <StatItem value="115" label="Branch Shop" />
          <StatItem value="85" label="Staffs" />
          <StatItem value="120" label="Flavor variants" />
          <StatItem value="90" label="positive Review" suffix="%" />
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
