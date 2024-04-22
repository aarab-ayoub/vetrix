import React from "react"

import { Col, Row, Container, Card, CardBody } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiColors = () => {
  document.title = "Colors | Veltrix - React Admin & Dashboard Template"
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs
            maintitle="Veltrix"
            title="UI Elements"
            breadcrumbItem="Colors"
          />

          <Row>
            <Col xl={3} md={6}>
              <Card>
                <CardBody className="text-center">
                  <div className="color-box p-4 rounded bg-primary">
                    <h5 className="my-2 text-white">#626ed4</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-primary text-center font-size-18">
                    Primary
                  </h5>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <CardBody className="text-center">
                  <div className="color-box p-4 rounded bg-success">
                    <h5 className="my-2 text-white">#02a499</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-success text-center font-size-18">
                    Success
                  </h5>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <CardBody className="text-center">
                  <div className="color-box p-4 rounded bg-info">
                    <h5 className="my-2 text-white">#38a4f8</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-info text-center font-size-18">
                    Info
                  </h5>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <CardBody className="text-center">
                  <div className="color-box p-4 rounded bg-warning">
                    <h5 className="my-2 text-white">#f8b425</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-warning text-center font-size-18">
                    Warning
                  </h5>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={3} md={6}>
              <Card>
                <CardBody className="text-center">
                  <div className="color-box p-4 rounded bg-danger">
                    <h5 className="my-2 text-white">#ec4561</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-danger text-center font-size-18">
                    Danger
                  </h5>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <CardBody className="text-center">
                  <div className="color-box p-4 rounded bg-dark">
                    <h5 className="my-2 text-light">#343a40</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-dark text-center font-size-18">
                    Dark
                  </h5>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <CardBody className="text-center">
                  <div className="color-box p-4 rounded bg-secondary">
                    <h5 className="my-2 text-muted">#e9ecef</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-muted text-center font-size-18">
                    Secondary
                  </h5>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
              <CardBody className="text-center">
                  <div className="color-box p-4 rounded bg-light">
                    <h5 className="my-2">#dee2e6</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-secondary text-center font-size-18">
                    Light
                  </h5>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiColors
