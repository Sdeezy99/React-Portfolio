import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ProfileSection.css';  // Import the CSS for custom styles

const ProfileSection = () => {
  return (
    <section className="profile-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image */}
          <Col md={5} className="profile-image-col">
            <div className="profile-image">
              <img 
                src="/1000170130.png" 
                alt="Profile" 
                className="img-fluid rounded-circle"
              />
            </div>
          </Col>

          {/* Right Side - Text */}
          <Col md={7} className="profile-text-col">
            <div className="profile-info">
              <h2 className="profile-title">
                <span>— </span>I'M MPHO MADINI
                <br />
                <span className="highlighted">FULL STACK DEVELOPER</span>
              </h2>
              <p className="profile-description">
                I'm a Tunisian-based web designer & front-end developer focused on crafting 
                clean & user-friendly experiences. I am passionate about building excellent 
                software that improves the lives of those around me.
              </p>
              <Button variant="warning" className="cta-btn">
                More About Me <span className="arrow">&rarr;</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProfileSection;
