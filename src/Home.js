import React from 'react'
import Video from './Video'
import { Container,Button, Row, Card, Col } from 'react-bootstrap'
import {DataContext } from './App';
import VideoCard from './VideoCard'

function Home() {
    const dataContext = React.useContext(DataContext);
    console.log(dataContext);
    return (
        <Container>
            <Row xl={4} lg={4} md={3} sm={2} xs={1} className="g-4">
                {dataContext["videos"].slice(0, 8).map((video) => (
                    <Col>
                        <VideoCard data={video}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Home
