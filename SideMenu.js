import React from 'react';
import Drawer from 'material-ui/Drawer';

import IconButton from 'material-ui/IconButton';

import {List, ListItem} from 'material-ui/List';

import Subheader from 'material-ui/Subheader';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import CloseMenu from 'material-ui/svg-icons/navigation/chevron-left';


export default class SideMenu extends React.Component {

  constructor() 
  {
    super();
    this.state ={
     list : [
     {name: "test1"},
      {name: "test2"}
      ],
       open:true};
  }


  componentWillMount() 
  {
    
    
  }
  componentWillUnmount() 
  {
    
  }
  handleToggle() 
  {
    this.setState({open: !this.state.open});
  }
  
  handleClose()
  {
    this.setState({open: false});
  } 
  elementClicked(item)
  {

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
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <Toolbar>
          <ToolbarGroup firstChild={true}>
          </ToolbarGroup>
          <ToolbarGroup>
          <IconButton onClick={this.handleClose.bind(this)}>
           <CloseMenu />
           </IconButton>
          </ToolbarGroup>
        </Toolbar>
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
