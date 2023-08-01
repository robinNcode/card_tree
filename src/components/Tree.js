import React from 'react';
import Card from 'react-bootstrap/Card';

const cardStyle = {
    width: '300px',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    padding: '10px',
    backgroundColor: '#f8f9fa',
};

const Tree = ({ node }) => {
    return (
        <Card style={cardStyle}>
            <Card.Body>
                <Card.Title>{node.name}</Card.Title>
                <Card.Text>{node.description}</Card.Text>
                {node.children &&
                    node.children.map((child) => (
                        <Tree key={child.id} node={child} /> // Wrap the arrow function in parentheses
                    ))}
            </Card.Body>
        </Card>
    );
};

export default Tree;