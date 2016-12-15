import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "./Layout"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
 
const App = () => (
    <Layout />
);
 
ReactDOM.render(
  <MuiThemeProvider>
    <Layout />
  </MuiThemeProvider>,
  document.getElementById('app')
);