import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// import images
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";
import user7 from "../../assets/images/users/user-7.jpg";
import user8 from "../../assets/images/users/user-8.jpg";
import user9 from "../../assets/images/users/user-9.jpg";
import user10 from "../../assets/images/users/user-10.jpg";

const PagesDirectory = () => {
  document.title = "Directory | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          {/* Render Breadcrumbs */}
          <Breadcrumbs maintitle="Veltrix" title="Extra Pages" breadcrumbItem="Directory" />
          <Row>
            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="d-flex">
                    <img
                      src={user2}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Jerome A. Hebert
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Jerome@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links ms-auto">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="d-flex">
                    <img
                      src={user3}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Adam V. Acker
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Adam@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links ms-auto">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="d-flex">
                    <img
                      src={user4}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Stanley M. Dyke
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Stanley@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links ms-auto">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="d-flex">
                    <img
                      src={user5}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Ben J. Mathison
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Ben@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links ms-auto">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="d-flex">
                    <img
                      src={user6}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        John V. Bailey
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">John@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links ms-auto">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="d-flex">
                    <img
                      src={user7}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Antonio J. Thomas
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Antonio@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links ms-auto">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="d-flex">
                    <img
                      src={user8}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Jerome A. Hebert
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Jerome@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links ms-auto">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="d-flex">
                    <img
                      src={user9}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Adam V. Acker
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Adam@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links ms-auto">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="d-flex">
                    <img
                      src={user10}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="text-primary font--size18 mt-0 mb-1">
                        Stanley M. Dyke
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Stanley@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links ms-auto">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PagesDirectory;
