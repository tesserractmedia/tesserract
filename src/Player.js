import React from 'react'
import { Container, Col, Row, Button, Modal, InputGroup, FormControl, CloseButton } from 'react-bootstrap';
import { useParams } from 'react-router'
import Video from './Video';
import { DataContext } from './App';
import { searchById } from './util';
import Suggestion from './Suggestion';
import { Download, Share, ContentCopy } from '@mui/icons-material'

function Player() {
    let { id } = useParams();
    const dataContext = React.useContext(DataContext);
    const data = searchById(dataContext.videos, id);
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getId = (_url) => {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = _url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    };

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
    }

    return (
        <Container className="pb-5">
            <Row>
                <Col sm={8} md={8} lg={8}>
                    <div className="d-flex flex-column pb-5">
                        <Video url={data.url} />
                        <h4>{data.title}</h4>
                        <div className="d-flex justify-content-between">
                            <span>{data.date}</span>
                            <div>
                                <Button className="me-1" variant="primary" onClick={handleShow} >
                                    <Share />
                                </Button>
                                <a className="btn btn-danger" href={"https://www.ssyoutube.com/watch?v=" + getId(data.url)} target="_blank" >
                                    <Download />
                                </a>
                            </div>
                        </div>
                        <hr />
                        <div>
                            {
                                data.tags.map((tag) => {
                                    return (<Button className="me-1" size="sm" variant="outline-primary">{tag}</Button>)
                                })
                            }
                        </div>
                    </div>
                    <Modal show={show} onHide={handleClose}  centered>
                        <Modal.Header>
                            <Modal.Title>Share</Modal.Title>
                            <CloseButton  onClick={handleClose} variant="white" />
                        </Modal.Header>
                        <Modal.Body>
                            <InputGroup className="mb-3">
                                <FormControl
                                    id="share"
                                    placeholder="link"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    value={window.location.href}
                                    disabled
                                />
                                <Button id="share-btn" onClick={copyCodeToClipboard}><ContentCopy /></Button>
                            </InputGroup>

                        </Modal.Body>
                    </Modal>
                </Col>
                <Col>
                    <Suggestion id={data.id} tags={data.tags} />
                </Col>
            </Row>
        </Container >
    )
}


export default Player
