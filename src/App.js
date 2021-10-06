import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./loginProvider";
import { Products, Profile, AddNewProducts } from "./pages";
import { routes } from "./config/routes";
import MainTemplate from "./views/MainTemplate/MainTemplate";
import { ProductProvider } from "./productProvider";
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
                <Route
                  exact
                  path={routes.addNewProducts}
                  component={AddNewProducts}
                ></Route>
              </Switch>
            </MainTemplate>
          </ProductProvider>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
