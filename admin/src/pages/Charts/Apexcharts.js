import React from "react";

// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex";
import BarApexChart from "../AllCharts/apex/barchart";
import AreaChart from "../AllCharts/apex/areachart";
import DonutChart from "../AllCharts/apex/dountchart";
import StackedBarChart from "../AllCharts/apex/stackedbarchart";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Apexchart = () => {
  document.title = "Apex Charts | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Veltrix" title="Charts" breadcrumbItem="Apex Charts" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Line Chart</h4>
                  <LineApexChart />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Bar Chart</h4>
                  <BarApexChart />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Area Chart</h4>

                  <AreaChart />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Donut Chart</h4>

                  <DonutChart />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Stacked bar Chart</h4>

                  <StackedBarChart />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Apexchart;
