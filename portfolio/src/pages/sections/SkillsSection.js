import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../assets/styles/aboutpage.css';
import skillsData from './data/skills.json'; 

// For the Timeline
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const theme = createTheme({
    palette: {
      primary: {
        main: '#9545E4',
        contrastText: '#9545E4', // Define contrastText here
      },
      secondary: {
        main: '#F4F4F9',
        contrastText: '#F4F4F9', // Define contrastText here
      },
    },
  });

function SkillSection() {
  return (
    <Container>
     <ThemeProvider theme={theme}>
      {/* Skills and Education Section */}
      <Row className='skills-section'>
        <Col className='skills'>
          <h1>My <span>Skills</span></h1>
          <div className='skill-cards'>
            {skillsData.map((skill, index) => (
              <Card className='skill-card' style={{ '--j': index + 1 }} key={index}>
                <Card.Body className='skill-card-body'>
                  <Card.Title className='skill-card-title'>
                    <img
                      className='tech-logo'
                      src={require(`../../assets/images/technologies/${skill.image}`)}
                      alt={skill.title}
                    />
                  </Card.Title>
                  <Card.Subtitle className="skill-card-subtitle">{skill.description}</Card.Subtitle>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>

        <Col  className='education'>
        <h1>My <span>Experience</span></h1>
          <Col className='timeline'>
            
          <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
                },
            }}
            className='timeline'
            >
            <TimelineItem>
                <TimelineOppositeContent color="secondary" className='timeline-subtitle'  style={{ '--j': 2 }}>
                   <span>Present</span>
                </TimelineOppositeContent>
                <TimelineSeparator color = 'secondary'  className='timeline-separator'  style={{ '--j': 1 }}>
                    <TimelineDot color = 'primary'  className='timeline-dot'  style={{ '--j': 1 }}/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography className='timeline-title' style={{ '--j': 3 }}>Artificial Intelligence Manager</Typography>
                    <Typography className='timeline-subtitle' style={{ '--j': 4 }}>Grupo Salinas</Typography>
                    <Typography className='timeline-text' style={{ '--j': 5 }}>
                      As AI Manager and Technical Lead, I oversee the design and implementation of Agentic and cloud-based AI solutions across the Group’s innovation and biomedical projects. <br></br>
                      I lead cross-functional teams in Mexico and the U.S., aligning technical development with strategic goals. 
                      My recent work includes leading the migration of a legacy .NET system to a cloud-native microservices architecture 
                      and deploying a serverless pipeline that reduced cloud costs by 40%.
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="secondary" className='timeline-subtitle'  style={{ '--j': 7 }}>
                   <span>02 / 2025</span>
                </TimelineOppositeContent>
                <TimelineSeparator color = 'secondary' className='timeline-separator'  style={{ '--j': 6 }}>
                    <TimelineDot color = 'primary' className='timeline-dot'  style={{ '--j': 6 }}/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography className='timeline-title' style={{ '--j': 8 }}>Artificial Intelligence Consultant</Typography>
                    <Typography className='timeline-subtitle' style={{ '--j': 9 }}>Grupo Salinas</Typography>
                    <Typography className='timeline-text' style={{ '--j': 10 }}>
                        As an AI Consultant, I contributed to initiatives spanning backend, frontend, and applied AI. 
                        I developed a FastAPI Backend-for-Frontend (BFF) on AWS Lambda for real-time monitoring of SPEI transactions, 
                        enabling proactive fraud detection. <br></br>
                        I also co-developed a financial education platform with an interactive AI avatar, contributing to its 
                        Retrieval-Augmented Generation (RAG) model by curating and integrating a domain-specific knowledge base.
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            </Timeline>

          </Col>
          <h1>My <span>Education</span></h1>
          <Col className='timeline'>
            
          <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
                },
            }}
            className='timeline'
            >
            <TimelineItem>
                <TimelineOppositeContent color="secondary" className='timeline-subtitle'  style={{ '--j': 2 }}>
                   <span>06 / 2024</span>
                </TimelineOppositeContent>
                <TimelineSeparator color = 'secondary'  className='timeline-separator'  style={{ '--j': 1 }}>
                    <TimelineDot color = 'primary'  className='timeline-dot'  style={{ '--j': 1 }}/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography className='timeline-title' style={{ '--j': 3 }}>BSc in Computer Science and Technology</Typography>
                    <Typography className='timeline-subtitle' style={{ '--j': 4 }}>Tecnológico de Monterrey</Typography>
                    <Typography className='timeline-text' style={{ '--j': 5 }}>
                        Gained expertise in software engineering, programming languages, data structures, algorithms, and computer systems. Gained hands-on experience in software development, designing, implementing, and testing efficient and scalable solutions. 
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="secondary" className='timeline-subtitle'  style={{ '--j': 7 }}>
                   <span>05 / 2024</span>
                </TimelineOppositeContent>
                <TimelineSeparator color = 'secondary' className='timeline-separator'  style={{ '--j': 6 }}>
                    <TimelineDot color = 'primary' className='timeline-dot'  style={{ '--j': 6 }}/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography className='timeline-title' style={{ '--j': 8 }}>Deep Learning Specialization</Typography>
                    <Typography className='timeline-subtitle' style={{ '--j': 9 }}>Huawei Global Training Center</Typography>
                    <Typography className='timeline-text' style={{ '--j': 10 }}>
                        Enhanced AI expertise through the Infotec AI 1000 program, gaining proficiency in machine learning, deep learning, and AI tools. Gained hands-on experience in AI development through  applying theoretical knowledge to real-world problems.
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            </Timeline>

          </Col>
        </Col>
      </Row>
      </ThemeProvider>
    </Container>
  );
}

export default SkillSection;
