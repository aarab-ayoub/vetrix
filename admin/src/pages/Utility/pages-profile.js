import React, { useState } from "react";
import { Card, CardBody, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent, TabPane, UncontrolledDropdown } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";
import SimpleBar from "simplebar-react";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import ProfileChart from "./profile-chart";

// Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";

const PagesProfile = () => {

    // Custom Tabs Bordered
    const [customActiveTab, setcustomActiveTab] = useState("1");
    const toggleCustom = (tab) => {
        if (customActiveTab !== tab) {
            setcustomActiveTab(tab);
        }
    };

    document.title = "Profile | Veltrix - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs maintitle="Veltrix" title="Extra Pages" breadcrumbItem="Profile" />

                    <Row>
                        <Col xl={3}>
                            <div className="user-sidebar">
                                <Card>
                                    <CardBody>
                                        <div className="">
                                            <div className="d-flex justify-content-end">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle tag="a" className="btn dropdown-toggle text-muted fs-5" id="dropdownMenuButton" role="button">
                                                        <i className="mdi mdi-dots-vertical"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Action</DropdownItem>
                                                        <DropdownItem>Another action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                        </div>
                                        <div className="mt-n4 position-relative">
                                            <div className="text-center">
                                                <img src={avatar1} alt="" className="avatar-xl rounded-circle img-thumbnail" />

                                                <div className="mt-3">
                                                    <h5 className="">Kat Macaulay</h5>
                                                    <div>
                                                        <Link to="#" className="text-muted m-1">Project Manager</Link>
                                                    </div>

                                                    <div className="mt-4">
                                                        <Link to="#" className="btn btn-primary waves-effect waves-light btn-sm me-1">Send Message</Link>
                                                        <Link to="#" className="btn btn-primary waves-effect waves-light btn-sm">Email</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="p-3 mt-3">
                                            <Row className="text-center">
                                                <Col className="border-end">
                                                    <div className="p-1">
                                                        <h5 className="mb-1">1,269</h5>
                                                        <p className="text-muted mb-0">Products</p>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="p-1">
                                                        <h5 className="mb-1">5.2k</h5>
                                                        <p className="text-muted mb-0">Followers</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </CardBody>
                                </Card>


                                <Card>
                                    <div className="card-header">
                                        <h4 className="card-title">Personal Information</h4>
                                    </div>
                                    <CardBody>

                                        <p className="font-size-15 mb-1">Hi my name is Kat Macaulay.</p>
                                        <p className="font-size-15">I'm the Co-founder and Head of Design at Company agency.</p>
                                        <p className="text-muted">Been the industry's standard dummy text To an English person. Our team collaborators and clients to achieve growth.</p>
                                        <h5 className="font-size-15">Experience :</h5>
                                        <ul className="list-unstyled mb-0 pt-1">
                                            <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Donec vitae libero venenatis faucibus</li>
                                            <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Quisque rutrum aenean imperdiet</li>
                                            <li className="py-1"><i className="mdi mdi-circle-medium me-1 text-success align-middle"></i>Integer ante a consectetuer eget</li>
                                        </ul>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <div className="card-header">
                                        <h4 className="card-title">Demographics</h4>
                                    </div>
                                    <CardBody>
                                        <ul className="list-unstyled mb-0">
                                            <li className="d-flex justify-content-between p-2 font-size-15"><span className="text-muted">Gender</span><span>Male</span></li>
                                            <li className="d-flex justify-content-between p-2 font-size-15"><span className="text-muted">DOB</span><span>01/02/2000</span></li>
                                            <li className="d-flex justify-content-between p-2 font-size-15"><span className="text-muted">Age</span><span>22</span></li>
                                            <li className="d-flex justify-content-between p-2 font-size-15"><span className="text-muted">Hire Date</span><span>22/08/2022</span></li>
                                            <li className="d-flex justify-content-between p-2 font-size-15"><span className="text-muted">Department</span><span>Graphic Design</span></li>
                                            <li className="d-flex justify-content-between p-2 font-size-15"><span className="text-muted">Location</span><span>Jannieborouth</span></li>
                                            <li className="d-flex justify-content-between p-2 font-size-15"><span className="text-muted">Position</span><span>UX Designer</span></li>
                                            <li className="d-flex justify-content-between p-2 font-size-15"><span className="text-muted">Supervisor</span><span>Meson Jansen</span></li>
                                        </ul>
                                    </CardBody>
                                </Card>


                                <Card>
                                    <CardBody>
                                        <h5 className="card-title mb-4">Skills</h5>
                                        <div className="d-flex flex-wrap gap-2 fs-15">
                                            <Link to="#" className="badge badge-soft-primary">Photoshop</Link>
                                            <Link to="#" className="badge badge-soft-primary">illustrator</Link>
                                            <Link to="#" className="badge badge-soft-primary">HTML</Link>
                                            <Link to="#" className="badge badge-soft-primary">CSS</Link>
                                            <Link to="#" className="badge badge-soft-primary">Javascript</Link>
                                            <Link to="#" className="badge badge-soft-primary">Php</Link>
                                            <Link to="#" className="badge badge-soft-primary">Python</Link>
                                        </div>
                                    </CardBody>
                                </Card>


                                <Card>
                                    <CardBody>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-xs">
                                                    <div className="avatar-title rounded-circle bg-primary bg-gradient fs-4">
                                                        <i className="mdi mdi-chart-pie"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="text-muted mb-1">Revenue</p>
                                                <h5 className="mb-0">$21,456</h5>
                                            </div>

                                            <div className="flex-shrink-0 align-self-end ms-2">
                                                <div className="badge rounded-pill font-size-13 badge-soft-success">+ 2.65%
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>



                                <Card>
                                    <CardBody>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-xs">
                                                    <div className="avatar-title rounded-circle bg-primary bg-gradient fs-4">
                                                        <i className="mdi mdi-shopping"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="text-muted mb-1">Orders</p>
                                                <h5 className="mb-0">5,643</h5>
                                            </div>
                                            <div className="flex-shrink-0 align-self-end ms-2">
                                                <div className="badge rounded-pill font-size-13 badge-soft-danger">- 0.82%
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>

                                </Card>
                                <Card>
                                    <CardBody>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-xs">
                                                    <div className="avatar-title rounded-circle bg-primary bg-gradient fs-4">
                                                        <i className="mdi mdi-account-multiple"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="text-muted mb-1">Customers</p>
                                                <h5 className="mb-0">45,254</h5>
                                            </div>
                                            <div className="flex-shrink-0 align-self-end ms-2">
                                                <div className="badge rounded-pill font-size-13 badge-soft-danger">- 1.04%</div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>

                        <Col xl={9}>
                            <Card>
                                <CardBody>
                                    <div id="profile-chart" className="apex-charts">
                                        <ProfileChart />
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <Nav tabs className="nav nav-tabs nav-tabs-custom nav-justified">
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: customActiveTab === "1",
                                            })}
                                            onClick={() => {
                                                toggleCustom("1");
                                            }}
                                        >
                                            <i className="bx bx-user-circle font-size-20"></i>
                                            <span className="d-none d-sm-block">About</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: customActiveTab === "2",
                                            })}
                                            onClick={() => {
                                                toggleCustom("2");
                                            }}
                                        >
                                            <i className="bx bx-clipboard font-size-20"></i>
                                            <span className="d-none d-sm-block">Tasks</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: customActiveTab === "3",
                                            })}
                                            onClick={() => {
                                                toggleCustom("3");
                                            }}
                                        >
                                            <i className="bx bx-mail-send font-size-20"></i>
                                            <span className="d-none d-sm-block">Messages</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: customActiveTab === "4",
                                            })}
                                            onClick={() => {
                                                toggleCustom("4");
                                            }}
                                        >
                                            <i className="bx bx-image font-size-20"></i>
                                            <span className="d-none d-sm-block">Post</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>

                                <TabContent
                                    activeTab={customActiveTab}
                                    className="p-4"
                                >
                                    <TabPane tabId="1">

                                        <div>
                                            <div>
                                                <h5 className="font-size-16 mb-4">Experience</h5>

                                                <ol className="activity-checkout mb-0 px-4 mt-3">
                                                    <li className="checkout-item">
                                                        <div className="avatar-sm checkout-icon p-1">
                                                            <div className="avatar-title rounded-circle bg-primary">
                                                                <i className="mdi mdi-pen text-white font-size-20"></i>
                                                            </div>
                                                        </div>
                                                        <div className="feed-item-list">
                                                            <div>
                                                                <h5 className="font-size-16 mb-1">Front end Developer</h5>
                                                                <p className="text-muted text-truncate mb-2">2016 - 2019</p>
                                                                <div className="mb-3">
                                                                    <p>ABC Company</p>
                                                                    <p className="text-muted">Proin maximus nibh at lorem bibendum venenatis. Cras gravida felis et erat consectetur, ac venenatis quam pulvinar.
                                                                        Cras neque neque, vehicula vel lacus quis, eleifend iaculis mi.
                                                                        Curabitur in mi eget ex fringilla ultricies sit amet quis arcu.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="checkout-item">
                                                        <div className="avatar-sm checkout-icon p-1">
                                                            <div className="avatar-title rounded-circle bg-primary">
                                                                <i className="mdi mdi-chart-box text-white font-size-20"></i>
                                                            </div>
                                                        </div>
                                                        <div className="feed-item-list">

                                                            <h5 className="font-size-16 mb-1">UI /UX Designer</h5>
                                                            <p className="text-muted text-truncate mb-2">2014 - 2016</p>
                                                            <div className="mb-3">
                                                                <p>XYZ Company</p>
                                                                <p className="text-muted">It will be as simple as occidental in fact,
                                                                    it will be Occidental. To an English person, it will seem like simplified
                                                                    English, as a skeptical Cambridge friend of mine told me what Occidental</p>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ol>
                                            </div>

                                            <div>
                                                <h5 className="font-size-16 mb-4">Projects</h5>
                                                <div className="table-responsive">
                                                    <table className="table table-nowrap table-hover mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Projects</th>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Budget</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col" style={{ width: "120px" }}>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">01</th>
                                                                <td><Link to="#" className="text-dark">Brand Logo Design</Link></td>
                                                                <td>
                                                                    18 Jun, 2021
                                                                </td>
                                                                <td>
                                                                    $523
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-primary font-size-12">Open</span>
                                                                </td>
                                                                <td>
                                                                    <div className="dropdown">
                                                                        <Link className="text-muted dropdown-toggle font-size-18 px-2" to="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                            <i className="mdi mdi-dots-vertical"></i>
                                                                        </Link>

                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <Link className="dropdown-item" to="#">Action</Link>
                                                                            <Link className="dropdown-item" to="#">Another action</Link>
                                                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">02</th>
                                                                <td><Link to="#" className="text-dark">Minible Admin</Link></td>
                                                                <td>
                                                                    06 Jun, 2021
                                                                </td>
                                                                <td>
                                                                    $253
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-primary font-size-12">Open</span>
                                                                </td>
                                                                <td>
                                                                    <div className="dropdown">
                                                                        <Link className="text-muted dropdown-toggle font-size-18 px-2" to="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                            <i className="mdi mdi-dots-vertical"></i>
                                                                        </Link>

                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <Link className="dropdown-item" to="#">Action</Link>
                                                                            <Link className="dropdown-item" to="#">Another action</Link>
                                                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">03</th>
                                                                <td><Link to="#" className="text-dark">Chat app Design</Link></td>
                                                                <td>
                                                                    28 May, 2021
                                                                </td>
                                                                <td>
                                                                    $356
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-success font-size-12">Complete</span>
                                                                </td>
                                                                <td>
                                                                    <div className="dropdown">
                                                                        <Link className="text-muted dropdown-toggle font-size-18 px-2" to="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                            <i className="mdi mdi-dots-vertical"></i>
                                                                        </Link>

                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <Link className="dropdown-item" to="#">Action</Link>
                                                                            <Link className="dropdown-item" to="#">Another action</Link>
                                                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">04</th>
                                                                <td><Link to="#" className="text-dark">Minible Landing</Link></td>
                                                                <td>
                                                                    13 May, 2021
                                                                </td>
                                                                <td>
                                                                    $425
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-success font-size-12">Complete</span>
                                                                </td>
                                                                <td>
                                                                    <div className="dropdown">
                                                                        <Link className="text-muted dropdown-toggle font-size-18 px-2" to="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                            <i className="mdi mdi-dots-vertical"></i>
                                                                        </Link>

                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <Link className="dropdown-item" to="#">Action</Link>
                                                                            <Link className="dropdown-item" to="#">Another action</Link>
                                                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">05</th>
                                                                <td><Link to="#" className="text-dark">Authentication Pages</Link></td>
                                                                <td>
                                                                    06 May, 2021
                                                                </td>
                                                                <td>
                                                                    $752
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-success font-size-12">Complete</span>
                                                                </td>
                                                                <td>
                                                                    <div className="dropdown">
                                                                        <Link className="text-muted dropdown-toggle font-size-18 px-2" to="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                            <i className="mdi mdi-dots-vertical"></i>
                                                                        </Link>

                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <Link className="dropdown-item" to="#">Action</Link>
                                                                            <Link className="dropdown-item" to="#">Another action</Link>
                                                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </TabPane>
                                    <TabPane tabId="2">

                                        <div>
                                            <h5 className="font-size-16 mb-3">Active</h5>

                                            <div className="table-responsive">
                                                <table className="table table-nowrap table-centered">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: "60px" }}>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-activeCheck2" />
                                                                    <label className="form-check-label" htmlFor="tasks-activeCheck2"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-medium text-dark">Ecommerce Product Detail</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 3
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Product Design</p>
                                                            </td>

                                                            <td>27 May, 2021</td>
                                                            <td style={{ width: "160px" }}><span className="badge badge-soft-primary font-size-12">Active</span></td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-activeCheck1" />
                                                                    <label className="form-check-label" htmlFor="tasks-activeCheck1"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-medium text-dark">Ecommerce Product</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 7
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Web Development</p>
                                                            </td>

                                                            <td>26 May, 2021</td>
                                                            <td><span className="badge badge-soft-primary font-size-12">Active</span></td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <h5 className="font-size-16 my-3">Upcoming</h5>

                                            <div className="table-responsive">
                                                <table className="table table-nowrap table-centered">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: "60px" }}>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck3" />
                                                                    <label className="form-check-label" htmlFor="tasks-upcomingCheck3"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-medium text-dark">Chat app Page</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 2
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Web Development</p>
                                                            </td>

                                                            <td>-</td>
                                                            <td style={{ width: "160px" }}><span className="badge badge-soft-secondary font-size-12">Waiting</span></td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck2" />
                                                                    <label className="form-check-label" htmlFor="tasks-upcomingCheck2"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-medium text-dark">Email Pages</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Illustration</p>
                                                            </td>

                                                            <td>04 June, 2021</td>
                                                            <td><span className="badge badge-soft-primary font-size-12">Approved</span></td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck1" />
                                                                    <label className="form-check-label" htmlFor="tasks-upcomingCheck1"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-medium text-dark">Contacts Profile Page</Link>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 6
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Product Design</p>
                                                            </td>

                                                            <td>-</td>
                                                            <td><span className="badge badge-soft-secondary font-size-12">Waiting</span></td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <h5 className="font-size-16 my-3">Complete</h5>

                                            <div className="table-responsive">
                                                <table className="table table-nowrap table-centered">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: "60px" }}>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-completeCheck3" />
                                                                    <label className="form-check-label" htmlFor="tasks-completeCheck3"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-medium text-dark">UI Elements</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 6
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Product Design</p>
                                                            </td>

                                                            <td>27 May, 2021</td>
                                                            <td style={{ width: "160px" }}><span className="badge badge-soft-success font-size-12">Complete</span></td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-completeCheck2" />
                                                                    <label className="form-check-label" htmlFor="tasks-completeCheck2"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-medium text-dark">Authentication Pages</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 2
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Illustration</p>
                                                            </td>

                                                            <td>27 May, 2021</td>
                                                            <td><span className="badge badge-soft-success font-size-12">Complete</span></td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-completeCheck1" />
                                                                    <label className="form-check-label" htmlFor="tasks-completeCheck1"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-medium text-dark">Admin Layout</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 3
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Product Design</p>
                                                            </td>

                                                            <td>26 May, 2021</td>
                                                            <td><span className="badge badge-soft-success font-size-12">Complete</span></td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </TabPane>
                                    <TabPane tabId="3">

                                        <div>
                                            <h5 className="font-size-16 mb-4">Review</h5>
                                            <SimpleBar className="px-3" data-simplebar="init" style={{ maxHeight: "430px" }}>
                                                <div className="d-flex align-items-start border-bottom pb-4">
                                                    <div className="flex-shrink-0 me-2">
                                                        <img className="rounded-circle avatar-sm" src={avatar3} alt="avatar-3 images" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-15 mb-1">Marion Walker <small className="text-muted float-end">1 hr ago</small></h5>
                                                        <p className="text-muted">Maecenas non vestibulum ante, nec efficitur orci. Duis eu ornare mi, quis bibendum quam. Etiam imperdiet aliquam purus sit amet rhoncus. Vestibulum pretium consectetur leo, in mattis ipsum sollicitudin eget. Pellentesque vel mi tortor.
                                                            Nullam vitae maximus dui dolor sit amet, consectetur adipiscing elit.</p>

                                                        <Link to="#" className="text-muted font-13 d-inline-block"><i className="mdi mdi-reply"></i> Reply</Link>

                                                        <div className="d-flex align-items-start mt-4">
                                                            <div className="flex-shrink-0 me-2">
                                                                <img className="rounded-circle avatar-sm" src={avatar4} alt="avatar-4 images" />
                                                            </div>

                                                            <div className="flex-grow-1">
                                                                <h5 className="font-size-15 mb-1">Shanon Marvin <small className="text-muted float-end">1 hr ago</small></h5>
                                                                <p className="text-muted">It will be as simple as in fact, it will be Occidental. To it will seem like simplified .</p>


                                                                <Link to="#" className="text-muted font-13 d-inline-block">
                                                                    <i className="mdi mdi-reply"></i> Reply
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start border-bottom py-4">
                                                    <div className="flex-shrink-0 me-2">
                                                        <img className="rounded-circle avatar-sm" src={avatar5} alt="avatar-5 images" />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-15 mb-1">Janice Morgan <small className="text-muted float-end">2 hrs ago</small></h5>
                                                        <p className="text-muted">Cras ac condimentum velit. Quisque vitae elit auctor quam egestas congue. Duis eget lorem fringilla, ultrices justo consequat, gravida lorem. Maecenas orci enim, sodales id condimentum et, nisl arcu aliquam velit,
                                                            sit amet vehicula turpis metus cursus dolor cursus eget dui.</p>

                                                        <Link to="#" className="text-muted font-13 d-inline-block"><i className="mdi mdi-reply"></i> Reply</Link>

                                                    </div>
                                                </div>

                                                <div className="d-flex align-items-start border-bottom py-4">
                                                    <div className="flex-shrink-0 me-2">
                                                        <img className="rounded-circle avatar-sm" src={avatar7} alt="avatar-7 images" />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-15 mb-1">Patrick Petty <small className="text-muted float-end">3 hrs ago</small></h5>
                                                        <p className="text-muted">Aliquam sit amet eros eleifend, tristique ante sit amet, eleifend arcu. Cras ut diam quam. Fusce quis diam eu augue semper ullamcorper vitae sed massa. Mauris lacinia, massa a feugiat mattis, leo massa porta eros, sed congue arcu sem nec orci.
                                                            In ac consectetur augue. Nullam pulvinar risus non augue tincidunt blandit.</p>
                                                        <Link to="#" className="text-muted font-13 d-inline-block"><i className="mdi mdi-reply"></i> Reply</Link>
                                                    </div>
                                                </div>
                                            </SimpleBar>

                                            <div className="border rounded mt-4">
                                                <form action="#">
                                                    <div className="px-2 py-1 bg-light">

                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="bx bx-link font-size-15"></i></button>
                                                            <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="bx bx-smile font-size-15"></i></button>
                                                            <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="bx bx-at font-size-15"></i></button>
                                                        </div>

                                                    </div>
                                                    <textarea rows="3" className="form-control border-0 resize-none" placeholder="Your Message..."></textarea>

                                                </form>
                                            </div>


                                            <div className="text-end mt-3">
                                                <button type="button" className="btn btn-success w-sm text-truncate ms-2"> Send <i className="bx bx-send ms-2 align-middle"></i></button>
                                            </div>
                                        </div>

                                    </TabPane>
                                    <TabPane tabId="4">

                                        <div>
                                            <h5 className="font-size-16 mb-4">Post</h5>

                                            <div className="blog-post">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md me-3">
                                                        <img src={avatar6} alt="" className="img-fluid rounded-circle img-thumbnail d-block" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="font-size-15 text-truncate"><Link to="#" className="text-dark">Richard Johnson</Link></h5>
                                                        <p className="font-size-13 text-muted mb-0">24 Mar, 2021</p>
                                                    </div>
                                                </div>
                                                <div className="pt-3">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item me-3">
                                                            <Link to="#" className="text-muted">
                                                                <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i> Development
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item me-3">
                                                            <Link to="#" className="text-muted">
                                                                <i className="bx bx-comment-dots align-middle text-muted me-1"></i> 08 Comments
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="position-relative mt-3">
                                                    {/* <img src={avatar1} alt="" className="img-thumbnail" /> */}
                                                </div>
                                                <div className="pt-3">
                                                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                                                        <div>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item me-3">
                                                                    <Link to="#" className="text-muted">
                                                                        <i className="bx bx-purchase-tag-alt text-muted me-1"></i> Project
                                                                    </Link>
                                                                </li>
                                                                <li className="list-inline-item me-3">
                                                                    <Link to="#" className="text-muted">
                                                                        <i className="bx bx-like align-middle text-muted me-1"></i> 12 Like
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-group">
                                                                    <div className="avatar-group-item">
                                                                        <Link to="#" className="d-inline-block">
                                                                            <img src={avatar4} alt="" className="rounded-circle avatar-sm" />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="avatar-group-item">
                                                                        <Link to="#" className="d-inline-block">
                                                                            <img src={avatar5} alt="" className="rounded-circle avatar-sm" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="ms-2">
                                                                    <button type="button" className="btn btn-outline-primary btn-sm waves-effect">Share <i className="bx bx-share-alt align-middle ms-1"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="blog-post mt-4">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md me-3">
                                                        <img src={avatar2} alt="" className="img-fluid img-thumbnail rounded-circle d-block" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="font-size-15 text-truncate"><Link to="#" className="text-dark">Michael Smith</Link></h5>
                                                        <p className="font-size-13 text-muted mb-0">08 Mar, 2021</p>
                                                    </div>
                                                </div>
                                                <div className="pt-3">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item me-3">
                                                            <Link to="#" className="text-muted">
                                                                <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i> Development
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item me-3">
                                                            <Link to="#" className="text-muted">
                                                                <i className="bx bx-comment-dots align-middle text-muted me-1"></i> 08 Comments
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <p className="text-muted">Aenean ornare mauris velit. Donec imperdiet, massa sit amet porta maximus, massa justo faucibus nisi,
                                                        eget accumsan nunc ipsum nec lacus. Etiam dignissim turpis sit amet lectus porttitor eleifend. Maecenas ornare molestie metus eget feugiat.
                                                        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                                                </div>
                                                <div className="position-relative mt-3">
                                                    {/* <img src={avatar1} alt="" className="img-thumbnail" /> */}
                                                </div>
                                                <div className="pt-3">
                                                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                                                        <div>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item me-3">
                                                                    <Link to="#" className="text-muted">
                                                                        <i className="bx bx-purchase-tag-alt text-muted me-1"></i> Project
                                                                    </Link>
                                                                </li>
                                                                <li className="list-inline-item me-3">
                                                                    <Link to="#" className="text-muted">
                                                                        <i className="bx bx-like align-middle text-muted me-1"></i> 12 Like
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-group">
                                                                    <div className="avatar-group-item">
                                                                        <Link to="#" className="d-inline-block">
                                                                            <img src={avatar4} alt="" className="rounded-circle avatar-sm" />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="avatar-group-item">
                                                                        <Link to="#" className="d-inline-block">
                                                                            <img src={avatar5} alt="" className="rounded-circle avatar-sm" />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="avatar-group-item">
                                                                        <Link to="#" className="d-inline-block">
                                                                            <img src={avatar7} alt="" className="rounded-circle avatar-sm" />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="avatar-group-item">
                                                                        <Link to="#" className="d-inline-block">
                                                                            <img src={avatar6} alt="" className="rounded-circle avatar-sm" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="ms-2">
                                                                    <button type="button" className="btn btn-outline-primary btn-sm waves-effect">Share <i className="bx bx-share-alt align-middle ms-1"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                    </TabPane>
                                </TabContent>
                            </Card>

                            <Card>
                                <div className="p-4 pb-0">
                                    <h5 className="card-title mb-0">Team Members</h5>
                                </div>

                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table align-middle table-nowrap mb-0">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: "50px" }}><img src={avatar2} className="rounded-circle avatar-sm" alt="" /></td>
                                                    <td>
                                                        <h5 className="font-size-14 m-0"><Link to="#" className="text-dark">Daniel Canales</Link></h5>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="badge bg-soft-primary text-primary font-size-13">Frontend</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><img src={avatar1} className="rounded-circle avatar-sm" alt="" /></td>
                                                    <td>
                                                        <h5 className="font-size-14 m-0"><Link to="#" className="text-dark">Jennifer Walker</Link></h5>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="badge bg-soft-primary text-primary font-size-13">UI / UX</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="avatar-sm">
                                                            <span className="avatar-title rounded-circle bg-primary text-white font-size-14">
                                                                C
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-size-14 m-0"><Link to="#" className="text-dark">Carl Mackay</Link></h5>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="badge bg-soft-primary text-primary font-size-13">Backend</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><img src={avatar4} className="rounded-circle avatar-sm" alt="" /></td>
                                                    <td>
                                                        <h5 className="font-size-14 m-0"><Link to="#" className="text-dark">Janice Cole</Link></h5>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="badge bg-soft-primary text-primary font-size-13">Frontend</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="avatar-sm">
                                                            <span className="avatar-title rounded-circle bg-primary text-white font-size-14">
                                                                T
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-size-14 m-0"><Link to="#" className="text-dark">Tony Brafford</Link></h5>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="badge bg-soft-primary text-primary font-size-13">Backend</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default PagesProfile;
