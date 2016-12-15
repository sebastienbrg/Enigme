import React from 'react';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import enigmeStore from './EnigmeStore.js';


export default class SideMenu extends React.Component {

  constructor() 
  {
    super();
    this.state ={
     list : enigmeStore.enigmes
   };
  }


  componentWillMount() 
  {
    
    
  }
  componentWillUnmount() 
  {
    
  }
  
  elementClicked(item)
  {
    enigmeStore.setCurrentEnigme(item);
  }
  getListContent()
  {    
     return this.state.list.map((item) => {
      return ( 
              <ListItem
              primaryText={item.name}            
              initiallyOpen={true}
              key={item.name}
              primaryTogglesNestedList={true}
              onClick={this.elementClicked.bind(this, item)}
              />
              );
      });
  }

  render() {
    let list = this.getListContent();
    
    return (
        <Drawer          
          docked={true}
          open={true}
          width = {250}
        >
        <Subheader>Mes petites enigmes</Subheader>
        {list}
        <Subheader>Ma grosse enigme</Subheader>
          <ListItem
              primaryText="Grosse enigme"
              initiallyOpen={true}
              key="Grosse enigme"
              primaryTogglesNestedList={true}
              onClick={this.elementClicked.bind(this, {name:"Grosse Enigme"})}
              />
        </Drawer>
      
    );
  }
}
