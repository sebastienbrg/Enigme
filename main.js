import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "./Layout"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {greenA400} from 'material-ui/styles/colors';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

 const muiTheme = getMuiTheme({
 	floatingActionButton:
 	{
 		secondaryColor: greenA400
 	}
  
});

const App = () => (
    <Layout />
);
 
ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Layout />
  </MuiThemeProvider>,
  document.getElementById('app')
);