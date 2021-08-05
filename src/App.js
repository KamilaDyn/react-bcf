import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";

import { Products } from "./modules";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Products />
      </ThemeProvider>
    );
  }
}

export default App;
