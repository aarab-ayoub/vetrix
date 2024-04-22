import React from "react";
import { Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import BlogGrid from "./BlogGrid";
import RightBar from "../BlogList/RightBar";

const index = props => {
  document.title = "Blog Grid | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs maintitle="Veltrix" title="Blog" breadcrumbItem="Blog Grid" />
          <Row>
            <BlogGrid />
            <RightBar />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default index;
