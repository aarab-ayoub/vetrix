import React from "react";

import {
    Col,
    Row,
    Card,
    CardBody,
    Container,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";

const UiUtilities = () => {
    document.title = "Utilities | Veltrix - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs maintitle="Veltrix" title="UI Elements" breadcrumbItem="Utilities" />
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Additive Border</h4>
                                    <p className="card-title-desc">Add borders to custom elements.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="border border-primary bg-light p-5 d-inline-block"></span>
                                        <span className="border-top border-primary bg-light p-5 d-inline-block"></span>
                                        <span className="border-end border-primary bg-light p-5 d-inline-block"></span>
                                        <span className="border-bottom border-primary bg-light p-5 d-inline-block"></span>
                                        <span className="border-start border-primary bg-light p-5 d-inline-block"></span>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Subtractive Border</h4>
                                    <p className="card-title-desc">Or remove borders to custom elements.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="border border-0 border-primary bg-light p-5 d-inline-block"></span>
                                        <span className="border border-top-0 border-primary bg-light p-5 d-inline-block"></span>
                                        <span className="border border-end-0 border-primary bg-light p-5 d-inline-block"></span>
                                        <span className="border border-bottom-0 border-primary bg-light p-5 d-inline-block"></span>
                                        <span className="border border-start-0 border-primary bg-light p-5 d-inline-block"></span>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Border Color</h4>
                                    <p className="card-title-desc">Change the border color using utilities built on our theme colors.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="border border-primary bg-light p-5 d-inline-block"></span>
                                        <span className="border border-secondary bg-light p-5 d-inline-block"></span>
                                        <span className="border border-success bg-light p-5 d-inline-block"></span>
                                        <span className="border border-danger bg-light p-5 d-inline-block"></span>
                                        <span className="border border-warning bg-light p-5 d-inline-block"></span>
                                        <span className="border border-info bg-light p-5 d-inline-block"></span>
                                        <span className="border border-dark bg-light p-5 d-inline-block"></span>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Border Width</h4>
                                    <p className="card-title-desc">Change the border color using utilities built on our theme colors.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="border border-1 p-5 d-inline-block"></span>
                                        <span className="border border-2 p-5 d-inline-block"></span>
                                        <span className="border border-3 p-5 d-inline-block"></span>
                                        <span className="border border-4 p-5 d-inline-block"></span>
                                        <span className="border border-5 p-5 d-inline-block"></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Border Opacity</h4>
                                    <p className="card-title-desc">To change that opacity, override <code>--bs-border-opacity</code> via custom styles or inline styles.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="border border-primary border-opacity-10 bg-light p-5 d-inline-block"></span>
                                        <span className="border border-primary border-opacity-25 bg-light p-5 d-inline-block"></span>
                                        <span className="border border-primary border-opacity-50 bg-light p-5 d-inline-block"></span>
                                        <span className="border border-primary border-opacity-75 bg-light p-5 d-inline-block"></span>
                                        <span className="border border-primary border-opacity-100 bg-light p-5 d-inline-block"></span>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Border Radius</h4>
                                    <p className="card-title-desc">Add classes to an element to easily round its corners.
                                    </p>
                                    <div className="d-flex flex-wrap gap-3 align-items-center">
                                        <img src={avatar2} className="rounded avatar-xl" alt=" " />
                                        <img src={avatar2} className="rounded-top avatar-xl" alt="" />
                                        <img src={avatar2} className="rounded-end avatar-xl" alt="" />
                                        <img src={avatar2} className="rounded-bottom avatar-xl" alt="" />
                                        <img src={avatar2} className="rounded-start avatar-xl" alt="" />
                                        <img src={avatar2} className="rounded-circle avatar-xl" alt="" />
                                        <img src={img3} alt="" className="rounded-pill w-25 h-auto" />
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Rounded Sizes</h4>
                                    <p className="card-title-desc">Use the scaling classes for larger or smaller rounded corners. Sizes range from <code> 0</code> to <code> 3</code>, and can be configured<code> 4</code> & <code> 5</code> by modifying the utilities API.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <img src={img3} className="rounded-0 avatar-xl" alt="" />
                                        <img src={img3} className="rounded-1 avatar-xl" alt="" />
                                        <img src={img3} className="rounded-2 avatar-xl" alt="" />
                                        <img src={img3} className="rounded-3 avatar-xl" alt="" />
                                        <img src={img3} className="rounded-4 avatar-xl" alt="" />
                                        <img src={img3} className="rounded-5 avatar-xl" alt="" />
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

export default UiUtilities;
