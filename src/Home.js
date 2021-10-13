import React from 'react'
import Video from './Video'
import { Container,Button, Row, Card, Col } from 'react-bootstrap'
import {DataContext } from './App';
import VideoCard from './VideoCard'
import axios from 'axios';

function Home() {
    const dataContext = React.useContext(DataContext);
    const [data,setData] = React.useState(null);

    React.useEffect(()=>{
        axios.get("https://tesserract-green-screen.herokuapp.com/v1/video/latest/10").then(
            (response) => {
                setData(response.data)
            }
        )
    },[])

    return (
        <Container>
            <Row xl={4} lg={4} md={3} sm={2} xs={1} className="g-4">
                {data.slice(0, 8).map((video) => (
                    <Col>
                        <VideoCard data={video}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Home
