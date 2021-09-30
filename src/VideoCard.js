import React from 'react'
import {Card} from 'react-bootstrap'
import Video from './Video'
import {useHistory} from 'react-router-dom'
 
function VideoCard({data}) {
    const history = useHistory();

    const click = (e)=>{
        history.push('/video/'+data.id.toString());
    }

    return (
        <Card onClick={click}>
            <Card.Body className="p-0">
                <Video url={data.url} />
                <h6 className="p-1">{data.title}</h6>
            </Card.Body>
        </Card>
    )
}

export default VideoCard
