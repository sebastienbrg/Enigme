import React, { Component } from 'react';
import enigmeStore from './EnigmeStore';
import PhraseShower from './PhraseShower'

export default class BigEnigme extends Component {
	constructor()
	{
		super();
		this.state = {display: enigmeStore.showBigEnigme ? 'inline-block' : 'none'}
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
	
	getTextFields()
	{
		return enigmeStore.phrases.map((phrase, index) => {
			return (<PhraseShower phrase={phrase} key={phrase} id={phrase} index={index}/>);
		});		
				    
	}

	render() {
		
		const style = {
			  height: "70%",
			  width: "70%",
			  marginTop:"0",
			  marginLeft: 260,
			  padding:"2% 5%",
			  paddingTop:0,
			  textAlign: 'left',
			  overflow:"auto",
			  display: this.state.display};
		return (
			<div id="bla" style={style}> 
				{this.getTextFields()}
			 </div>
		);
	}
}
