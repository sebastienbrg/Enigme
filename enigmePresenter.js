import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import enigmeStore from './EnigmeStore.js';
import {orange500, green500, red500} from 'material-ui/styles/colors';
import {GridList, GridTile} from 'material-ui/GridList';
import Motorcycle from 'material-ui/svg-icons/action/motorcycle'
import GenIcons from './generatedIcons'
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';


export default class EnigmePresenter extends Component {

	constructor()
	{
		super();
		this.state = { enigme:enigmeStore.currentEnigme, resp:"", errorText:"", errorStyle:{}, display: enigmeStore.showBigEnigme ? 'none' : 'inline-block'}
	}
	componentWillMount() 
	  {
	    enigmeStore.on("CURRENT_ENIGME_CHANGED", this.setEnigmeContent.bind(this));
	  }
	  componentWillUnmount() 
	  {
	    enigmeStore.removeListener("CURRENT_ENIGME_CHANGED", this.setEnigmeContent.bind(this));
	  }

	  setEnigmeContent()
	  {
	  	if(enigmeStore.showBigEnigme)
	  	{
	  		this.setState({display:'none'});
	  		return;
	  	}
	  	
	  	let enigme = enigmeStore.currentEnigme;
	  	//console.log("setting enigme", enigme)
	  	let resp = "";
	  	let errorText = "";
	  	let errorStyle = { };
	  	if(enigme.won)
	  	{
	  		errorStyle = { color: green500 };
	  		resp = enigme.response;
	  		errorText = "Gagné !";
	  	}
  		this.setState({enigme, resp, errorText, errorStyle, display:  'inline-block'});
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
		sanitize = sanitize.replace(/-/g,"");
		sanitize = sanitize.replace(/,/g,"");
		sanitize = sanitize.replace(/\./g,"");
		sanitize = sanitize.replace(/ï/g,"i");
		sanitize = sanitize.replace(/î/g,"i");
		return sanitize;
	}
	  handleChange(e)
	  {
	  	//console.log("Recieved a change ", e.target.value);
	  	let errorStyle = {};
	  	let errorText = "";
	  	const won = (this.state.enigme.won || this.sanitize(e.target.value) === this.sanitize(this.state.enigme.response));
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
	  getContent()
	  {
	  	if(this.state.enigme.name === "Codicône")
	  	{
	  		const aim = ["un=1", "un+un=deux", "deux+deux=quatre","quatre+un=cinq","quatre*cinq=vingt", "dix*dix*dix=mille", " ","divulguer=?"];
	  		const contents = aim.map((line, indexL) => {
	  			const content = line.split("").map((letter, index) => {
  					switch(letter)
  					{
  						case "+" :
  						case "=" :
  						case "?" :
  						case "(" :
  						case ")" :
  						case " " :
  						case "1" :
  						case "*" :
   						return (<span style={{margin: 10}} key={index}>{letter}</span>);
  						default : return GenIcons.getElement(letter.charCodeAt(0)-97, index); 
  					}
	  			})
	  			let style = null;
	  			if(indexL === (aim.length -1))
	  				style={marginTop:20};
	  			return (<div style={style} key={indexL}>{content}</div>);
	  		});
	  		return contents;/*
	  		const bla = GenIcons.getElement(1); 
	  		return (<div>
	  			{bla}
	  			bloubloub
	  			<Motorcycle color={orange500} />
	  			<ActionFlightTakeoff  color={red500} />
	  			</div>)*/
	  	}
	  	const photos =this.state.enigme.photos; 
	  	if(photos)
	  	{
	  		if(Array.isArray( photos))
	  		{
		  		const styles = {
				  root: {
				  	marginTop : 25,
				  	marginBottom: 25,
				    display: 'flex',
				    flexWrap: 'wrap',
				    justifyContent: 'space-around',
				  },
				  gridList: {
				    display: 'flex',
				    flexWrap: 'nowrap',
				    overflowX: 'auto',
				  }
				};
	  			const tiles =this.state.enigme.photos.map((photo, index) => {
	  				return (
	  					<GridTile key={index}>
	  				 	<img src={ ("./res/" + photo)} />
	        			</GridTile>
	        			
	        		);
	  			}); 
		  		return (<div style={styles.root}> 
		  			<GridList style={styles.gridList} cols={2.2}>
		  			{tiles}
		  			</GridList>
		  			</div>);
	  		}
	  		else
	  		{
	  			return <img src={("./res/"+photos)} />
	  		}
	  	}
	  	else
	  	{
	  		const content = this.state.enigme.content;
	  		const styleText = { minHeight: "60%"}
	  		if(Array.isArray(content))
	  		{
  				return (<div style={styleText}>
							{content.map((line) => { return (<p> {line} </p>);})}
				</div>);
	  		}
	  		else
	  		{
		  		return (<div style={styleText}>
							<p> {content} </p>
				</div>);
	  			
	  		}
	  	}
	  }

	render() {
		const style = {
  height: "70%",
  width: "70%",
  marginTop:"0%",
  marginLeft: 270,
  padding:"2% 5%",
  textAlign: 'left',
  display: this.state.display};
  const styleTitle = { minHeight: "10%"}
  
  
  const {title, content, response, won} = this.state.enigme;
  //console.log(this.state.enigme);
		return (
			<div>
				<Paper style={style} zDepth={1} rounded={false}>
					<div  style={styleTitle}>
						<h1> {title} </h1>
					</div>
					{this.getContent()}
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
