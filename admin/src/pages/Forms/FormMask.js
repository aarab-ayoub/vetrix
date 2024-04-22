import React from "react";
import {
  Row,
  Col,
  Form,
  Label,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap";

import Breadcrumbs from "../../components/Common/Breadcrumb";

// Form Mask
import InputMask from "react-input-mask";
import MaterialInput from "@material-ui/core/Input";

const FormMask = () => {

  const ISBN1 = props => (
    <InputMask
      mask="9999-99-99'T'99:99:99"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  );

  const IPV4 = props => (
    <InputMask
      mask="999.999.999.999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  );

  const IPV6 = props => (
    <InputMask
      mask="_@_._"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => <MaterialInput {...inputProps} disableUnderline />}
    </InputMask>
  );

  const TAX = props => (
    <InputMask
      mask="999999999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  );

  const Phone = props => (
    <InputMask
      mask="99-99999999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  );

  const Currency = props => (
    <InputMask
      mask="$ 999,999,999.99"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} prefix="$" type="tel" disableUnderline />
      )}
    </InputMask>
  );

  const Date1 = props => (
    <InputMask
      mask="99/99/9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  );

  const Date2 = props => (
    <InputMask
      mask="99/99/9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
      {inputProps => (
        <MaterialInput {...inputProps} type="tel" disableUnderline />
      )}
    </InputMask>
  );

  document.title = "Form Mask | Veltrix - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="Forms" breadcrumbItem="Form Mask" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4" tag="h4">Example</CardTitle>
                  <Row>
                    <Col md="6">
                      <div className="p-20">
                        <Form action="#">

                          <div className="mb-4">
                            <Label>Date Style 1</Label>
                            <Date1 />
                            <span className="text-muted">
                              e.g. "dd/mm/yyyy"
                            </span>
                          </div>

                          <div className="mb-4">
                            <Label>Date Style 2</Label>
                            <Date2 />
                            <span className="text-muted">
                              e.g. "mm/dd/yyyy"
                            </span>
                          </div>

                          <div className="mb-4">
                            <Label>Date time</Label>
                            <ISBN1 />
                            <span className="text-muted">
                              e.g "yyyy-mm-dd'T'HH:MM:ss"
                            </span>
                          </div>

                          <div className="mb-0">
                            <Label>Currency</Label>
                            <Currency />
                            <span className="text-muted">
                              $ 999,999,999.99
                            </span>
                          </div>
                        </Form>
                      </div>
                    </Col>

                    <Col md="6">
                      <div className="p-20">
                        <Form action="#">
                          <div className="mb-4">
                            <Label>repeat</Label>
                            <TAX />
                            <span className="text-muted">
                              e.g. "999999999"
                            </span>
                          </div>
                          <div className="mb-4">
                            <Label>Mask</Label>
                            <Phone />
                            <span className="text-muted">
                              e.g. "99-9999999"
                            </span>
                          </div>
                          <div className="mb-4">
                            <Label>IP address</Label>
                            <IPV4 />
                            <span className="text-muted">
                              999.999.999.999
                            </span>
                          </div>
                          <div className="mb-0">
                            <Label>Email address::</Label>
                            <IPV6 />
                            <span className="text-muted">
                              _@_._
                            </span>
                          </div>
                        </Form>
                      </div>
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

export default FormMask;
