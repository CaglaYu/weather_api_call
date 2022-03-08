import React, { useState, useRef } from "react";

import { Navigate as Redirect}   from 'react-router-dom';
import AuthService from "../services/auth.service";


const Logout = () => {
  AuthService.logout();
  const [currentUser, setCurrentUser] = useState(undefined);
  return <Redirect to="/" />;
};
export default Logout;