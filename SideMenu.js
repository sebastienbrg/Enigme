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
     currentIndex:enigmeStore.currentEnigme.index,
     showBigEnigme : enigmeStore.showBigEnigme
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
    if(enigmeStore.showBigEnigme)
    {
      this.setState({currentIndex: -1, showBigEnigme: true})  
    }
    else
    {
      this.setState({currentIndex: enigmeStore.currentEnigme.index, showBigEnigme: false})
    }
  }
  getListContent()
  {    
     return this.state.list.map((item) => {
      return ( 
              <ListItem
              primaryText={item.name}            
              initiallyOpen={true}
              key={item.name}
              leftIcon = {(((!this.state.showBigEnigme) && item.index == this.state.currentIndex) ? <CurrentIcon/> : null)}
              rightIcon={ item.won ? <ActionInfo /> : null}
              primaryTogglesNestedList={true}
              onClick={this.elementClicked.bind(this, item)}
              />
              );
      });
  }

  render() {
    let list = this.getListContent();
    let gsEn = null;
    if(enigmeStore.allWon())
      gsEn = this.elementClicked.bind(this, {name:"bigEnigme"})
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
              disabled={true}
              primaryTogglesNestedList={true}
              leftIcon = {(this.state.showBigEnigme) ? <CurrentIcon/> : null}
              onClick={gsEn}
              />
        </Drawer>
      
    );
  }
}
