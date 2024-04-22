import React from "react";
// Redux
import { Link } from "react-router-dom";

import { Row, Col, CardBody, Card, Container } from "reactstrap";
// import images
import logoSm from "../../assets/images/logo-sm.png";

const Login = () => {
  document.title = "Login | Veltrix - React Admin & Dashboard Template";
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
                    <h5 className="text-white font-size-20">
                      Welcome Back !
                    </h5>
                    <p className="text-white-50">
                      Sign in to continue to Veltrix.
                    </p>
                    <Link to="/" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <form className="mt-4" action="#">

                      <div className="mb-3">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="userpassword">Password</label>
                        <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                      </div>

                      <div className="mb-3 row">
                        <div className="col-sm-6">
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="customControlInline" />
                            <label className="form-check-label" htmlFor="customControlInline">Remember me</label>
                          </div>
                        </div>
                        <div className="col-sm-6 text-end">
                          <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                        </div>
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <Link to="/page-recoverpw"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
                        </div>
                      </div>

                    </form>
                  </div>
                </CardBody>
              </Card>

              <div className="mt-5 text-center">
                <p>
                  Don't have an account ?{" "}
                  <Link
                    to="/pages-register"
                    className="fw-medium text-primary"
                  >
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p>
                <p className="mb-0">
                  © {new Date().getFullYear()} Veltrix. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Login;
