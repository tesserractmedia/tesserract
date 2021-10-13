import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Video from './Video'
import { useHistory } from 'react-router-dom'

function VideoCard({ data }) {
    const history = useHistory();

    const click = (e) => {
        history.push('/video/' + data.id.toString());
    }

    return (
        <Card>
            <Card.Header className="p-0">
                <Video url={data.url} />
            </Card.Header>
            <Card.Body className="p-2">
                <h6 className="p-1">{data.title}</h6>
                <Button variant="primary" size="sm" onClick={click}>Open</Button>
            </Card.Body>
        </Card>
    )
}

export default VideoCard
