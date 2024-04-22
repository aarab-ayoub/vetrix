import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";

// import images
import logo from "../../assets/images/logo-sm.png";

const Recoverpw = () => {
  document.title = "Recover Password | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/dashboard" className="text-dark">
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
                    <h5 className="text-white font-size-20 p-2">
                      Reset Password
                    </h5>
                    <Link to="/dashboard" className="logo logo-admin">
                      <img src={logo} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <div className="alert alert-success mt-5" role="alert">
                      Enter your Email and instructions will be sent to you!
                    </div>

                    <Form className="mt-4" action="dashboard">
                      <div className="mb-3">
                        <Label htmlFor="useremail">Email</Label>
                        <Input
                          type="email"
                          className="form-control"
                          id="useremail"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="row mb-0">
                        <Col xs={12} className="text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Reset
                          </button>
                        </Col>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>

              <div className="mt-5 text-center">
                <p>
                  Remember It ?{" "}
                  <Link
                    to="/login"
                    className="fw-medium text-primary"
                  >
                    {" "}
                    Sign In here{" "}
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
      </div> </React.Fragment>
  );
};

export default Recoverpw;
