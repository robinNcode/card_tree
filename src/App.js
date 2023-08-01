import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BusinessCard from './components/BusinessCard';
import DepartmentCard from './components/DepartmentCard';
import MemberCard from './components/MemberCard';
import './style.css';

const businessData = {
  name: 'Your Business Name',
  designation: 'Business Owner',
  image: 'your-business-image-url.jpg',
};

const departmentData = [
  { name: 'Development' },
  { name: 'Marketing' },
];

const membersData = [
  { name: 'John Doe', designation: 'Developer', image: 'john-doe-image.jpg' },
  { name: 'Jane Doe', designation: 'Marketer', image: 'jane-doe-image.jpg' },
];

const App = () => {
  return (
    <Container className="py-4">
      <Row>
        <Col>
          <BusinessCard business={businessData} />
        </Col>
      </Row>
      <Row>
        {departmentData.map((department, index) => (
          <Col key={index} className="d-flex flex-column align-items-center">
            <DepartmentCard department={department} />
            <div className="vertical-line"></div>
            {membersData.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;