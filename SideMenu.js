import React from 'react';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ActionInfo from 'material-ui/svg-icons/action/done';
import CurrentIcon from 'material-ui/svg-icons/content/send'
import enigmeStore from './EnigmeStore.js';


export default class SideMenu extends React.Component {

  constructor() 
  {
    super();
    this.state ={
     list : enigmeStore.enigmes,
     currentIndex:enigmeStore.currentEnigme.index
   };
  }


  componentWillMount() 
  {
    enigmeStore.on("CURRENT_ENIGME_CHANGED", this.setEnigmeContent.bind(this));
    
  }
  componentWillUnmount() 
  {
     enigmeStore.removeListener("CURRENT_ENIGME_CHANGED", this.setEnigmeContent.bind(this));
  }
  
  elementClicked(item)
  {
    enigmeStore.setCurrentEnigme(item);
    console.info("Setting current enigme to ", item)
  }
  setEnigmeContent(enigme)
  {
    this.setState({currentIndex: enigmeStore.currentEnigme.index})
  }
  getListContent()
  {    
     return this.state.list.map((item) => {
      return ( 
              <ListItem
              primaryText={item.name}            
              initiallyOpen={true}
              key={item.name}
              leftIcon = {((item.index == enigmeStore.currentEnigme.index) ? <CurrentIcon/> : null)}
              rightIcon={ item.won ? <ActionInfo /> : null}
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
