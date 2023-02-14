import React from "react";
import NavBar from "./components/ui/navBar";
import Users from "./components/layouts/users";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./components/layouts/main";
import Login from "./components/layouts/login";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./components/layouts/logOut";
import AppLoader from "./components/ui/hoc/appLoader";

export default function App() {
  return (
    <>
      <AppLoader>
        <NavBar />

        <Switch>
          <ProtectedRoute path="/users/:userId?/:edit?" component={Users}/>
          <Route path="/login/:type?" component={Login}/>
          <Route path="/logout" component={LogOut}/>
          <Route exact path="/" component={Main}/>
          <Redirect to="/" />
        </Switch>
      </AppLoader>

      <ToastContainer />
    </>
  );
}
