import React, { useState } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown,
  CardTitle,
  Container,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiDropdown = () => {
  const [singlebtn, setSinglebtn] = useState(false);
  const [singlebtn1, setSinglebtn1] = useState(false);
  const [btnprimary1, setBtnprimary1] = useState(false);
  const [btnsecondary1, setBtnsecondary1] = useState(false);
  const [btnsuccess1, setBtnsuccess1] = useState(false);
  const [btnInfo1, setBtnInfo1] = useState(false);
  const [btnWarning1, setBtnWarning1] = useState(false);
  const [btnDanger1, setBtnDanger1] = useState(false);
  const [drp_primary1, setDrp_primary1] = useState(false);
  const [drp_secondary1, setDrp_secondary1] = useState(false);
  const [drp_success1, setDrp_success1] = useState(false);
  const [drp_info1, setDrp_info1] = useState(false);
  const [drp_warning1, setDrp_warning1] = useState(false);
  const [drp_danger1, setDrp_danger1] = useState(false);
  const [drp_secondary, setDrp_secondary] = useState(false);
  const [drp_secondary_lg, setDrp_secondary_lg] = useState(false);
  const [drp_secondary_sm, setDrp_secondary_sm] = useState(false);
  const [drp_secondary_sm1, setDrp_secondary_sm1] = useState(false);
  const [dropup1, setDropup1] = useState(false);
  const [drp_up11, setDrp_up11] = useState(false);
  const [drop_align, setDrop_align] = useState(false);
  const [info_dropup1, setInfo_dropup1] = useState(false);
  const [infodrp_up11, setInfodrp_up11] = useState(false);
  const [info_dropup111, setInfo_dropup111] = useState(false);
  const [infodrp_up1111, setInfodrp_up1111] = useState(false);
  const [left_align, setleft_align] = useState(false);
  const [right_align, setright_align] = useState(false);

  document.title = "Dropdowns | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="UI Elements" breadcrumbItem="Dropdowns" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Single button dropdowns</CardTitle>
                  <p className="card-title-desc">
                    Any single <code className="highlighter-rouge">.btn</code>{" "}
                    can be turned into a dropdown toggle with some markup
                    changes. Here’s how you can put them to work with either{" "}
                    <code className="highlighter-rouge">&lt;button&gt;</code>{" "}
                    elements:
                  </p>
                  <Row>
                    <Col sm={6}>
                      <Dropdown
                        isOpen={singlebtn}
                        toggle={() => setSinglebtn(!singlebtn)}
                      >
                        <DropdownToggle className="btn btn-secondary" caret>
                          Dropdown button{" "}
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col sm={6}>
                      <Dropdown
                        isOpen={singlebtn1}
                        toggle={() => setSinglebtn1(!singlebtn1)}
                        className="mt-4 mt-sm-0"
                      >
                        <DropdownToggle className="btn btn-secondary" caret>
                          Dropdown Link <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Variant</CardTitle>
                  <p className="card-title-desc">
                    The best part is you can do this with any button variant,
                    too:
                  </p>

                  <div className="d-flex gap-2 flex-wrap">
                    <div className="btn-group">
                      <Dropdown
                        isOpen={btnprimary1}
                        toggle={() => setBtnprimary1(!btnprimary1)}
                      >
                        <DropdownToggle tag="button" className="btn btn-primary">
                          Primary <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <div className="dropdown-divider"></div>
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>{" "}
                    </div>
                    <div className="btn-group">
                      <Dropdown
                        isOpen={btnsecondary1}
                        toggle={() => setBtnsecondary1(!btnsecondary1)}
                      >
                        <DropdownToggle tag="button" className="btn btn-secondary">
                          Secondary <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <div className="dropdown-divider"></div>
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>{" "}
                    </div>
                    <div className="btn-group">
                      <Dropdown
                        isOpen={btnsuccess1}
                        toggle={() => setBtnsuccess1(!btnsuccess1)}
                      >
                        <DropdownToggle tag="button" className="btn btn-success">
                          Success <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <div className="dropdown-divider"></div>
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className="btn-group">
                      <Dropdown
                        isOpen={btnInfo1}
                        toggle={() => setBtnInfo1(!btnInfo1)}
                      >
                        <DropdownToggle tag="button" className="btn btn-info">
                          Info <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <div className="dropdown-divider"></div>
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className="btn-group">
                      <Dropdown
                        isOpen={btnWarning1}
                        toggle={() => setBtnWarning1(!btnWarning1)}
                      >
                        <DropdownToggle tag="button" className="btn btn-warning">
                          Warning <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <div className="dropdown-divider"></div>
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className="btn-group">
                      <Dropdown
                        isOpen={btnDanger1}
                        toggle={() => setBtnDanger1(!btnDanger1)}
                      >
                        <DropdownToggle tag="button" className="btn btn-danger">
                          Danger <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <div className="dropdown-divider"></div>
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Split button dropdowns</CardTitle>
                  <p className="card-title-desc">
                    The best part is you can do this with any button variant,
                    too:
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_primary1}
                        toggle={() => setDrp_primary1(!drp_primary1)}
                      >
                        <Button id="caret" color="primary">
                          Primary
                        </Button>
                        <DropdownToggle caret color="primary" className="dropdown-toggle-split">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_secondary1}
                        toggle={() => setDrp_secondary1(!drp_secondary1)}
                      >
                        <Button id="caret" color="secondary">
                          Secondary
                        </Button>
                        <DropdownToggle caret color="secondary" className="dropdown-toggle-split">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_success1}
                        toggle={() => setDrp_success1(!drp_success1)}
                      >
                        <Button id="caret" color="success">
                          Success
                        </Button>
                        <DropdownToggle caret color="success" className="dropdown-toggle-split">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_info1}
                        toggle={() => setDrp_info1(!drp_info1)}
                      >
                        <Button id="caret" color="info">
                          Info
                        </Button>
                        <DropdownToggle caret color="info" className="dropdown-toggle-split">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>


                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_warning1}
                        toggle={() => setDrp_warning1(!drp_warning1)}
                      >
                        <Button id="caret" color="warning">
                          Warning
                        </Button>
                        <DropdownToggle caret color="warning" className="dropdown-toggle-split">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_danger1}
                        toggle={() => setDrp_danger1(!drp_danger1)}
                      >
                        <Button id="caret" color="danger">
                          Danger
                        </Button>
                        <DropdownToggle caret color="danger" className="dropdown-toggle-split">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Sizing</CardTitle>
                  <p className="card-title-desc mb-2">
                    {" "}
                    Button dropdowns work with buttons of all sizes, including
                    default and split dropdown buttons.
                  </p>
                  <div className="">
                    <div className="btn-group me-1 mt-2">
                      <ButtonDropdown
                        isOpen={drp_secondary}
                        toggle={() => setDrp_secondary(!drp_secondary)}
                      >
                        <DropdownToggle
                          caret
                          color="secondary"
                          className="btn btn-secondary btn-lg"
                        >
                          Large button {" "}
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}

                    <div className="btn-group me-1 mt-2">
                      <ButtonDropdown
                        isOpen={drp_secondary_lg}
                        toggle={() => setDrp_secondary_lg(!drp_secondary_lg)}
                      >
                        <Button className="btn btn-secondary btn-lg">
                          Large button
                        </Button>
                        <DropdownToggle
                          caret
                          color="secondary"
                          className="btn btn-secondary btn-lg dropdown-toggle-split"
                        >
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}

                    <div className="btn-group me-1 mt-2">
                      <ButtonDropdown
                        isOpen={drp_secondary_sm}
                        toggle={() => setDrp_secondary_sm(!drp_secondary_sm)}
                      >
                        <DropdownToggle
                          caret
                          color="secondary"
                          className="btn btn-secondary btn-sm"
                        >
                          Small button {" "}
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}

                    <div className="btn-group me-1 mt-2">
                      <ButtonDropdown
                        isOpen={drp_secondary_sm1}
                        toggle={() => setDrp_secondary_sm1(!drp_secondary_sm1)}
                      >
                        <Button className="btn btn-secondary btn-sm">
                          {" "}
                          Small button
                        </Button>
                        <DropdownToggle
                          caret
                          color="secondary"
                          className="btn btn-secondary btn-sm"
                        >
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Dropup variation</CardTitle>
                  <p className="card-title-desc">
                    Trigger dropdown menus above elements by adding{" "}
                    <code className="highlighter-rouge">.dropup</code> to the
                    parent element.
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    <Dropdown
                      className="btn-group dropup"
                      isOpen={dropup1}
                      direction="up"
                      toggle={() => setDropup1(!dropup1)}
                    >
                      <DropdownToggle className="btn btn-secondary">
                        Dropup <i className="mdi mdi-chevron-up" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    <ButtonDropdown
                      direction="up"
                      isOpen={drp_up11}
                      toggle={() => setDrp_up11(!drp_up11)}
                    >
                      <Button id="caret" color="secondary">
                        Split dropup
                      </Button>
                      <DropdownToggle caret color="secondary">
                        <i className="mdi mdi-chevron-up" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Dropleft variation</CardTitle>
                  <p className="card-title-desc">
                    Trigger dropdown menus at the right of the elements by
                    adding <code>.dropleft</code> to the parent element.
                  </p>

                  <div className="d-flex gap-2 flex-wrap">                  
                    <ButtonDropdown
                      direction="left"
                      isOpen={info_dropup111}
                      toggle={() => setInfo_dropup111(!info_dropup111)}
                    >
                      <DropdownToggle caret color="info">
                        <i className="mdi mdi-chevron-left" /> Dropleft
                      </DropdownToggle>                    
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>

                    <ButtonDropdown
                      direction="left"
                      isOpen={infodrp_up1111}
                      toggle={() => setInfodrp_up1111(!infodrp_up1111)}
                    >
                      <DropdownToggle caret color="info">
                        <i className="mdi mdi-chevron-left" />
                      </DropdownToggle>
                      <Button id="caret" color="info">
                        Split dropleft
                      </Button>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Dropright variation</CardTitle>
                  <p className="card-title-desc">
                    Trigger dropdown menus at the right of the elements by
                    adding <code>.dropright</code> to the parent element.
                  </p>

                  <div className="d-flex gap-2 flex-wrap">                   
                    <ButtonDropdown
                      direction="right"
                      isOpen={info_dropup1}
                      toggle={() => setInfo_dropup1(!info_dropup1)}
                    >
                      <DropdownToggle caret color="info">
                          Dropright <i className="mdi mdi-chevron-right" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>

                    <ButtonDropdown
                      direction="right"
                      isOpen={infodrp_up11}
                      toggle={() => setInfodrp_up11(!infodrp_up11)}
                    >
                      <Button id="caret" color="info">
                        Split dropright
                      </Button>
                      <DropdownToggle caret color="info">
                        <i className="mdi mdi-chevron-right" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Menu alignment</CardTitle>
                  <p className="card-title-desc">
                    Add{" "}
                    <code className="highlighter-rouge">
                      .dropdown-menu-right
                    </code>{" "}
                    to a{" "}
                    <code className="highlighter-rouge">.dropdown-menu</code> to
                    right align the dropdown menu.
                  </p>
                  <ButtonDropdown
                    isOpen={drop_align}
                    direction="right"
                    toggle={() => setDrop_align(!drop_align)}
                  >
                    <DropdownToggle
                      caret
                      color="secondary"
                      className="btn btn-secondary"
                    >
                      Menu is right-aligned{" "}
                      <i className="mdi mdi-chevron-down" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-right-custom">
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">

                  <h4 className="card-title">Responsive alignment</h4>
                  <p className="card-title-desc">If you want to use responsive alignment, disable dynamic positioning by adding the <code>data-bs-display="static"</code> attribute and use the responsive variation classes.</p>

                  <div className="d-flex gap-2 flex-wrap">
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={right_align}
                        direction="right"
                        toggle={() => setright_align(!right_align)}
                      >
                        <DropdownToggle
                          caret
                          color="secondary"
                          className="btn btn-secondary"
                        >
                          Left-aligned but right aligned when large screen
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg-end">
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={left_align}
                        direction="left"
                        toggle={() => setleft_align(!left_align)}
                      >
                        <DropdownToggle
                          caret
                          color="secondary"
                          className="btn btn-secondary"
                        >
                          Right-aligned but left aligned when large screen
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end dropdown-menu-lg-start">
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UiDropdown;
