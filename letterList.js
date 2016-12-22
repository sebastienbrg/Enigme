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
		this.state = { letters: enigmeStore.getWonLetters().sort(), letterStatuses:[]}
	}
	componentWillMount() 
	{
		this.setLetters();
		enigmeStore.on("WON_LETTERS_CHANGED", this.setLetters.bind(this));
		enigmeStore.on("CURRENT_PHRASE_CHANGED", this.updateLetterAppearence.bind(this));
		enigmeStore.on("WON_PRASES_CHANGED", this.updateLetterAppearence.bind(this));
		
	}
	componentWillUnmount() 
	{
		enigmeStore.removeListener("WON_LETTERS_CHANGED", this.setLetters.bind(this));
		enigmeStore.removeListener("CURRENT_PHRASE_CHANGED", this.updateLetterAppearence.bind(this));
	}
	setLetters()
	{
		this.setState({letters : enigmeStore.getWonLetters().sort()})
	}

	updateLetterAppearence()	
	{
		let wonPhrasesLetters = enigmeStore.wonPhrases.replace(/\s/g,"").split("");
		let currentPhraseLetters = enigmeStore.currentPhrase.replace(/\s/g,"").split("");
		let letterStatuses = [];
		this.state.letters.forEach((letter, index) =>{	
			if(wonPhrasesLetters.indexOf(letter) >= 0)
			{
				wonPhrasesLetters.splice(wonPhrasesLetters.indexOf(letter),1);
				letterStatuses.push("W");
			}
			else if(currentPhraseLetters.indexOf(letter) >= 0)
			{
				currentPhraseLetters.splice(currentPhraseLetters.indexOf(letter),1);
				letterStatuses.push("C");
			}
			else
				letterStatuses.push(" ");
		});
		console.log(letterStatuses.join(","));
		
		this.setState({letterStatuses:letterStatuses});
		
	}

	select(letter)
	{

	}
	render()
	{
		console.log("letterItems", this.state.letters.join(","));
		let letterItems = this.state.letters.map((letter, index) => {
			const used = (this.state.letterStatuses[index] !== " ");
			
			const secondary = used && this.state.letterStatuses[index] === "W";
			const style = {};
			return (
				<FloatingActionButton key={index} mini={true} disabled = {!used } secondary={secondary}>
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