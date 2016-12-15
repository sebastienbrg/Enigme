import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import enigmeStore from './EnigmeStore.js';

export default class EnigmePresenter extends Component {

	constructor()
	{
		super();
		this.state = { title: "No Title", content: "The text ", response:"blablabla"}
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
	  }

	  setEnigmeContent(enigme)
	  {
	  	const {title, content, response} = enigme;

  		this.setState({title, content, response});
	  }


	render() {
		const style = {
  height: "70%",
  width: "70%",
  marginTop:"5%",
  marginLeft: 270,
  padding:"2% 5%",
  textAlign: 'left',
  display: 'inline-block'};
  const styleTitle = { height: "10%"}
  const styleText = { height: "70%"}
		return (
			<div>
				<Paper style={style} zDepth={1} rounded={false}>
					<div  style={styleTitle}>
						<h1> {this.state.title} </h1>
					</div>
					<div style={styleText}>
						<p> {this.state.content} </p>
					</div>
					<div>
					<TextField 
				      hintText="Réponse"
				      fullWidth={true}
				    />
				    </div>
				</Paper>
			</div>
		);
	}
}
