import React from "react";
import { Row, Col, CardBody, Card, Container } from "reactstrap";

import { Link } from "react-router-dom";

// import images
import logoSm from "../../assets/images/logo-sm.png";

const ForgetPasswordPage = () => {
  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20 p-2">Forget Password</h5>
                    <Link to="/index" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>
                <CardBody className="p-4">
                  <div className="p-3">
                    <div className="alert alert-success mt-5" role="alert">
                      Enter your Email and instructions will be sent to you!
                    </div>
                    <form className="mt-4" action="#">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="useremail">Email</label>
                        <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                      </div>

                      <Row className="mb-0">
                        <Col className="col-12 text-end">
                          <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>Remember It ? <Link to="/pages-login" className="fw-medium text-primary"> Sign In here </Link> </p>
                <p>
                  © {new Date().getFullYear()} Veltrix. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ForgetPasswordPage;
