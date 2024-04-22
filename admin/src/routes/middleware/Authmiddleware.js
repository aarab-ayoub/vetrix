import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import VerticalLayout from "components/VerticalLayout";
import HorizontalLayout from "components/HorizontalLayout";

//constants
import { layoutTypes } from "../../constants/layout";

const Authmiddleware = (props) => {

  const { layoutType } = useSelector(state => ({
    layoutType: state.Layout.layoutType,
  }));

  const getLayout = (layoutType) => {
    let Layout = VerticalLayout;
    switch (layoutType) {
      case layoutTypes.VERTICAL:
        Layout = VerticalLayout;
        break;
      case layoutTypes.HORIZONTAL:
        Layout = HorizontalLayout;
        break;
      default:
        break;
    }
    return Layout;
  };

  const Layout = getLayout(layoutType);

  if (!localStorage.getItem("authUser")) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }

  return (
    <React.Fragment>
      <Layout>{props.children}</Layout>
    </React.Fragment>);
};

export default Authmiddleware;
