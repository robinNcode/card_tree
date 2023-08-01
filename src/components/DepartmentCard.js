import React from 'react';
import { Card } from 'react-bootstrap';

const DepartmentCard = ({ department }) => {
    return (
        <Card className="text-center mb-4">
            <Card.Body>
                <Card.Title>{department.name}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default DepartmentCard;
