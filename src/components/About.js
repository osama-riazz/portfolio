import React from 'react'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'
import image from './img/dp.jpg'

const About = () => {
    return (
        <Container fluid id='home'>
            <Row>
                <Col>
                    <label style={{ background: '#082645', color: 'white', padding: '10px', width: '200px', height: '50px', borderRadius: '10px', textAlign: 'center', margin: '50px' }}>Welcome to my Portfolio</label>
                </Col>
                <Row xs={2}>
                    <Col>
                        <h1 style={{ color: 'white' }}>Hi !! I am Muhammmad Osama Riaz</h1>
                        <p style={{ color: 'white' }}>i am a frontend web developer in React js i have good enough knowledge about HTML,CSS,BOOTSTRAP,NODEJS,EXPRESS.
                            I have done my Bachelor in Information Technology from Agriculture university Peshawar Pakistan. During my 4 years of Bachelor studies, I have secured 3.72 CGPA and learned a lot of things like html, CSS, bootstrap, React Js, javascript, express mongodb, I am passionate about technology and its applications in solving real-world problems. As a student, I am constantly expanding my knowledge and skills in areas such as programming, database management, networking, and web development. I was also involved in various extracurricular activities, such as coding competitions, to further enhance my skills and gain practical experience. I have good enough knowledge about web development.
                        </p>
                    </Col>

                </Row>


            </Row>

        </Container>
    )
}

export default About    