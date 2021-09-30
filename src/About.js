import React from 'react'
import { Container } from 'react-bootstrap'
import {DataContext} from './App'

function About() {
    const dataContext = React.useContext(DataContext);
    return (
        <Container>
            <h1>{}</h1>
            <p>{}</p>
        </Container>
    )
}

export default About
