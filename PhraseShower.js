import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import enigmeStore from './EnigmeStore';

export default class PhraseShower extends Component {

	constructor()
	{
		super();
		this.state = {
						won:false,
						typed:""
						}
	}

	isValidInput(inputPhrase)
	{
		let lettersAvailable = this.props.phrase.replace(/\s/g,"").split("");
		console.log("lettersAvailable",lettersAvailable)
		return inputPhrase.split("").every((letter) => {
			const index = lettersAvailable.indexOf(letter);
			if(index >= 0)
			{
				lettersAvailable.splice(index, 1);
				return true;
			}
			console.log("Could not find letter", lettersAvailable);
			return false;
		});
		console.log("lettersAvailable",lettersAvailable);
	}

	handleChange(e)
	{
		
		let inputPhrase = this.sanitize(e.target.value.toLowerCase());
		const sanitPhrase = this.sanitize(this.props.phrase);
		if(this.isValidInput(inputPhrase))
		{
			if(inputPhrase === sanitPhrase)
			{
				this.setState({won:true});
				enigmeStore.addWonPhrase(sanitPhrase);
			}
			console.info("setting typed to ", e.target.value)
			this.setState({typed:e.target.value});

		}
		
	}

	getPhraseMasked(phrase)
	{
		return phrase.replace(/[a-z]/g,"X");
		
	}
	phraseClicked()
	{
		enigmeStore.setCurrentPhrase(this.props.phrase);
	}

	sanitize(phrase)
	{
		let sanitize = phrase.toLowerCase();
		sanitize = sanitize.replace(/é/g,"e");
		sanitize = sanitize.replace(/è/g,"e");
		sanitize = sanitize.replace(/ë/g,"e");
		sanitize = sanitize.replace(/â/g,"a");
		sanitize = sanitize.replace(/à/g,"a");
		sanitize = sanitize.replace(/ç/g,"c");
		sanitize = sanitize.replace(/ù/g,"u");
		sanitize = sanitize.replace(/ô/g,"o");
		sanitize = sanitize.replace(/\s/g,"");
		return sanitize;
	}

	render() {
			const phrase = this.props.phrase;
			console.log("rendering " + phrase);
			const Hintext = this.state.won?"":"Ma réponse";
			const floatingLabelText = this.state.won? "": this.getPhraseMasked(phrase);
			const inputStyle = this.state.won?{color:"green"}:{}

			return (<TextField 
				id= {phrase}
				floatingLabelText={floatingLabelText}
		      	hintText={Hintext}
		      	fullWidth={true}
		      	disabled={this.state.won}
		      	inputStyle= {inputStyle}
		      	onChange={this.handleChange.bind(this)}
		      	onClick={this.phraseClicked.bind(this)}
	      		value={this.state.typed}
		    />
		);
	}
}
