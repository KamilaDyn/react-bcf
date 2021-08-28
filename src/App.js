import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
import { Products } from "./modules";
import { AuthProvider } from "./loginProvider";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Products />
        </AuthProvider>
      </ThemeProvider>
    );
  }
}

export default App;
