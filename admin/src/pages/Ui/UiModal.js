import React, { useState } from "react";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Modal,
  Container,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiModal = () => {
  const [modal_standard, setmodal_standard] = useState(false);
  const [modal_large, setmodal_large] = useState(false);
  const [modal_xlarge, setmodal_xlarge] = useState(false);
  const [modal_small, setmodal_small] = useState(false);
  const [modal_center, setmodal_center] = useState(false);
  const [modal_scroll, setmodal_scroll] = useState(false);
  const [modal_fullscreen, setmodal_fullscreen] = useState(false);
  const [modal_backdrop, setmodal_backdrop] = useState(false);

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };

  const tog_standard = () => {
    setmodal_standard(!modal_standard);
    removeBodyCss();
  };

  const tog_fullscreen = () => {
    setmodal_fullscreen(!modal_fullscreen);
    removeBodyCss();
  };

  const tog_backdrop = () => {
    setmodal_backdrop(!modal_backdrop);
    removeBodyCss();
  };

  const tog_large = () => {
    setmodal_large(!modal_large);
    removeBodyCss();
  };

  const tog_xlarge = () => {
    setmodal_xlarge(!modal_xlarge);
    removeBodyCss();
  };

  const tog_small = () => {
    setmodal_small(!modal_small);
    removeBodyCss();
  };

  const tog_center = () => {
    setmodal_center(!modal_center);
    removeBodyCss();
  };

  const tog_scroll = () => {
    setmodal_scroll(!modal_scroll);
    removeBodyCss();
  };
  document.title = "Modals | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="UI Elements" breadcrumbItem="Modals" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Modals Examples</CardTitle>
                  <p className="card-title-desc">
                    Modals are streamlined, but flexible dialog prompts
                    powered by JavaScript. They support a number of use cases
                    from user notification to completely custom content and
                    feature a handful of helpful subcomponents, sizes, and
                    more.
                  </p>

                  <div className="modal bs-example-modal" tabIndex="-1">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Modal title</h5>
                          <button type="button" className="btn-close">
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>One fine body&hellip;</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                          <button type="button" className="btn btn-secondary">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Row>
                    <Col sm={6} md={4} xl={3}>
                      <div className="my-4 text-center">
                        <p className="text-muted">Standard modal</p>
                        <Button color="primary" onClick={tog_standard}> Standard modal </Button>
                        <Modal isOpen={modal_standard} toggle={tog_standard}>
                          <ModalHeader toggle={tog_standard}>Modal Heading</ModalHeader>
                          <ModalBody>
                            <h5>Overflowing text to show scroll behavior</h5>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="secondary" onClick={tog_standard}>
                              Close
                            </Button>{' '}
                            <Button color="primary">
                              Save changes
                            </Button>
                          </ModalFooter>
                        </Modal>
                      </div>
                    </Col>

                    <Col sm={6} md={4} xl={3}>
                      <div className="my-4 text-center">
                        <p className="text-muted">Extra large modal</p>
                        <Button onClick={tog_xlarge} color="primary"> Extra large modal </Button>
                        <Modal isOpen={modal_xlarge} toggle={tog_xlarge} size="xl">
                          <ModalHeader className="mt-0" toggle={tog_xlarge}>Extra large modal</ModalHeader>
                          <ModalBody>
                            <p>Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in,
                              egestas eget quam. Morbi leo risus, porta ac
                              consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.</p>
                            <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor
                              fringilla.</p>
                          </ModalBody>
                        </Modal>
                      </div>
                    </Col>

                    <Col sm={6} md={4} xl={3}>
                      <div className="my-4 text-center">
                        <p className="text-muted">Large modal</p>
                        <Button color="primary" onClick={tog_large}> Large modal </Button>
                      </div>
                      <Modal isOpen={modal_large} toggle={tog_large} size="lg">
                        <ModalHeader className="mt-0" toggle={tog_large}>Large Modal</ModalHeader>
                        <ModalBody>
                          <p>Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.</p>
                          <p>Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.</p>
                          <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor
                            fringilla.</p>
                        </ModalBody>
                      </Modal>
                    </Col>

                    <Col sm={6} md={4} xl={3}>
                      <div className="my-4 text-center">
                        <p className="text-muted">Small modal</p>
                        <Button color="primary" onClick={tog_small}> Small modal </Button>
                      </div>
                      <Modal isOpen={modal_small} toggle={tog_small} size="sm">
                        <ModalHeader className="mt-0" toggle={tog_small}>Small Modal</ModalHeader>
                        <ModalBody>
                          <p>Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.</p>
                          <p>Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.</p>
                          <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor
                            fringilla.</p>
                        </ModalBody>
                      </Modal>
                    </Col>

                    <Col sm={6} md={4} xl={3}>
                      <div className="my-4 text-center">
                        <p className="text-muted">Center modal</p>
                        <Button color="primary" onClick={tog_center}> Center modal </Button>
                      </div>
                      <Modal isOpen={modal_center} toggle={tog_center} centered>
                        <ModalHeader className="mt-0" toggle={tog_center}>Center Modal</ModalHeader>
                        <ModalBody>
                          <p>Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.</p>
                          <p>Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.</p>
                          <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor
                            fringilla.</p>
                        </ModalBody>
                      </Modal>
                    </Col>

                    <Col sm={6} md={4} xl={3}>
                      <div className="my-4 text-center">
                        <p className="text-muted">Scrollable modal</p>
                        <Button color="primary" onClick={tog_scroll}> Scrollable modal </Button>
                      </div>
                      <Modal isOpen={modal_scroll} toggle={tog_scroll} scrollable>
                        <ModalHeader className="mt-0" toggle={tog_scroll}>Scrollable Modal</ModalHeader>
                        <ModalBody>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="secondary" onClick={tog_scroll}>
                            Close
                          </Button>{' '}
                          <Button color="primary">
                            Save changes
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </Col>

                    <Col sm={6} md={4} xl={3}>
                      <div className="my-4 text-center">
                        <p className="text-muted">Static backdrop modal</p>
                        <Button color="primary" onClick={tog_backdrop} > Static backdrop modal </Button>
                      </div>

                      <Modal isOpen={modal_backdrop} toggle={tog_backdrop} id="staticBackdrop" backdrop={false}>
                        <ModalHeader className="mt-0" toggle={tog_backdrop}>Modal title</ModalHeader>
                        <ModalBody>
                          <p>I will not close if you click outside me. Don't even try to press escape key.</p>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="light" onClick={tog_backdrop}>
                            Close
                          </Button>{' '}
                          <Button color="primary">
                            Understood
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </Col>

                    <Col sm={6} md={4} xl={3}>
                      <div className="my-4 text-center">
                        <p className="text-muted">Full Screen</p>
                        <Button color="primary" onClick={tog_fullscreen} > Full Screen Modal </Button>
                      </div>

                      <Modal isOpen={modal_fullscreen} toggle={tog_fullscreen} size="xl" className="modal-fullscreen">
                        <ModalHeader className="mt-0" toggle={tog_fullscreen}>Fullscreen Modal</ModalHeader>
                        <ModalBody>
                          <h5>Overflowing text to show scroll behavior</h5>
                          <p>Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.</p>
                          <p>Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.</p>
                          <p>Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor
                            fringilla.</p>
                          <p>Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.</p>
                          <p>Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Vivamus sagittis lacus vel
                            augue laoreet rutrum faucibus dolor auctor.</p>
                          <p>Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor
                            fringilla.</p>
                          <p>Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.</p>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="secondary" onClick={tog_fullscreen}>
                            Close
                          </Button>{' '}
                          <Button color="primary">
                            Save changes
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UiModal;
