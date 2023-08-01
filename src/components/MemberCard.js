import React from 'react';
import { Card } from 'react-bootstrap';

const MemberCard = ({ member }) => {
    return (
        <Card className="text-center mb-4">
            <Card.Img variant="top" src={member.image} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.designation}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MemberCard;
