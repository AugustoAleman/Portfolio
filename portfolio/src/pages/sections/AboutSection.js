import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../assets/styles/aboutpage.css';

function AboutSection() {
  return (
    <Container>

      {/* About Me Section */}
      <Row className='about-page'>
        <Col className='about-page-text'>
          <h1>About <span>me</span></h1>
          <p style={{ '--j': 1 }}>
          I believe technology should be transformative, not just efficient. For me, Artificial Intelligence is about creating systems that empower people, organizations, and industries to evolve.
          </p>
          <p style={{ '--j': 2 }}>
          In the past year, I’ve led the development of Agentic AI solutions that merge technical innovation with business strategy across Mexico and the U.S. These experiences have shown me how AI can reshape operations, enhance decision-making, and unlock new value.
          </p>
          <p style={{ '--j': 3 }}>
          With a background in Computer Science, Data Analytics, and AI, I work at the intersection of technology and leadership—building scalable architectures and guiding teams to turn complex systems into accessible, high-impact solutions.
          </p>
        </Col>
        <Col className='about-page-cards'>
          <Row className='about-page-cards-container'>
            <Col className='cards-first'>
              <Card className = 'card-web' style={{ '--j': 4  }}>
                <Card.Body className = 'card-experience-body'>
                  <Card.Title className = 'card-experience-title'><i className='bx bx-world' ></i></Card.Title>
                  <Card.Subtitle className="card-experience-subtitle">Web Development</Card.Subtitle>
                  <Card.Text className="card-experience-text">
                  Developed exceptional user experiences through web design.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className = 'card-data' style={{ '--j': 6  }}>
                <Card.Body className = 'card-experience-body'>
                  <Card.Title className = 'card-experience-title'><i className='bx bx-stats' ></i></Card.Title>
                  <Card.Subtitle className="card-experience-subtitle">Data Science</Card.Subtitle>
                  <Card.Text className="card-experience-text">
                  Leveraged data analysis techniques to drive business decisions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='cards-second'>

            <Card className = 'card-ai' style={{ '--j': 5  }}>
                <Card.Body className = 'card-experience-body'>
                  <Card.Title className = 'card-experience-title'><i className='bx bxs-bot'></i></Card.Title>
                  <Card.Subtitle className="card-experience-subtitle">Artificial Intelligence</Card.Subtitle>
                  <Card.Text className="card-experience-text">
                  Practical experience in turning data into powerful Machine Learning models.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className = 'card-swe' style={{ '--j': 7  }}>
                <Card.Body className = 'card-experience-body'>
                  <Card.Title className = 'card-experience-title'><i className='bx bx-laptop' ></i></Card.Title>
                  <Card.Subtitle className="card-experience-subtitle">Software Engineering</Card.Subtitle>
                  <Card.Text className="card-experience-text">
                  Expert in applying software engineering principles to tackle complex problems.
                  </Card.Text>
                </Card.Body>
              </Card>
              
            </Col>
          </Row>
        
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;