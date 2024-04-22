import React, { useState } from "react";
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Tooltip,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Container,
  Spinner,
  Badge,
  UncontrolledPopover,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiGeneral = () => {
  const [popovertop, setpopovertop] = useState(false);
  const [popoverleft, setpopoverleft] = useState(false);
  const [popoverright, setpopoverright] = useState(false);
  const [popoverbottom, setpopoverbottom] = useState(false);
  const [popoverdismiss, setpopoverdismiss] = useState(false);

  const [ttop, setttop] = useState(false);
  const [tbottom, settbottom] = useState(false);
  const [tleft, settleft] = useState(false);
  const [tright, settright] = useState(false);

  document.title = "General | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="UI Elements" breadcrumbItem="General" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Row>
                    <Col lg={6}>
                      <CardTitle className="h4">Badges</CardTitle>
                      <p className="card-title-desc">
                        Add any of the below mentioned modifier classes to
                        change the appearance of a badge.
                      </p>
                      <div className="d-flex flex-wrap gap-2">
                        <Badge color="primary" className="bg-primary">
                          Primary
                        </Badge>{" "}
                        <Badge className="bg-success">
                          Success
                        </Badge>{" "}
                        <Badge className="bg-info">
                          Info
                        </Badge>{" "}
                        <Badge className="bg-warning">
                          Warning
                        </Badge>{" "}
                        <Badge className="bg-danger">
                          Danger
                        </Badge>{" "}
                        <Badge className="bg-dark">
                          Dark
                        </Badge>{" "}
                      </div>
                    </Col>
                    <Col lg={6}>
                      <CardTitle className="h4">Pill badges</CardTitle>
                      <p className="card-title-desc">
                        Use the <code>.rounded-pill</code> modifier className to
                        make badges more rounded (with a larger{" "}
                        <code>border-radius</code>
                        and additional horizontal <code>padding</code>). Useful
                        if you miss the badges from v3.
                      </p>

                      <div className="d-flex flex-wrap gap-2">
                        <Badge color="primary" className="rounded-pill bg-primary">
                          Primary
                        </Badge>{" "}
                        <Badge className="rounded-pill bg-success">
                          Success
                        </Badge>{" "}
                        <Badge className="rounded-pill bg-info">
                          Info
                        </Badge>{" "}
                        <Badge className="rounded-pill bg-warning">
                          Warning
                        </Badge>{" "}
                        <Badge className="rounded-pill bg-danger">
                          Danger
                        </Badge>{" "}
                        <Badge className="rounded-pill bg-dark">
                          Dark
                        </Badge>{" "}
                      </div>

                    </Col>
                  </Row>
                </CardBody>

              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Popovers</CardTitle>
                  <p className="card-title-desc">
                    Add small overlay content, like those found in iOS, to any
                    element for housing secondary information.
                  </p>
                  <div className="button-items">
                    <Button
                      id="Popovertop"
                      color="secondary"
                      onClick={() => {
                        setpopovertop(!popovertop);
                      }}
                    >
                      Popover on top
                    </Button>{" "}
                    <Popover
                      placement="top"
                      isOpen={popovertop}
                      target="Popovertop"
                      toggle={() => {
                        setpopovertop(!popovertop);
                      }}
                    >
                      <PopoverHeader>Popover Title</PopoverHeader>
                      <PopoverBody>
                        Sed posuere consectetur est at lobortis. Aenean eu leo
                        quam. Pellentesque ornare sem lacinia quam venenatis
                        vestibulum.
                      </PopoverBody>
                    </Popover>{" "}
                    <Button
                      id="Popoverright"
                      onClick={() => {
                        setpopoverright(!popoverright);
                      }}
                      color="secondary"
                    >
                      Popover on right
                    </Button>
                    <Popover
                      placement="right"
                      isOpen={popoverright}
                      target="Popoverright"
                      toggle={() => {
                        setpopoverright(!popoverright);
                      }}
                    >
                      <PopoverHeader>Popover Title</PopoverHeader>
                      <PopoverBody>
                        Sed posuere consectetur est at lobortis. Aenean eu leo
                        quam. Pellentesque ornare sem lacinia quam venenatis
                        vestibulum.
                      </PopoverBody>
                    </Popover>{" "}

                    <Button
                      id="Popoverbottom"
                      onClick={() => {
                        setpopoverbottom(!popoverbottom);
                      }}
                      color="secondary"
                    >
                      Popover on bottom
                    </Button>
                    <Popover
                      placement="bottom"
                      isOpen={popoverbottom}
                      target="Popoverbottom"
                      toggle={() => {
                        setpopoverbottom(!popoverbottom);
                      }}
                    >
                      <PopoverHeader>Popover Title</PopoverHeader>
                      <PopoverBody>
                        Sed posuere consectetur est at lobortis. Aenean eu leo
                        quam. Pellentesque ornare sem lacinia quam venenatis
                        vestibulum.
                      </PopoverBody>
                    </Popover>{" "}

                    <Button
                      id="Popoverleft"
                      onClick={() => {
                        setpopoverleft(!popoverleft);
                      }}
                      color="secondary"
                    >
                      Popover on left
                    </Button>
                    <Popover
                      placement="left"
                      isOpen={popoverleft}
                      target="Popoverleft"
                      toggle={() => {
                        setpopoverleft(!popoverleft);
                      }}
                    >
                      <PopoverHeader>Popover Title</PopoverHeader>
                      <PopoverBody>
                        Sed posuere consectetur est at lobortis. Aenean eu leo
                        quam. Pellentesque ornare sem lacinia quam venenatis
                        vestibulum.
                      </PopoverBody>
                    </Popover>{" "}

                    <Button
                      id="Popoverdismiss"
                      className="btn btn-success"
                      onClick={() => {
                        setpopoverdismiss(!popoverdismiss);
                      }}
                    >
                      Dismissible popover
                    </Button>
                    <UncontrolledPopover
                      trigger="focus"
                      target="Popoverdismiss"
                      placement="right"
                    >
                      <PopoverHeader>Dismissible popover</PopoverHeader>
                      <PopoverBody>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                      </PopoverBody>
                    </UncontrolledPopover>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Tooltips</CardTitle>
                  <p className="card-title-desc">
                    Hover over the links below to see tooltips:
                  </p>

                  <div className="button-items">
                    <Tooltip
                      placement="top"
                      isOpen={ttop}
                      target="TooltipTop"
                      toggle={() => {
                        setttop(!ttop);
                      }}
                    >
                      Hello world!
                    </Tooltip>
                    <Tooltip
                      placement="right"
                      isOpen={tright}
                      target="TooltipRight"
                      toggle={() => {
                        settright(!tright);
                      }}
                    >
                      Hello world!
                    </Tooltip>
                    <Tooltip
                      placement="bottom"
                      isOpen={tbottom}
                      target="TooltipBottom"
                      toggle={() => {
                        settbottom(!tbottom);
                      }}
                    >
                      Hello world!
                    </Tooltip>
                    <Tooltip
                      placement="left"
                      isOpen={tleft}
                      target="TooltipLeft"
                      toggle={() => {
                        settleft(!tleft);
                      }}
                    >
                      Hello world!
                    </Tooltip>

                    <button
                      type="button"
                      className="btn btn-primary"
                      id="TooltipTop"
                    >
                      Tooltip on top
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="TooltipRight"
                    >
                      Tooltip on right
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="TooltipBottom"
                    >
                      Tooltip on bottom
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="TooltipLeft"
                    >
                      Tooltip on left
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Pagination</CardTitle>
                  <Row>
                    <Col lg={6}>
                      <h5 className="font-size-16 mt-0">Default Example</h5>
                      <p className="card-title-desc">
                        Pagination links indicate a series of related content
                        exists across multiple pages.
                      </p>

                      <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                          <PaginationLink href="#">Previous</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">Next</PaginationLink>
                        </PaginationItem>
                      </Pagination>

                      <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                          <PaginationLink previous>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink next>
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </Col>

                    <Col lg={6}>
                      <CardTitle className="h4">Disabled and active states</CardTitle>
                      <p className="card-title-desc">
                        Pagination links are customizable for different
                        circumstances. Use <code>.disabled</code> for links that
                        appear un-clickable and <code>.active</code> to indicate
                        the current page.
                      </p>

                      <Pagination aria-label="Page navigation example">
                        <PaginationItem disabled>
                          <PaginationLink href="#" tabIndex="-1">
                            Previous
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem active>
                          <PaginationLink href="#">
                            2 <span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">Next</PaginationLink>
                        </PaginationItem>
                      </Pagination>

                      <Pagination aria-label="Page navigation example">
                        <PaginationItem disabled>
                          <PaginationLink>
                            Previous
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem active>
                          <PaginationLink>
                            2<span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">Next</PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <CardTitle className="h4">Sizing</CardTitle>
                      <p className="card-title-desc">
                        Fancy larger or smaller pagination? Add{" "}
                        <code>.pagination-lg</code> or{" "}
                        <code>.pagination-sm</code> for additional sizes.
                      </p>

                      <Pagination
                        size="lg"
                        aria-label="Page navigation example"
                      >
                        <PaginationItem disabled>
                          <PaginationLink href="#" tabIndex="-1">
                            Previous
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">Next</PaginationLink>
                        </PaginationItem>
                      </Pagination>

                      <Pagination
                        size="sm"
                        aria-label="Page navigation example"
                      >
                        <PaginationItem disabled>
                          <PaginationLink href="#" tabIndex="-1">
                            Previous
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">Next</PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </Col>

                    <Col lg={6}>
                      <CardTitle className="h4">Alignment</CardTitle>
                      <p className="card-title-desc">
                        Change the alignment of pagination components with
                        flexbox utilities.
                      </p>

                      <Pagination
                        aria-label="Page navigation example"
                        listClassName="justify-content-center"
                      >
                        <PaginationItem disabled>
                          <PaginationLink href="#" tabIndex="-1">
                            Previous
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">Next</PaginationLink>
                        </PaginationItem>
                      </Pagination>

                      <Pagination
                        aria-label="Page navigation example"
                        listClassName="justify-content-end"
                      >
                        <PaginationItem disabled>
                          <PaginationLink href="#" tabIndex="-1">
                            Previous
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">Next</PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Border spinner</CardTitle>
                  <p className="card-title-desc">
                    Use the border spinners for a lightweight loading indicator.
                  </p>
                  <div>
                    <Spinner className="ms-2" color="primary" />
                    <Spinner className="ms-2" color="secondary" />
                    <Spinner className="ms-2" color="success" />
                    <Spinner className="ms-2" color="danger" />
                    <Spinner className="ms-2" color="warning" />
                    <Spinner className="ms-2" color="info" />
                    <Spinner className="ms-2" color="light" />
                    <Spinner className="ms-2" color="dark" />
                  </div>
                </CardBody>{" "}
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Growing spinner</CardTitle>
                  <p className="card-title-desc">
                    If you don’t fancy a border spinner, switch to the grow
                    spinner. While it doesn’t technically spin, it does
                    repeatedly grow!
                  </p>
                  <div>
                    <Spinner type="grow" className="ms-2" color="primary" />
                    <Spinner type="grow" className="ms-2" color="secondary" />
                    <Spinner type="grow" className="ms-2" color="success" />
                    <Spinner type="grow" className="ms-2" color="danger" />
                    <Spinner type="grow" className="ms-2" color="warning" />
                    <Spinner type="grow" className="ms-2" color="info" />
                    <Spinner type="grow" className="ms-2" color="light" />
                    <Spinner type="grow" className="ms-2" color="dark" />
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

export default UiGeneral;
