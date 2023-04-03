import React from 'react'
import { Col, Container, Row, Card, } from 'react-bootstrap'
import quiz from './img/quiz.jpg'
import building from './img/building.jpg'
import diving from './img/diving.jpg'


const Projects = () => {
    return (
        <Container id='projects' style={{ marginTop: '200px', minHeight: '500px' }}>
            <h1 style={{ textAlign: 'center', color: 'white' }}>Projects</h1>
            <Row style={{ marginTop: '40px' }}>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={quiz} />
                        <Card.Body style={{ backgroundColor: '#082645' }}>
                            <Card.Title style={{ color: 'white' }}>Online Quiz App</Card.Title>
                            <Card.Text style={{ color: 'white' }}>
                                taking online quiz from students in any subject.
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={building} />
                        <Card.Body style={{ backgroundColor: '#082645' }}>
                            <Card.Title style={{ color: 'white' }}>Fujairah's Building Construction</Card.Title>
                            <Card.Text style={{ color: 'white' }}>
                                For constructing building at dubai
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={diving} />
                        <Card.Body style={{ backgroundColor: '#082645' }}>
                            <Card.Title style={{ color: 'white' }}>Inflight Dubai</Card.Title>
                            <Card.Text style={{ color: 'white' }}>
                                sky diving website for dubai
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Col>
            </Row>

        </Container>
    )
}

export default Projects