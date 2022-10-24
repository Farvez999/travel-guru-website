import React from 'react';
import Card from 'react-bootstrap/Card';

const Places = ({ place }) => {
    const { name, image } = place;
    console.log(place);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default Places;