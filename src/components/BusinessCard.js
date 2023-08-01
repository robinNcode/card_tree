import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const BusinessCard = ({ business }) => {
    return (
        <Card className="text-center mb-4">
            <Card.Body>
                <Card.Img variant="top" src={business.image} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
                <Card.Title>{business.name}</Card.Title>
                <Card.Text>{business.designation}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default BusinessCard;
