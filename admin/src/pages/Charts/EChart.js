import React from "react";
import { Row, Col, Card, CardBody, Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// Charts
import Gauge from "../AllCharts/echart/gaugechart";
import Line from "../AllCharts/echart/linechart";
import LineBar from "../AllCharts/echart/linebarchart";
import Doughnut from "../AllCharts/echart/doughnutchart";
import Pie from "../AllCharts/echart/piechart";
import Scatter from "../AllCharts/echart/scatterchart";
import Bubble from "../AllCharts/echart/bubblechart";
import Candlestick from "../AllCharts/echart/candlestickchart";

const EChart = () => {
  document.title = "ECharts | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* Render Breadcrumb */}
          <Breadcrumbs maintitle="Veltrix" title="Charts" breadcrumbItem="ECharts" />
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Line Chart</h4>
                  <div id="line-chart" className="e-chart">
                    <Line />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Mix Line-Bar</h4>
                  <div id="mix-line-bar" className="e-chart">
                    <LineBar />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Doughnut Chart</h4>
                  <div id="doughnut-chart" className="e-chart">
                    <Doughnut />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Pie Chart</h4>
                  <div id="pie-chart" className="e-chart">
                    <Pie />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Scatter Chart</h4>
                  <div id="scatter-chart" className="e-chart">
                    <Scatter />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Bubble Chart</h4>
                  <div id="bubble-chart" className="e-chart">
                    <Bubble />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Candlestick Chart</h4>
                  <div id="candlestick-chart" className="e-chart">
                    <Candlestick />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Gauge Chart</h4>
                  <div id="gauge-chart" className="e-chart">
                    <Gauge />
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

export default EChart;
