import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'store';
import {
  Products,
  Profile,
  AddNewProduct,
  EditProduct,
  AllProducts,
  SignUp,
  SearchProducts,
  CartWithProductsList,
  AddressDetails,
} from './modules';
import { routes } from './config/routes';
import MainTemplate from './views/MainTemplate/MainTemplate';
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MainTemplate>
            <Switch>
              <Route exact path={routes.home} component={Products} />
              <Route exact path={routes.profile} component={Profile} />
              <Route
                exact
                path={routes.addNewProduct}
                component={AddNewProduct}
              ></Route>
              <Route exact path={routes.editProduct} component={EditProduct} />
              <Route exact path={routes.products} component={AllProducts} />
              <Route exact path={routes.signup} component={SignUp} />
              <Route
                exact
                path={routes.searchProducts}
                component={SearchProducts}
              />
              <Route
                exact
                path={routes.cartList}
                component={CartWithProductsList}
              />
              <Route
                exact
                path={routes.addressDetails}
                component={AddressDetails}
              />
            </Switch>
          </MainTemplate>
        </Router>
      </Provider>
    );
  }
}

export default App;
