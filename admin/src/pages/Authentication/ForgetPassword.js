import PropTypes from 'prop-types';
import React from "react";
import { Row, Col, Alert, Card, CardBody, Container, Form, FormFeedback, Label, Input } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// Redux
import { connect, useDispatch } from "react-redux";

// import { withRouter, Link } from "react-router-dom"
import { Link } from 'react-router-dom';
import withRouter from 'components/Common/withRouter';

// action
import { userForgetPassword } from "../../store/actions";

// import images
import logoSm from "../../assets/images/logo-sm.png";

const ForgetPasswordPage = props => {
  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
    }),
    onSubmit: (values) => {
      dispatch(userForgetPassword(values, props.history));
    }
  });

  document.title = "Forget Password | Veltrix - React Admin & Dashboard Template";
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

                  {props.forgetError && props.forgetError ? (
                    <Alert color="danger" style={{ marginTop: "13px" }} className="mt-5">
                      {props.forgetError}
                    </Alert>
                  ) : null}
                  {props.forgetSuccessMsg ? (
                    <Alert color="success" style={{ marginTop: "13px" }} className="mt-5">
                      {props.forgetSuccessMsg}
                    </Alert>
                  ) : null}

                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                    className="mt-4">

                    <div className="mb-3">
                      <Label className="form-label" htmlor="useremail">Email</Label>
                      <Input
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email || ""}
                        invalid={
                          validation.touched.email && validation.errors.email ? true : false
                        }
                      />
                      {validation.touched.email && validation.errors.email ? (
                        <FormFeedback type="invalid"><div>{validation.errors.email}</div></FormFeedback>
                      ) : null}
                    </div>

                    <div className="row  mb-0">
                      <div className="col-12 text-end">
                        <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
                      </div>
                    </div>

                  </Form>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>Remember It ? <Link to="/login" className="fw-medium text-primary"> Sign In here </Link> </p>
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

ForgetPasswordPage.propTypes = {
  forgetError: PropTypes.any,
  forgetSuccessMsg: PropTypes.any,
  history: PropTypes.object,
  userForgetPassword: PropTypes.func
};

const mapStatetoProps = state => {
  const { forgetError, forgetSuccessMsg } = state.ForgetPassword;
  return { forgetError, forgetSuccessMsg };
};

export default withRouter(
  connect(mapStatetoProps, { userForgetPassword })(ForgetPasswordPage)
);