import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import enigmeStore from './EnigmeStore.js';
import {orange500, green500} from 'material-ui/styles/colors';


export default class EnigmePresenter extends Component {

	constructor()
	{
		super();
		this.state = { enigme:enigmeStore.currentEnigme, resp:"", errorText:"", errorStyle:{}}
	}
	componentWillMount() 
	  {
	    enigmeStore.on("CURRENT_ENIGME_CHANGED", this.setEnigmeContent.bind(this));
	  }
	  componentWillUnmount() 
	  {
	    enigmeStore.removeListener("CURRENT_ENIGME_CHANGED", this.setEnigmeContent.bind(this));
	  }

	  setEnigmeContent(enigme)
	  {
	  	console.log("setting enigme", enigme)
	  	let resp = "";
	  	let errorText = "";
	  	let errorStyle = { };
	  	if(enigme.won)
	  	{
	  		errorStyle = { color: green500 };
	  		resp = enigme.response;
	  		errorText = "Gagné !";
	  	}
  		this.setState({enigme, resp, errorText, errorStyle});
	  }
	  handleChange(e)
	  {
	  	console.log("Recieved a change ", e.target.value);
	  	let errorStyle = {};
	  	let errorText = "";
	  	const won = (this.state.enigme.won || e.target.value === this.state.enigme.response);
	  	if(won && !this.state.enigme.won)
  		{
  			enigmeStore.enigmeWon();
  			return;
  		}
	  	else if(e.target.value !== "")
	  	{
	  		errorText = "Ce n'est pas la bonne réponse.";
	  		errorStyle = { color: orange500 };
	  	}
	  	this.setState({resp: e.target.value, errorStyle, errorText});
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
  
  const {title, content, response, won} = this.state.enigme;
  console.log(this.state.enigme);
		return (
			<div>
				<Paper style={style} zDepth={1} rounded={false}>
					<div  style={styleTitle}>
						<h1> {title} </h1>
					</div>
					<div style={styleText}>
						<p> {content} </p>
					</div>
					<div>
					<TextField 
					id= "bla"
				      hintText="Réponse"
				      fullWidth={true}
				      disabled={won}
				      errorText={this.state.errorText}
      				  errorStyle={this.state.errorStyle}
				      value = {this.state.resp}
				      onChange={this.handleChange.bind(this)}
				    />
				    </div>
				</Paper>
			</div>
		);
	}
}
