import React, { Component } from 'react';
import enigmeStore from './EnigmeStore.js';
import TextField from 'material-ui/TextField';

export default class BigEnigme extends Component {
	constructor()
	{
		super();
		this.state = {display: enigmeStore.showBigEnigme ? 'inline-block' : 'none', wonPhrases : []}
		this.phrases = ["rendez vous le", "vingt huit janvier"]

	}
	componentDidMount() {
		enigmeStore.on("CURRENT_ENIGME_CHANGED", this.setEnigmeContent.bind(this));
	}
	componentWillUnmount() {
		enigmeStore.removeListener("CURRENT_ENIGME_CHANGED", this.setEnigmeContent.bind(this));
	}
	setEnigmeContent()
	{
		this.setState({display: enigmeStore.showBigEnigme ? 'inline-block' : 'none'})
	}
	phraseClicked(phrase)
	{
		console.log("Clicked ", phrase);
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

	handleChange(phrase, e)
	{
		let sanitized = this.sanitize(e.target.value.toLowerCase());
		let sanitPhrase = this.sanitize(phrase);
		console.log(sanitized);
		console.log(sanitPhrase);
		
		if(sanitized === sanitPhrase)
		{
			let wonP = this.state.wonPhrases;
			wonP.push(phrase);
			this.setState({wonPhrases: wonP});
		}
	}
	getPhraseMasked(phrase)
	{
		let phraseMasquee = "";
		return phrase.replace(/[a-z]/g,"X");
		
	}
	getTextFields()
	{
		return this.phrases.map((phrase) => {
			const won = (this.state.wonPhrases.indexOf(phrase) >=0);
			const Hintext = won?"":"Ma réponse";
			const floatingLabelText = won? "": this.getPhraseMasked(phrase);
			const inputStyle = won?{color:"green"}:{}

			return (<TextField 
			id= {phrase}
				floatingLabelText={floatingLabelText}
		      	hintText={Hintext}
		      	fullWidth={true}
		      	disabled={won}
		      	inputStyle= {inputStyle}
		      	onChange={this.handleChange.bind(this,phrase)}
		      	onClick={this.phraseClicked.bind(this,phrase)}
		    />)
		})
		
				    
	}

	render() {
		
		const style = {
  height: "70%",
  width: "70%",
  marginTop:"5%",
  marginLeft: 270,
  padding:"2% 5%",
  textAlign: 'left',
  display: this.state.display};
		return (
			<div id="bla" style={style}> 
				{this.getTextFields()}
			 </div>
				
		);
	}
}
