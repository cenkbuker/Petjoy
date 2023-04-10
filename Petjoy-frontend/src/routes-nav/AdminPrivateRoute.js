import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../login/UserContext";

function AdminPrivateRoute({ exact, path, children }) {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  if (!currentUser.isAdmin) {
    return <Redirect to="/products" />;
  }
  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default AdminPrivateRoute;
