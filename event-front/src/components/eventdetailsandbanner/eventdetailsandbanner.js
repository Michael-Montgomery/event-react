import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./eventdetailsandbanner.css";

function EventDetailsAndBanner() {

    return (
        <Container fluid className="event-details-and-banner-wrapper">
            <Row>
                <Col md={4} xs={12}><div id="event-page-details-wrapper">
                    <h2 style={{ fontWeight: 'bold', fontSize: '3em' }}>Name of Event</h2>
                    <p className="event-page-details-date">12/12/2023 @ 4:00PM</p>
                    <p>The Waldorf Astoria</p>
                    <p style={{ color: '#989898' }}>Orlando, Florida</p>
                </div>
                </Col>
                <Col className="event-page-banner-wrapper" md={8} xs={12}></Col>

            </Row>

        </Container>
    )

}

export default EventDetailsAndBanner;