import React from 'react';
import './AboutMe.css';  // Import the CSS file for styling
import Button from 'react-bootstrap/Button';

function AboutMe() {
    return (
        <section className="about-section bg-dark text-white">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Side - Profile Image */}
                    <div className="col-md-5">
                        <img 
                            src="/Picture1.png" 
                            alt="Profile" 
                            className="img-fluid"
                        />
                    </div>

                    {/* Right Side - About Info */}
                    <div className="col-md-7">
                        <h2 className="about-title">About Me</h2>
                        <p className="about-description">
                            A small river named Duden flows by their place and supplies it with the necessary regalia.
                        </p>

                        <ul className="list-unstyled">
                            <li><strong>Name:</strong> Mpho Madini</li>
                            <li><strong>Date of birth:</strong> 01 June 1999</li>
                            <li><strong>Address:</strong> 3236 Aloe Road Palm Springs</li>
                            <li><strong>Email:</strong> Mphomadini8@gmail.com</li>
                            <li><strong>Phone:</strong> 0692227643</li>
                        </ul>

                        <div className="mt-3">
                            <p className="projects-completed"><strong>73</strong> Project complete</p>
                            <Button variant="warning" className="btn-download-cv">
                                Download CV
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
