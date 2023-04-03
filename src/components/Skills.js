import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Skills = () => {
    const percentage = 66;
    return (
        <Container id='skills' fluid style={{ height: '100%' }}>
            <h1 style={{ paddingTop: '65px', textAlign: 'center', color: 'white' }}>Skills</h1>
            <Container style={{ backgroundColor: '#082645', borderRadius: '20px', }} >
                <Row  >
                    <Col xs md={{ span: 2, offset: 3 }}>
                        <h1 style={{ color: 'white', textAlign: 'center' }}>React</h1>

                        <CircularProgressbar

                            value={percentage} text={`${percentage}%`}
                            styles={buildStyles({
                                textColor: "purple",
                                pathColor: "#0e569e",
                                trailColor: "silver"
                            })}
                        />

                    </Col>
                    <Col xs lg="2">
                        <h1 style={{ color: 'white', textAlign: 'center' }}>EXPRESS</h1>

                        <CircularProgressbar
                            value={percentage} text={`80%`}
                            styles={buildStyles({
                                textColor: "purple",
                                pathColor: "#0e569e",
                                trailColor: "silver"

                            })}
                        />

                    </Col>
                    <Col xs lg="2">
                        <h1 style={{ color: 'white', textAlign: 'center' }}>HTML</h1>

                        <CircularProgressbar

                            value={percentage} text={`70%`}
                            styles={buildStyles({
                                textColor: "purple",
                                pathColor: "#0e569e",
                                trailColor: "silver"
                            })}
                        />

                    </Col>


                </Row>
                <Row  >
                    <Col xs md={{ span: 2, offset: 3 }}>
                        <h1 style={{ color: 'white', textAlign: 'center' }}>CSS</h1>

                        <CircularProgressbar

                            value={percentage} text={`${percentage}%`}
                            styles={buildStyles({
                                textColor: "purple",
                                pathColor: "#0e569e",
                                trailColor: "silver"
                            })}
                        />

                    </Col>
                    <Col xs lg="2">
                        <h1 style={{ color: 'white', textAlign: 'center' }}>MCSE</h1>

                        <CircularProgressbar
                            value={percentage} text={`80%`}
                            styles={buildStyles({
                                textColor: "purple",
                                pathColor: "#0e569e",
                                trailColor: "silver"

                            })}
                        />

                    </Col>
                    <Col xs lg="2">
                        <h1 style={{ color: 'white', textAlign: 'center' }}>BOOTSTRAP</h1>

                        <CircularProgressbar

                            value={percentage} text={`70%`}
                            styles={buildStyles({
                                textColor: "purple",
                                pathColor: "#0e569e",
                                trailColor: "silver"
                            })}
                        />

                    </Col>


                </Row>
            </Container>
        </Container>
    )
}

export default Skills