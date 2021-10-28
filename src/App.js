import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import {
  Products,
  Profile,
  AddNewProduct,
  EditProduct,
  AllProducts,
} from "./modules";
import { routes } from "./config/routes";
import MainTemplate from "./views/MainTemplate/MainTemplate";
import { ProductProvider } from "./productProvider";
import { configureStore } from "./loginProvider/store";
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ProductProvider>
            <MainTemplate>
              <Switch>
                <Route exact path={routes.home} component={Products}></Route>
                <Route exact path={routes.profile} component={Profile}></Route>
                <Route
                  exact
                  path={routes.addNewProduct}
                  component={AddNewProduct}
                ></Route>
                <Route
                  exact
                  path={routes.editProduct}
                  component={EditProduct}
                ></Route>
                <Route
                  exact
                  path={routes.products}
                  component={AllProducts}
                ></Route>
              </Switch>
            </MainTemplate>
          </ProductProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
