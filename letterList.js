import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import enigmeStore from './EnigmeStore.js';
import ActionHome from 'material-ui/svg-icons/action/home';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
export default class LetterList extends Component {

	constructor()
	{
		super();
		this.state = { letters: enigmeStore.getWonLetters()}
	}
	componentWillMount() 
	{
		this.setLetters();
		enigmeStore.on("WON_LETTERS_CHANGED", this.setLetters.bind(this));
		
	}
	componentWillUnmount() 
	{
		enigmeStore.removeListener("WON_LETTERS_CHANGED", this.setLetters.bind(this));0
	}
	setLetters()
	{
		this.setState({letters : enigmeStore.getWonLetters()})
	}
	select(letter)
	{

	}
	render()
	{
		console.log("letterItems", this.state.letters.join(","));
		let letterItems = this.state.letters.map((letter, index) => {
			return (
				<FloatingActionButton key={index} mini={true}>
				{letter}
			
          </FloatingActionButton>
          )	
		});
		const style ={ width:"80%", marginLeft: 270, position:"absolute", bottom:15, padding:10};
		return (
			<Paper style={style}>
			
          { letterItems }
          
        </Paper>
        ); 	
	}
}