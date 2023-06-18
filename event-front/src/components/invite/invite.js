import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Invite() {

    const yesClickHandler = () => {
        alert('RSVP yes button clicked!')
    }

    return (
        <Container fluid className="event-details-and-banner-wrapper">
            <Row>
                <Col md={12} xs={12}><div id="event-page-details-wrapper">
                    <p style={{ textAlign: 'center' }}><span style={{ display: 'block', fontSize: '2em' }}>Michael,</span> You are invited to Mr. & Mrs. Willis' Vow Renewal. We hop you can make it. Please indicate your intent to attend this event</p>
                    <ul style={{ textAlign: 'center', listStyleType: 'none' }}>
                        <li style={{ display: 'inline', margin: '0 4px' }}><button onClick={yesClickHandler}>I plan to attend this event</button></li>
                        <li style={{ display: 'inline', margin: '0 4px' }}><button>I am unable to attend this event</button></li>
                        <li style={{ display: 'inline', margin: '0 4px' }}><button>I am unsure at thit time</button></li>
                    </ul>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Invite;