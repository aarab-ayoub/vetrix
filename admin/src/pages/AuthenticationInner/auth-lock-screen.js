import React from "react";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import { Container, Row, Col, CardBody, Card, Form, FormFeedback, Input } from "reactstrap";

// import images
import logo from "../../assets/images/logo-sm.png";
import avatar from "../../assets/images/users/user-1.jpg";

const LockScreen = () => {
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Please Enter Password"),
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  document.title = "Lock Screen | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/dashboard" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="6" xl="4">
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">Locked</h5>
                    <p className="text-white-50">
                      Hello Smith, enter your password to unlock the screen!
                    </p>
                    <Link to="/dashboard" className="logo logo-admin">
                      <img src={logo} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>
                <CardBody className="p-4">
                  <div className="p-3">
                    <Form className="mt-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                      action="#">

                      <div className="pt-3 text-center">
                        <img src={avatar} className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                        <h6 className="font-size-16 mt-3">Robert Smith</h6>
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="userpassword">Password</label>
                        <Input
                          name="password"
                          className="form-control"
                          placeholder="Enter password"
                          type="password"
                          id="password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.password || ""}
                          invalid={
                            validation.touched.password && validation.errors.password ? true : false
                          }
                        />
                        {validation.touched.password && validation.errors.password ? (
                          <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="row mb-0">
                        <div className="col-12 text-end">
                          <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Unlock</button>
                        </div>
                      </div>

                    </Form>

                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Not you ? return{" "}
                  <Link
                    to="/login"
                    className="fw-medium text-primary"
                  >
                    {" "}
                    Sign In{" "}
                  </Link>{" "}
                </p>
                <p>
                  © 2021 Veltrix. Crafted with{" "}
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
export default LockScreen;
