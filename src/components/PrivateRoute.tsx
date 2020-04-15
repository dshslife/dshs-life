import React from 'react';
import { RouteComponentProps, Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  component: any,
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const {component: Component, ...rest} = props;
  return (
  <Route
  {...rest}
  render={(props) =>
  localStorage.getItem("authToken") ? (

    <Component {...props} />
  ) : (
    <Redirect
    to={{
      pathname: "/login",
      state: { from:props.location }
    }}
    />
  )
}
  />
)
}