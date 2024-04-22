import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Countdown
import Countdown from "react-countdown";

//Import Images
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png"

const PagesComingsoon = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>You are good to go!</span>;
    } else {
      return (
        <>
          <div className="coming-box">
            {days} <span>Days</span>
          </div>{" "}
          <div className="coming-box">
            {hours} <span>Hours</span>
          </div>{" "}
          <div className="coming-box">
            {minutes} <span>Minutes</span>
          </div>{" "}
          <div className="coming-box">
            {seconds} <span>Seconds</span>
          </div>
        </>
      );
    }
  };
  document.title = "Coming Soon | Veltrix - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="authentication-bg d-flex align-items-center pb-0 vh-100">
        <div className="content-center w-100">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <div className="home-wrapper text-center">
                  <img src={logoDark} alt="logo" height="22" />
                  {/* <img src={logoLight} alt="logo" height="22" /> */}
                  <h3 className="mt-4">Let's get started with Veltrix</h3>
                  <p className="mb-5">
                    It will be as simple as Occidental in fact it will be
                    Occidental.
                  </p>

                  <Row className="justify-content-center mt-5">
                    <Col md={8}>
                      <div className="counter-number">
                        <Countdown date="2022/12/31" renderer={renderer} />
                      </div>
                    </Col>
                  </Row>

                  <div className="text-center coming-soon-search-form pt-4">
                    <form action="#">
                      <input type="text" placeholder="Enter email address" />
                      <button type="submit" className="btn btn-primary">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PagesComingsoon;
