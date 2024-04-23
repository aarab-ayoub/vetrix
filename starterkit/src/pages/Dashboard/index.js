import PropTypes from "prop-types"
import React, { useState } from "react"

import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap"

import "chartist/dist/scss/chartist.scss"

//i18n
import { withTranslation } from "react-i18next"

const Dashboard = props => {
  
  document.title = "Dashboard | Veltrix - React Admin & Dashboard Template"


  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
  };
  
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Dashboard</h6>
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">
                    Welcome to Veltrix Dashboard
                  </li>
                </ol>
              </Col>

              <Col md="4">
                <div className="float-end d-none d-md-block">
                  <Dropdown isOpen={menu} toggle={toggle}>
                    <DropdownToggle
                      color="primary"
                      className="btn btn-primary dropdown-toggle waves-effect waves-light"
                    >
                      <i className="mdi mdi-cog me-2"></i> Settings
                    </DropdownToggle>
                    <DropdownMenu end>
                      <DropdownItem tag="a" href="#">
                        Action
                      </DropdownItem>
                      <DropdownItem tag="a" href="#">
                        Another action
                      </DropdownItem>
                      <DropdownItem tag="a" href="#">
                        Something else here
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a" href="#">
                        Separated link
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
}

export default withTranslation()(Dashboard)
