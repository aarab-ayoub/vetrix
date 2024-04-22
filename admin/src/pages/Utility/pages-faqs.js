import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Collapse
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import classnames from "classnames";

const PagesFaqs = () => {
  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);
  const [col4, setcol4] = useState(false);
  const [col5, setcol5] = useState(true);
  const [col6, setcol6] = useState(false);
  const [col7, setcol7] = useState(false);
  const [col8, setcol8] = useState(false);

  const t_col1 = () => {
    setcol1(!col1);
    setcol2(false);
    setcol3(false);
    setcol4(false);
  };

  const t_col2 = () => {
    setcol2(!col2);
    setcol1(false);
    setcol3(false);
    setcol4(false);
  };

  const t_col3 = () => {
    setcol3(!col3);
    setcol1(false);
    setcol2(false);
    setcol4(false);
  };

  const t_col4 = () => {
    setcol4(!col4);
    setcol3(false);
    setcol1(false);
    setcol2(false);
  };

  const t_col5 = () => {
    setcol5(!col5);
    setcol6(false);
    setcol7(false);
    setcol8(false);
  };

  const t_col6 = () => {
    setcol6(!col6);
    setcol5(false);
    setcol7(false);
    setcol8(false);
  };

  const t_col7 = () => {
    setcol7(!col7);
    setcol5(false);
    setcol6(false);
    setcol8(false);
  };

  const t_col8 = () => {
    setcol8(!col8);
    setcol7(false);
    setcol5(false);
    setcol6(false);
  };

  document.title = "FAQs | Veltrix - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs maintitle="Veltrix" title="Extra Pages" breadcrumbItem="FAQs" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Row className="justify-content-center mb-5">
                    <Col lg={5}>
                      <div className="text-center faq-title pt-4 pb-4">
                        <div className="pt-3 pb-3">
                          <i className="ti-comments text-primary h3"></i>
                        </div>
                        <h4>Can't find what you are looking for?</h4>
                        <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                        <button type="button" className="btn btn-primary mt-2 me-1 waves-effect waves-light">Email Us</button>
                        <button type="button" className="btn btn-success mt-2 waves-effect waves-light">Send us a tweet</button>
                      </div>
                    </Col>
                  </Row>

                  {/* <!-- end row --> */}

                  <Row className="justify-content-center">
                    <Col lg={5}>
                      <h5 className="font-size-18 mb-4"><i
                        className="ti-agenda text-primary me-2"></i> General Questions
                      </h5>
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <div className="accordion-header" id="headingOne">
                            <button
                              className={classnames(
                                "accordion-button font-size-15 faq",
                                { collapsed: !col1 }
                              )}
                              type="button"
                              onClick={t_col1}
                              style={{ cursor: "pointer" }}
                            >
                              What is Lorem Ipsum?
                            </button>
                          </div>

                          <Collapse isOpen={col1} className="accordion-collapse" id="collapseOne">
                            <div className="accordion-body">
                              <div className="text-muted mb-0">
                                The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item">
                          <div className="accordion-header" id="headingTwo">
                            <button
                              className={classnames(
                                "accordion-button font-size-15 faq",
                                { collapsed: !col2 }
                              )}
                              type="button"
                              onClick={t_col2}
                              style={{ cursor: "pointer" }}
                            >
                              Where does it come from?
                            </button>
                          </div>

                          <Collapse isOpen={col2} className="accordion-collapse">
                            <div className="accordion-body">
                              <div className="text-muted mb-0">
                                Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item">
                          <div className="accordion-header" id="headingThree">
                            <button
                              className={classnames(
                                "accordion-button font-size-15 faq",
                                { collapsed: !col3 }
                              )}
                              type="button"
                              onClick={t_col3}
                              style={{ cursor: "pointer" }}
                            >
                              Why do we use it?
                            </button>
                          </div>
                          <Collapse isOpen={col3} className="accordion-collapse">
                            <div className="accordion-body">
                              <div className="text-muted mb-0">
                                If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item">
                          <div className="accordion-header" id="headingFour">
                            <button
                              className={classnames(
                                "accordion-button font-size-15 faq",
                                { collapsed: !col4 }
                              )}
                              type="button"
                              onClick={t_col4}
                              style={{ cursor: "pointer" }}
                            >
                              Where can I get some?
                            </button>
                          </div>
                          <Collapse isOpen={col4} className="accordion-collapse">
                            <div className="accordion-body">
                              <div className="text-muted mb-0">
                                Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar
                              </div>
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </Col>

                    <Col className="offset lg-1" lg={{
                      offset: 1,
                      size: 5
                    }}>
                      <h5 className="font-size-18 mb-4"><i className="ti-bookmark-alt text-primary me-2"></i> Pricing & Plans</h5>
                      <div className="accordion" id="accordionExampleTwo">
                        <div className="accordion-item">
                          <div className="accordion-header" id="headingFive">
                            <button
                              className={classnames(
                                "accordion-button font-size-15 faq",
                                { collapsed: !col5 }
                              )}
                              type="button"
                              onClick={t_col5}
                              style={{ cursor: "pointer" }}
                            >
                              Where can I get some?
                            </button>
                          </div>

                          <Collapse isOpen={col5} className="accordion-collapse" id="collapseOne">
                            <div className="accordion-body">
                              <div className="text-muted mb-0">
                                The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item">
                          <div className="accordion-header" id="headingSix">
                            <button
                              className={classnames(
                                "accordion-button font-size-15 faq",
                                { collapsed: !col6 }
                              )}
                              type="button"
                              onClick={t_col6}
                              style={{ cursor: "pointer" }}
                            >
                              Why do we use it?
                            </button>
                          </div>

                          <Collapse isOpen={col6} className="accordion-collapse">
                            <div className="accordion-body">
                              <div className="text-muted mb-0">
                                Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item">
                          <div className="accordion-header" id="headingSeven">
                            <button
                              className={classnames(
                                "accordion-button font-size-15 faq",
                                { collapsed: !col7 }
                              )}
                              type="button"
                              onClick={t_col7}
                              style={{ cursor: "pointer" }}
                            >
                              Where does it come from?
                            </button>
                          </div>
                          <Collapse isOpen={col7} className="accordion-collapse">
                            <div className="accordion-body">
                              <div className="text-muted mb-0">
                                If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item">
                          <div className="accordion-header" id="headingEight">
                            <button
                              className={classnames(
                                "accordion-button font-size-15 faq",
                                { collapsed: !col8 }
                              )}
                              type="button"
                              onClick={t_col8}
                              style={{ cursor: "pointer" }}
                            >
                              What is Lorem Ipsum?
                            </button>
                          </div>
                          <Collapse isOpen={col8} className="accordion-collapse">
                            <div className="accordion-body">
                              <div className="text-muted mb-0">
                                Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar
                              </div>
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment >
  );
};

export default PagesFaqs;
