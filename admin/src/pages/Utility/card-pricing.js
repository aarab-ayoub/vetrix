import PropTypes from 'prop-types'
import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col } from "reactstrap"

const CardPricing = props => {
  return (
    <React.Fragment>
      <Col xl="3" md="6">
        <Card className="pricing-box">
          <CardBody className="p-4">
            <div className="d-flex mt-2">
              <div className="flex-shrink-0 align-self-center">
                <i className={props.pricing.icon + " h2"}></i>
              </div>
              <div className="flex-grow-1 ms-auto text-end">
                <h4>{props.pricing.title}</h4>
                <p className="text-muted mb-0">{props.pricing.description}</p>
              </div>
            </div>
            <div className="pricing-features mt-5 pt-2">
              {props.pricing.features.map((feature, key) => (
                <p key={"_feature_" + key}>
                  <i className={feature.icon + " text-primary me-2"} />{" "}
                  {feature.title}
                </p>
              ))}
            </div>
            <div className="text-center mt-5">
              <h1 className="mb-0">
                <sup>
                  <small>$</small>
                </sup>
                {props.pricing.price}/<span className="font-size-16">{props.pricing.duration}</span>
              </h1>
            </div>
            <div className="d-grid mt-5">
              <Link
                to="#"
                className="btn btn-primary btn-block waves-effect waves-light"
              >
                Sign up Now
              </Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

CardPricing.propTypes = {
  pricing: PropTypes.object
}

export default CardPricing
