import React from "react";

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
  Container,
} from "reactstrap";

// import images
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img7 from "../../assets/images/small/img-7.jpg";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiCards = () => {
  document.title = "Cards | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="UI Elements" breadcrumbItem="Cards" />

          <Row>
            <Col md={6} lg={6} xl={3}>
              <Card>
                <CardImg top className="img-fluid" src={img1} alt="Veltrix" />
                <CardBody>
                  <CardTitle className="h4">Card title</CardTitle>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Button
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col md={6} lg={6} xl={3}>
              <Card>
                <CardImg top className="img-fluid" src={img2} alt="Veltrix" />
                <CardBody>
                  <CardTitle className="h4">Card title</CardTitle>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </CardBody>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                </ul>
                <CardBody>
                  <Link to="#" className="card-link">
                    Card link
                  </Link>
                  <Link to="#" className="card-link">
                    Another link
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} lg={6} xl={3}>
              <Card>
                <CardImg top className="img-fluid" src={img3} alt="Veltrix" />
                <CardBody>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md={6} lg={6} xl={3}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Card title</CardTitle>
                  <h6 className="card-subtitle font-14 text-muted">
                    Support card subtitle
                  </h6>
                </CardBody>
                <CardImg className="img-fluid" src={img4} alt="Veltrix" />
                <CardBody>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="#" className="card-link">
                    Card link
                  </Link>
                  <Link to="#" className="card-link">
                    Another link
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card body>
                <CardTitle className="h4 mt-0">Special title treatment</CardTitle>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link
                  to="#"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Go somewhere
                </Link>
              </Card>
            </Col>
            <Col md={6}>
              <Card body>
                <CardTitle className="h4 mt-0">Special title treatment</CardTitle>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link
                  to="#"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Go somewhere
                </Link>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <Card body>
                <CardTitle className="h4 mt-0">Special title treatment</CardTitle>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link
                  to="#"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Go somewhere
                </Link>
              </Card>
            </Col>

            <Col lg={4}>
              <Card body className="text-center">
                <CardTitle className="h4 mt-0">Special title treatment</CardTitle>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link
                  to="#"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Go somewhere
                </Link>
              </Card>
            </Col>

            <Col lg={4}>
              <Card body className="text-end">
                <CardTitle className="h4 mt-0">Special title treatment</CardTitle>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link
                  to="#"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Go somewhere
                </Link>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <Card>
                <h4 className="card-header mt-0">Featured</h4>
                <CardBody>
                  <CardTitle className="h4 mt-0">
                    Special title treatment
                  </CardTitle>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card>
                <CardHeader>Quote</CardHeader>
                <CardBody>
                  <blockquote className="card-blockquote mb-0">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer text-muted font-12 m-0">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card>
                <CardHeader>Featured</CardHeader>
                <CardBody>
                  <CardTitle className="h4">
                    Special title treatment
                  </CardTitle>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Go somewhere
                  </Link>
                </CardBody>
                <CardFooter className="text-muted">2 days ago</CardFooter>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <Card>
                <CardImg top className="img-fluid" src={img5} alt="Veltrix" />
                <CardBody>
                  <CardTitle className="h4">Card title</CardTitle>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Card title</CardTitle>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </CardBody>
                <CardImg bottom className="img-fluid" src={img7} alt="Veltrix" />
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="text-white">
                <CardImg className="img-fluid" src={img6} alt="Veltrix" />
                <CardImgOverlay>
                  <CardTitle className="text-white mt-0 h4">Card title</CardTitle>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-white">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <Card className="bg-secondary">
                <CardBody>
                  <blockquote className="card-blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer text-muted font-12 m-0">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="text-white bg-primary">
                <CardBody>
                  <blockquote className="card-blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer text-white font-12 m-0">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="text-white bg-success">
                <CardBody>
                  <blockquote className="card-blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer text-white font-12 m-0">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <div className="card text-white bg-info">
                <div className="card-body">
                  <blockquote className="card-blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer text-white font-12 m-0">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="card text-white bg-warning">
                <div className="card-body">
                  <blockquote className="card-blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer text-white font-12 m-0">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <Card className="text-white bg-danger">
                <CardBody>
                  <blockquote className="card-blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer text-white font-12 m-0">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="text-white bg-dark">
                <CardBody>
                  <blockquote className="card-blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                      erat a ante.</p>
                    <footer className="blockquote-footer text-white font-12 m-0">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col className="col-12">
              <h4 className="my-3">Card groups</h4>
              <CardDeck className="card-deck-wrapper">
                <div className="card-group">
                  <Card className="mb-4">
                    <CardImg top className="img-fluid" src={img4} alt="Veltrix" />
                    <CardBody>
                      <CardTitle className="h4">Card title</CardTitle>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </CardBody>
                  </Card>
                  <Card className="mb-4">
                    <CardImg top className="img-fluid" src={img5} alt="Veltrix" />
                    <CardBody>
                      <CardTitle className="h4">Card title</CardTitle>
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </CardBody>
                  </Card>
                  <Card className="mb-4">
                    <CardImg top className="img-fluid" src={img6} alt="Veltrix" />
                    <CardBody>
                      <CardTitle className="h4">Card title</CardTitle>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has even
                        longer content than the first to show that equal height
                        action.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </CardDeck>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment >
  );
};
export default UiCards


