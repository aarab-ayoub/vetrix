import React from "react";
import {
  Alert,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  UncontrolledAlert,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiAlert = () => {
  document.title = "Alerts | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="UI Elements" breadcrumbItem="Alerts" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Examples</h4>
                  <p className="card-title-desc">
                    Alerts are available for any length of text, as well as an
                    optional dismiss button. For proper styling, use one of the
                    four <strong>required</strong> contextual classes (e.g.,{" "}
                    <code className="highlighter-rouge">.alert-success</code>).
                    For inline dismissal, use the alerts jQuery plugin.{" "}
                  </p>

                  <div className="">
                    <Alert color="success">
                      <strong>Well done!</strong> You successfully read this
                      important alert message.
                    </Alert>

                    <Alert color="info">
                      <strong>Heads up!</strong> This alert needs your
                      attention, but it's not super important.
                    </Alert>

                    <Alert color="warning">
                      <strong>Warning!</strong> Better check yourself, you're
                      not looking too good.
                    </Alert>

                    <Alert color="danger" className="mb-0">
                      <strong>Oh snap!</strong> Change a few things up and try
                      submitting again.
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Link color</h4>
                  <p className="card-title-desc">
                    Use the{" "}
                    <code className="highlighter-rouge">.alert-link</code>{" "}
                    utility className to quickly provide matching colored links
                    within any alert.
                  </p>

                  <div className="">
                    <Alert color="success">
                      <strong>Well done!</strong> You successfully read{" "}
                      <Link to="#" className="alert-link">
                        this important alert message
                      </Link>
                      .
                    </Alert>
                    <Alert color="info">
                      <strong>Heads up!</strong> This{" "}
                      <Link to="#" className="alert-link">
                        alert needs your attention
                      </Link>
                      , but it's not super important.
                    </Alert>
                    <Alert color="warning">
                      <strong>Warning!</strong> Better check yourself, you're{" "}
                      <Link to="#" className="alert-link">
                        not looking too good
                      </Link>
                      .
                    </Alert>
                    <Alert color="danger" className="mb-0">
                      <strong>Oh snap!</strong>{" "}
                      <Link to="#" className="alert-link">
                        Change a few things up
                      </Link>{" "}
                      and try submitting again.
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Dismissing </CardTitle>
                  <p className="card-title-desc">
                    You can see this in action with a live demo:
                  </p>

                  <div className="">
                    <UncontrolledAlert color="success">
                      <strong>Well done!</strong> You successfully read this
                      important alert message.
                    </UncontrolledAlert>
                    <UncontrolledAlert color="info" role="alert">
                      <strong>Heads up!</strong> This alert needs your
                      attention, but it's not super important.
                    </UncontrolledAlert>
                    <UncontrolledAlert color="warning" role="alert">
                      <strong>Warning!</strong> Better check yourself, you're
                      not looking too good.
                    </UncontrolledAlert>
                    <UncontrolledAlert color="danger" className="mb-0" role="alert">
                      <strong>Oh snap!</strong> Change a few things up and try
                      submitting again.
                    </UncontrolledAlert>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Examples</h4>
                  <p className="card-title-desc ">Alerts are available for any length of
                    text, as well as an optional dismiss button. For proper styling, use one
                    of the four <strong>required</strong> contextual classes (e.g., <code
                      className="highlighter-rouge">.alert-success .bg-**</code>). For inline
                    dismissal, use the alerts jQuery plugin.</p>

                  <div className="">
                    <Alert color="success" className="bg-success text-white border-0" role="alert">
                      <strong>Well done!</strong> You successfully read this important alert message.
                    </Alert>
                    <Alert color="info" className="bg-info text-white border-0" role="alert">
                      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                    </Alert>
                    <Alert color="warning" className="bg-warning text-white border-0" role="alert">
                      <strong>Warning!</strong> Better check yourself, you're not looking too good.
                    </Alert>
                    <Alert color="danger" className="bg-danger text-white mb-0 border-0" role="alert">
                      <strong>Oh snap!</strong> Change a few things up and try submitting again.
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>

                  <h4 className="card-title">Icons</h4>
                  <p className="card-title-desc">Alerts are available for any length of
                    text, as well as an optional dismiss button. For proper styling, use one
                    of the four <strong>required</strong> contextual classes.</p>

                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                      <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </symbol>
                      <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </symbol>
                      <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </symbol>
                    </svg>

                    <Alert color="success" className="d-flex align-items-center" role="alert">
                      <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
                        <use xlinkHref="#check-circle-fill" />
                      </svg>
                      <div>
                        An example success alert with an icon
                      </div>
                    </Alert>
                    <Alert color="info" className="d-flex align-items-center" role="alert">
                      <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:">
                        <use xlinkHref="#info-fill" />
                      </svg>
                      <div>
                        An example alert with an icon
                      </div>
                    </Alert>
                    <Alert color="warning" className="d-flex align-items-center" role="alert">
                      <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:">
                        <use xlinkHref="#exclamation-triangle-fill" />
                      </svg>
                      <div>
                        An example warning alert with an icon
                      </div>
                    </Alert>
                    <Alert color="danger" className="d-flex align-items-center" role="alert">
                      <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
                        <use xlinkHref="#exclamation-triangle-fill" />
                      </svg>
                      <div>
                        An example danger alert with an icon
                      </div>
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Additional content</h4>
                  <p className="card-title-desc">
                    Alerts can also contain additional HTML elements like
                    headings and paragraphs.
                  </p>

                  <div className="">
                    <Alert color="success" className="mb-0" role="alert">
                      <h4 className="alert-heading font-18">Well done!</h4>
                      <p>
                        Aww yeah, you successfully read this important alert
                        message. This example text is going to run a bit longer
                        so that you can see how spacing within an alert works
                        with this kind of content.
                      </p>
                      <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to
                        keep things nice and tidy.
                      </p>
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UiAlert;
