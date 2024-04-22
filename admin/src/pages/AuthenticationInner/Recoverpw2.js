import React from "react";
import { Link } from "react-router-dom";
import { Card, Row } from "reactstrap";
import bg from "../../assets/images/bg.jpg";
import logoDark from "../../assets/images/logo-dark.png";

const Recoverpw2 = () => {
  document.title = "Recover Password 2 | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div
        className="accountbg"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${bg})`
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
                    Reset Password
                  </h4>

                  <form className="mt-4" action="#">
                    <div className="alert alert-success mt-4" role="alert">
                      Enter your Email and instructions will be sent to you!
                    </div>

                    <div className="mb-3">
                      <label htmlFor="useremail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="useremail"
                        placeholder="Enter email"
                      />
                    </div>

                    <Row>
                      <div className="col-12 text-end">
                        <button
                          className="btn btn-primary w-md waves-effect waves-light"
                          type="submit"
                        >
                          Reset
                        </button>
                      </div>
                    </Row>

                    <Row className="mt-2 mb-0">
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
                      Remember It ?{" "}
                      <Link
                        to="/pages-login-2"
                        className="fw-medium text-primary"
                      >
                        {" "}
                        Sign In here{" "}
                      </Link>{" "}
                    </p>
                    <p>
                      © {new Date().getFullYear()}{" "}
                      Veltrix. Crafted with{" "}
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
    </React.Fragment>
  );
};

export default Recoverpw2;
