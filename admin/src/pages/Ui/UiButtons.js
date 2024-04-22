import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col, Row, Card, CardBody, Container,
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiButtons = () => {
  const [radio1, setradio1] = useState(true);
  const [radio2, setradio2] = useState(false);
  const [radio3, setradio3] = useState(false);
  const [drp_link, setdrp_link] = useState(false);

  document.title = "Button | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="UI Elements" breadcrumbItem="Buttons" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Examples</h4>
                  <p className="card-title-desc">
                    Reactstarp includes six predefined button styles, each
                    serving its own semantic purpose.
                  </p>
                  <div className="button-items">
                    <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                    >
                      Primary
                    </Button>{" "}
                    <Button
                      color="secondary"
                      className="btn btn-secondary waves-effect"
                    >
                      Secondary
                    </Button>{" "}
                    <Button
                      color="success"
                      className="btn btn-success waves-effect waves-light"
                    >
                      Success
                    </Button>{" "}
                    <Button
                      color="info"
                      className="btn btn-info waves-effect waves-light"
                    >
                      Info
                    </Button>{" "}
                    <Button
                      color="warning"
                      className="btn btn-warning waves-effect waves-light"
                    >
                      Warning
                    </Button>{" "}
                    <Button
                      color="danger"
                      className="btn btn-danger waves-effect waves-light"
                    >
                      Danger
                    </Button>{" "}
                    <Button
                      color="dark"
                      className="btn btn-dark waves-effect waves-light"
                    >
                      Dark
                    </Button>{" "}
                    <Button color="link" className="btn btn-link waves-effect">
                      Link
                    </Button>{" "}
                    <Button
                      color="light"
                      className="btn btn-light waves-effect"
                    >
                      Light
                    </Button>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Outline buttons</h4>
                  <p className="card-title-desc">
                    Replace the default modifier classes with the{" "}
                    <code className="highlighter-rouge">.btn-outline-* </code> ones to
                    remove all background images and colors on any button.
                  </p>
                  <div className="button-items">
                    <Button
                      color="primary"
                      outline
                      className="waves-effect waves-light"
                    >
                      Primary
                    </Button>{" "}
                    <Button color="secondary" outline className="waves-effect">
                      Secondary
                    </Button>{" "}
                    <Button
                      color="success"
                      outline
                      className="waves-effect waves-light"
                    >
                      Success
                    </Button>{" "}
                    <Button
                      color="info"
                      outline
                      className="waves-effect waves-light"
                    >
                      Info
                    </Button>{" "}
                    <Button
                      color="warning"
                      outline
                      className="waves-effect waves-light"
                    >
                      Warning
                    </Button>{" "}
                    <Button
                      color="danger"
                      outline
                      className="waves-effect waves-light"
                    >
                      Danger
                    </Button>{" "}
                    <Button
                      color="dark"
                      outline
                      className="waves-effect waves-light"
                    >
                      Dark
                    </Button>{" "}
                    <Button color="light" outline className="waves-effect">
                      Light
                    </Button>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Button tags</h4>
                  <p className="card-title-desc ">
                    The <code className="highlighter-rouge">.btn </code>
                    classes are designed to be used with the{" "}
                    <code className="highlighter-rouge">
                      &lt;button&gt;
                    </code>{" "}
                    element. However, you can also use these classes on{" "}
                    <code className="highlighter-rouge">&lt;a&gt;</code> or{" "}
                    <code className="highlighter-rouge">&lt;input&gt;</code>{" "}
                    elements (though some browsers may apply a slightly
                    different rendering).
                  </p>

                  <div className="button-items">
                    <Link
                      className="btn btn-primary waves-effect waves-light"
                      to="#"
                      role="button"
                    >
                      Link
                    </Link>{" "}
                    <Button
                      color="success"
                      className="btn btn-success waves-effect waves-light"
                      type="submit"
                    >
                      Button
                    </Button>{" "}
                    <input
                      className="btn btn-info"
                      type="button"
                      value="Input"
                    />{" "}
                    <input
                      className="btn btn-danger"
                      type="submit"
                      value="Submit"
                    />{" "}
                    <input
                      className="btn btn-warning"
                      type="reset"
                      value="Reset"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Sizes</h4>
                  <p className="card-title-desc">
                    Fancy larger or smaller buttons? Add
                    <code className="highlighter-rouge">.btn-lg</code> or{" "}
                    <code className="highlighter-rouge">.btn-sm</code> for
                    additional sizes.
                  </p>

                  <div className="button-items">
                    <Button
                      color="primary"
                      className="btn btn-primary btn-lg waves-effect waves-light"
                    >
                      Large button
                    </Button>{" "}
                    <Button
                      color="secondary"
                      className="btn btn-secondary btn-lg waves-effect"
                    >
                      Large button
                    </Button>{" "}
                    <Button
                      color="primary"
                      className="btn btn-primary btn-sm waves-effect waves-light"
                    >
                      Small button
                    </Button>{" "}
                    <Button
                      color="secondary"
                      className="btn btn-secondary btn-sm waves-effect"
                    >
                      Small button
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Block Buttons</h4>
                  <p className="card-title-desc ">
                    Create block level buttons—those that span the full width of
                    a parent—by adding{" "}
                    <code className="highlighter-rouge">.btn-block</code>.
                  </p>

                  <div className="button-items">
                    <div className="d-grid">
                      <Button
                        color="primary"
                        className="btn btn-primary btn-lg w-100 waves-effect waves-light"
                      >
                        Block level button
                      </Button>{" "}
                      <Button
                        color="secondary"
                        className="btn btn-secondary btn-sm w-100 waves-effect mt-2"
                      >
                        Block level button
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Toggle states</h4>
                  <p className="card-title-desc ">
                    Add{" "}
                    <code className="highlighter-rouge">
                      data-toggle="button"
                    </code>
                    to toggle a button’s{" "}
                    <code className="highlighter-rouge">active</code>
                    state. If you’re pre-toggling a button, you must manually
                    add the <code className="highlighter-rouge">
                      .active
                    </code>{" "}
                    className
                    <strong>and</strong>{" "}
                    <code className="highlighter-rouge">
                      aria-pressed="true"
                    </code>{" "}
                    to the
                    <code className="highlighter-rouge">&lt;button&gt;</code>.
                  </p>

                  <div className="button-items">
                    <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                      data-toggle="button"
                      aria-pressed="false"
                    >
                      Single toggle
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Checkbox buttons</h4>
                  <p className="card-title-desc">
                    Bootstrap’s{" "}
                    <code className="highlighter-rouge">.button</code> styles
                    can be applied to other elements, such as{" "}
                    <code className="highlighter-rouge">&lt;label&gt;</code>s,
                    to provide checkbox or radio style button toggling. Add{" "}
                    <code className="highlighter-rouge">
                      data-toggle="buttons"
                    </code>{" "}
                    to a<code className="highlighter-rouge">.btn-group</code>{" "}
                    containing those modified buttons to enable toggling in
                    their respective styles.
                  </p>
                  <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                    <input type="checkbox" className="btn-check" id="btncheck1" defaultChecked />
                    <label className="btn btn-secondary" htmlFor="btncheck1">Checked-1</label>

                    <input type="checkbox" className="btn-check" id="btncheck2" />
                    <label className="btn btn-secondary" htmlFor="btncheck2">Checked-2</label>

                    <input type="checkbox" className="btn-check" id="btncheck3" />
                    <label className="btn btn-secondary" htmlFor="btncheck3">Checked-3</label>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Radio buttons</h4>
                  <p className="card-title-desc">
                    Bootstrap’s{" "}
                    <code className="highlighter-rouge">.button</code> styles
                    can be applied to other elements, such as{" "}
                    <code className="highlighter-rouge">&lt;label&gt;</code>s,
                    to provide checkbox or radio style button toggling. Add{" "}
                    <code className="highlighter-rouge">
                      data-toggle="buttons"
                    </code>{" "}
                    to a<code className="highlighter-rouge">.btn-group</code>{" "}
                    containing those modified buttons to enable toggling in
                    their respective styles.
                  </p>
                  <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                    <input type="checkbox" className="btn-check" id="btncheck4" />
                    <label className="btn btn-primary active" htmlFor="btncheck4">Active</label>

                    <input type="checkbox" className="btn-check" id="btncheck5" />
                    <label className="btn btn-primary" htmlFor="btncheck5">Radio</label>

                    <input type="checkbox" className="btn-check" id="btncheck6" />
                    <label className="btn btn-primary" htmlFor="btncheck6">Radio</label>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Button group</h4>
                  <p className="card-title-desc">
                    Wrap a series of buttons with{" "}
                    <code className="highlighter-rouge">.btn</code> in{" "}
                    <code className="highlighter-rouge">.btn-group</code>.
                  </p>

                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button color="secondary" className="btn btn-secondary">
                      Left
                    </Button>
                    <Button color="secondary" className="btn btn-secondary">
                      Middle
                    </Button>
                    <Button color="secondary" className="btn btn-secondary">
                      Right
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Button toolbar</h4>
                  <p className="card-title-desc">
                    Combine sets of button groups into button toolbars for more
                    complex components. Use utility classes as needed to space
                    out groups, buttons, and more.
                  </p>

                  <div
                    className="btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group me-2"
                      role="group"
                      aria-label="First group"
                    >
                      <Button color="secondary" className="btn btn-secondary">
                        1
                      </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        2
                      </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        3
                      </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        4
                      </Button>
                    </div>
                    <div
                      className="btn-group me-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <Button color="secondary" className="btn btn-secondary">
                        5
                      </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        6
                      </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        7
                      </Button>
                    </div>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Third group"
                    >
                      <Button color="secondary" className="btn btn-secondary">
                        8
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Sizing</h4>
                  <p className="card-title-desc">
                    Instead of applying button sizing classes to every button in
                    a group, just add{" "}
                    <code className="highlighter-rouge">.btn-group-*</code> to
                    each <code className="highlighter-rouge">.btn-group</code>,
                    including each one when nesting multiple groups.
                  </p>

                  <ButtonGroup size="lg">
                    <Button color="secondary"> Left </Button>
                    <Button color="secondary"> Middle </Button>
                    <Button color="secondary"> Right </Button>
                  </ButtonGroup>

                  <br />

                  <ButtonGroup className="mt-2">
                    <Button color="secondary"> Left </Button>
                    <Button color="secondary"> Middle </Button>
                    <Button color="secondary"> Right </Button>
                  </ButtonGroup>

                  <br />

                  <ButtonGroup size="sm" className="mt-2">
                    <Button color="secondary"> Left </Button>
                    <Button color="secondary"> Middle </Button>
                    <Button color="secondary"> Right </Button>
                  </ButtonGroup>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Vertical variation</h4>
                  <p className="card-title-desc">
                    Make a set of buttons appear vertically stacked rather than
                    horizontally. Split button dropdowns are not supported here.
                  </p>

                  <div
                    className="btn-group-vertical"
                    role="group"
                    aria-label="Vertical button group"
                  >
                    <Button
                      type="button"
                      color="secondary"
                      className="btn btn-secondary"
                    >
                      Button
                    </Button>

                    <ButtonDropdown
                      isOpen={drp_link}
                      toggle={() => {
                        setdrp_link(!drp_link);
                      }}
                    >
                      <DropdownToggle caret color="secondary">
                        Dropdown <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Dropdown link</DropdownItem>
                        <DropdownItem>Dropdown link</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>

                    <Button
                      color="secondary"
                      type="button"
                      className="btn btn-secondary"
                    >
                      Button
                    </Button>
                    <Button
                      color="secondary"
                      type="button"
                      className="btn btn-secondary"
                    >
                      Button
                    </Button>
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

export default UiButtons;
