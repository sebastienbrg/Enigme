import {EventEmitter} from "events";
import enigmeProvider from "./responses";  
class EnigmeStore extends EventEmitter {

	constructor()
	{
		super();
		this.enigmes = enigmeProvider.enigmes;
		
		this.currentEnigme = this.enigmes[0];
		this.phrases = enigmeProvider.phrases;
		
		this.wonPhrases = "";
		this.wonPhrasesIndexes = [];
//this.saveToStorage();
		this.loadFromStorage();

		this.showBigEnigme = this.allWon();

	}
	loadFromStorage()
	{
		let en = localStorage.getItem("enigmes");
		if(en)
		{
			let {enigmes, wonPhrases,wonPhrasesIndexes} = JSON.parse(en);
			enigmes.split(",").forEach((enigmeWon, index) => {
				this.enigmes[index].won = (enigmeWon == "true");
			});
			this.wonPhrasesIndexes = wonPhrasesIndexes;
			this.wonPhrases = wonPhrases;
			this.emit("WON_LETTERS_CHANGED");
			this.emit("WON_PRASES_CHANGED");			
		}
	}
	saveToStorage()
	{
		let enigmes = this.enigmes.map((enigme) => {
			return enigme.won;
		}).join(",");
		let wonPhrases = this.wonPhrases;
		let wonPhrasesIndexes = this.wonPhrasesIndexes;
		localStorage.setItem("enigmes", JSON.stringify({enigmes,wonPhrases, wonPhrasesIndexes}));
	}
	addWonPhrase(phrases, index)
	{
		this.wonPhrases += phrases;
		this.currentPhrase = "";
		this.wonPhrasesIndexes.push(index);
		this.emit("WON_PRASES_CHANGED");
		this.saveToStorage();
	}
	enigmeWon()
	{
		this.currentEnigme.won = true;
		this.emit("WON_LETTERS_CHANGED");
		this.saveToStorage();
		if(this.allWon())
		{
			this.setCurrentEnigme({name:"bigEnigme"});
		}
		this.emit("CURRENT_ENIGME_CHANGED");
	}
	
	allWon()
	{
		return this.enigmes.every((en) => {return en.won});
	}
	setCurrentPhrase(phrase)
	{
		this.currentPhrase = phrase;
		this.emit("CURRENT_PHRASE_CHANGED");
	}
	setCurrentEnigme(enigme)
	{
		if(enigme.name === "bigEnigme"){
			this.showBigEnigme = true;
		}
		else
		{
			this.showBigEnigme = false;
			this.currentEnigme = enigme;
		}
		this.emit("CURRENT_ENIGME_CHANGED");
	}
	getFirst()
	{
		return this.enigmes[0];
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

	getWonLetters()
	{
		let letters = []
		this.enigmes.forEach( (enigme) => {
			if(enigme.won)
			{
				letters = letters.concat(this.sanitize(enigme.response).split(""));
			}
		})
		return letters;
	}
}
const enigmeStore = new EnigmeStore();
export default enigmeStore;