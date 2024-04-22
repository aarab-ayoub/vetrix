import PropTypes from 'prop-types';
import React, { useEffect } from "react";
import withRouter from 'components/Common/withRouter';

import { logoutUser } from "../../store/actions";
//redux
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Logout = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(logoutUser(navigate));
  }, [dispatch,navigate]);

  return <></>;
};

Logout.propTypes = {
  history: PropTypes.object
};


export default withRouter(Logout);
