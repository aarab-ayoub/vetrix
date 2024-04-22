import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, CardBody, Card, Container } from "reactstrap";

// import images
import logoSm from "../../assets/images/logo-sm.png";

const Register = () => {
  document.title = "Register | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={8} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">Free Register</h5>
                    <p className="text-white-50">Get your free Veltrix account now.</p>
                    <Link to="/index" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>
                <CardBody className="p-4">
                  <div className="p-3">
                    <form className="mt-4" action="#">

                      <div className="mb-3">
                        <label className="form-label" htmlFor="useremail">Email</label>
                        <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="userpassword">Password</label>
                        <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                      </div>

                      <div className="mb-3 row">
                        <div className="col-12 text-end">
                          <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Register</button>
                        </div>
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <p className="mb-0">By registering you agree to the Veltrix <Link to="#" className="text-primary">Terms of Use</Link></p>
                        </div>
                      </div>

                    </form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?{" "}
                  <Link
                    to="/pages-login"
                    className="fw-medium text-primary"
                  >
                    {" "}
                    Login
                  </Link>{" "}
                </p>
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

export default Register;
