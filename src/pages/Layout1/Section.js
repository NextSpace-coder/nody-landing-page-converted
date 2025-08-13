import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Import Background Image
import Background from "../../assets/images/hero-1-bg-img.png";
import hero from "../../assets/images/hero-img.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-1-bg bg-light" style={{ backgroundImage: `url(${Background})` }} id="home">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col lg={6}>
                <h1 className="display-4 fw-medium mb-4">Hello,</h1>
                <h1 className="hero-1-title fw-normal text-dark mb-4">Innovative Solutions For Your Business</h1>
                <p className="text-muted mb-4 pb-3">We provide professional services and cutting-edge solutions to help your business grow and succeed in today's competitive market.</p>
                <Link to="#" className="btn btn-primary">Get Started <span className="ml-2 right-icon">&#8594;</span></Link>
              </Col>
              <Col lg={6} md={10}>
                <div className=" mt-5 mt-lg-0">
                  <img src={hero} alt="" className="img-fluid d-block mx-auto" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
