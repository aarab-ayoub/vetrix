import React from "react";

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiGrid = () => {
  document.title = "Grid | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="UI Elements" breadcrumbItem="Grid" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Grid options</CardTitle>
                  <p className="card-title-desc">
                    See how aspects of the Bootstrap grid system work across
                    multiple devices with a handy table.
                  </p>

                  <div className="table-responsive">
                    <table className="table table-bordered table-striped mb-0">
                      <thead className="text-center">
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">
                            xs<br />
                            <span className="fw-normal">&lt;576px</span>
                          </th>
                          <th scope="col">
                            sm<br />
                            <span className="fw-normal">≥576px</span>
                          </th>
                          <th scope="col">
                            md<br />
                            <span className="fw-normal">≥768px</span>
                          </th>
                          <th scope="col">
                            lg<br />
                            <span className="fw-normal">≥992px</span>
                          </th>
                          <th scope="col">
                            xl<br />
                            <span className="fw-normal">≥1200px</span>
                          </th>
                          <th scope="col">
                            xxl<br />
                            <span className="fw-normal">≥1400px</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="text-nowrap" scope="row">Grid behavior</th>
                          <td colSpan="2">Horizontal at all times</td>
                          <td colSpan="4">Collapsed to start, horizontal above breakpoints</td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">Max container width</th>
                          <td>None (auto)</td>
                          <td>540px</td>
                          <td>720px</td>
                          <td>960px</td>
                          <td>1140px</td>
                          <td>1320px</td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">Class prefix</th>
                          <td><code>.col-</code></td>
                          <td><code>.col-sm-</code></td>
                          <td><code>.col-md-</code></td>
                          <td><code>.col-lg-</code></td>
                          <td><code>.col-xl-</code></td>
                          <td><code>.col-xxl-</code></td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row"># of columns</th>
                          <td colSpan="6">12</td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">Gutter width</th>
                          <td colSpan="6">24px (12px on each side of a column)</td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">Custom gutters</th>
                          <td colSpan="6">Yes</td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">Nestable</th>
                          <td colSpan="6">Yes</td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">Column ordering</th>
                          <td colSpan="6">Yes</td>
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

export default UiGrid;
