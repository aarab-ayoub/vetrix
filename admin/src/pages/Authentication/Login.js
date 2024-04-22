import PropTypes from 'prop-types';
import React, { useState, useEffect } from "react";

import { Row, Col, CardBody, Card, Container, Label, Form, FormFeedback, Input } from "reactstrap";

// Redux
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import withRouter from 'components/Common/withRouter';

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import { loginUser, apiError } from "../../store/actions";

// import images
import logoSm from "../../assets/images/logo-sm.png";

const Login = props => {
  const dispatch = useDispatch();

  const [userLogin, setUserLogin] = useState([]);

  const { user } = useSelector(state => ({
    user: state.Account.user,
  }));

  useEffect(() => {
    if (user && user) {
      setUserLogin({
        email: user.email,
        password: user.password
      });
    }
  }, [user]);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: userLogin.email || "admin@themesbrand.com" || '',
      password: userLogin.password || "123456" || '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your User Name"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values, props.router.navigate));
    }
  });

  document.title = "Login | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
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
                    <Form className="mt-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                      action="#">

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="username">Username</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter Username"
                          type="email"
                          id="username"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="userpassword">Password</Label>
                        <Input
                          name="password"
                          value={validation.values.password || ""}
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password && validation.errors.password ? true : false
                          }
                        />
                        {validation.touched.password && validation.errors.password ? (
                          <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                        ) : null}
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
                          <Link to="/forgot-password"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
                        </div>
                      </div>

                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <Link
                    to="/register"
                    className="fw-medium text-primary"
                  >
                    {" "}
                    Signup now{" "}
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

const mapStateToProps = state => {
  const { error } = state.Login;
  return { error };
};

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError })(Login)
);

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
};