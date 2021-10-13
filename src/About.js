import { maxWidth } from '@mui/system';
import React from 'react'
import { Container, Card } from 'react-bootstrap'
import { DataContext } from './App'
import EmailIcon from '@mui/icons-material/Email';

function About() {
    const dataContext = React.useContext(DataContext);
    return (
        <Container className="p-5 d-flex justify-content-center ">
            <Card >
            <Card.Body>
                <h2 className="text-center">About Us</h2>
                <p className="text-center">{dataContext.about}</p>
                <div className="d-flex justify-content-center"><img className="w-25 img-fluid" src={process.env.PUBLIC_URL + '/android-chrome-512x512.png'}/></div>
                <address className="text-center">
                   <EmailIcon/>  <a href={'mailto:'+dataContext.contact.email}>{dataContext.contact.email}</a>
                </address>

            </Card.Body>
        </Card>
        </Container >
    )
}

export default About
