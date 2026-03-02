import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const newsData = [
  {
    id: 1,
    category: 'BUSINESS TIPS',
    date: 'Jun 30, 2024',
    title: "The Best Ice Cream You'll Never Eat",
    image: '#ffd4a3'
  },
  {
    id: 2,
    category: 'BUSINESS TIPS',
    date: 'Jun 30, 2024',
    title: 'Fancy Figs? Make This Ice Cream',
    image: '#fff4cc'
  },
  {
    id: 3,
    category: 'BUSINESS TIPS',
    date: 'Jun 30, 2024',
    title: 'The Art Of Crafting Gourmet Ice Cream',
    image: '#ffe4b3'
  }
];

const NewsCard = ({ category, date, title, image }) => {
  return (
    <Card 
      className="border-0 rounded-4 overflow-hidden shadow-sm h-100"
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
      <div 
        className="w-100 d-flex align-items-center justify-content-center"
        style={{ 
          height: '250px',
          background: image 
        }}
      >
        <div className="text-center text-white fw-semibold">
          <p className="mb-0">News Image</p>
        </div>
      </div>
      <Card.Body className="p-4">
        <div className="d-flex align-items-center mb-3">
          <Badge 
            bg="light" 
            text="dark" 
            className="me-2 rounded-pill px-3 py-1 fw-bold"
            style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}
          >
            {category}
          </Badge>
          <span className="text-muted small">{date}</span>
        </div>
        <Card.Title className="fw-bold text-dark h5 mb-0" style={{ lineHeight: '1.4' }}>
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

const News = () => {
  return (
    <section className="py-5 bg-white">
      <Container className="py-md-5">
        <div className="text-center mb-5">
          <h3 className="script-font mb-3">Our News</h3>
          <h2 className="display-4 fw-bold text-dark">Tastiest Updates</h2>
        </div>
        
        <Row className="mb-4">
          {newsData.map((news) => (
            <Col lg={4} md={6} key={news.id} className="mb-4">
              <NewsCard {...news} />
            </Col>
          ))}
        </Row>
        
        <div className="text-center">
          <Button 
            variant="danger" 
            className="btn-custom-red rounded-pill px-5 py-2 fw-semibold"
            style={{ transition: 'all 0.3s ease' }}
          >
            Read More
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default News;
