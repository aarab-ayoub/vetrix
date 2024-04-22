import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card } from "reactstrap";

// import images
import bg from "../../assets/images/bg.jpg";
import logoDark from "../../assets/images/logo-dark.png";

const Login2 = () => {
  document.title = "Login2 | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="account-pages">
        <div
          className="accountbg"
          style={{
            background: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>

        <div className="wrapper-page account-page-full">
          <Card className="shadow-none">
            <div className="card-block">
              <div className="account-box">
                <div className="card-box shadow-none p-4">
                  <div className="p-2">
                    <div className="text-center mt-4">
                      <Link to="/">
                        <img src={logoDark} height="22" alt="logo" />
                      </Link>
                    </div>

                    <h4 className="font-size-18 mt-5 text-center">
                      Welcome Back !
                    </h4>
                    <p className="text-muted text-center">
                      Sign in to continue to Veltrix.
                    </p>

                    <form className="mt-4" action="#">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Enter username"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="userpassword">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="userpassword"
                          placeholder="Enter password"
                        />
                      </div>

                      <Row className="mb-3">
                        <Col sm={6}>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlInline"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </label>
                          </div>
                        </Col>

                        <Col sm="6" className="text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                          </button>
                        </Col>
                      </Row>

                      <Row className="mb-3 mt-2 mb-0">
                        <div className="col-12 mt-3">
                          <Link to="/pages-recoverpw-2">
                            <i className="mdi mdi-lock"></i> Forgot your
                            password?
                          </Link>
                        </div>
                      </Row>
                    </form>

                    <div className="mt-5 pt-4 text-center">
                      <p>
                        Don't have an account ?{" "}
                        <Link
                          to="/pages-register-2"
                          className="fw-medium-medium text-primary"
                        >
                          {" "}
                          Signup now{" "}
                        </Link>{" "}
                      </p>
                      <p>
                        © {new Date().getFullYear()} Veltrix. Crafted with{" "}
                        <i className="mdi mdi-heart text-danger"></i> by
                        Themesbrand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>


      </div>
    </React.Fragment>
  );
};

export default Login2;
