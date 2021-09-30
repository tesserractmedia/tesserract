import React from 'react'
import { Container, } from 'react-bootstrap'

function NotFound() {
    return (
        <Container className="h-75 d-flex flex-row align-items-center justify-content-center">
            <h1 className="text-danger">Not Found!</h1>
        </Container>
    )
}

export default NotFound
