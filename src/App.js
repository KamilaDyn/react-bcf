import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Products, Profile } from "./modules";
import { routes } from "./config/routes";
import MainTemplate from "./views/MainTemplate/MainTemplate";
import { AuthProvider } from "./provider";
import { ProductProvider } from "./modules/productProvider";
class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <ProductProvider>
            <MainTemplate>
              <Switch>
                <Route exact path={routes.home} component={Products}></Route>
                <Route exact path={routes.profile} component={Profile}></Route>
              </Switch>
            </MainTemplate>
          </ProductProvider>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
