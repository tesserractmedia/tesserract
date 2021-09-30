import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router'
import Video from './Video';
import { DataContext } from './App';
import { searchById } from './util';
import Suggestion from './Suggestion';

function Player() {
    let { id } = useParams();
    const dataContext = React.useContext(DataContext);
    console.log(dataContext);
    const data = searchById(dataContext.videos, id);

    return (
        <Container>
            <Row>
                <Col lg={9}>
                    <div className="d-flex flex-column">
                        <Video url={data.url} />
                        <h4>{data.title}</h4>
                        <span>{data.date}</span>
                        <hr />
                        <div>
                            {
                                data.tags.map((tag) => {
                                    return (<Button className="me-1" size="sm" variant="outline-primary">{tag}</Button>)
                                })
                            }
                        </div>
                    </div>
                </Col>
                <Col>
                    <Suggestion id={data.id} tags={data.tags} />
                </Col>
            </Row>
        </Container >
    )
}

export default Player
