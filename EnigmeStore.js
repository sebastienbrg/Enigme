import {EventEmitter} from "events";
class EnigmeStore extends EventEmitter {

	constructor()
	{
		super();
		this.enigmes = 
		[
			{
				name : "test1",
				title :"Enigme numero 1",
				content : "Mon Premier est ... ",
				response : "rendez vous",
				won : false,
				index : 1
			},
			{
				name: "test2",
				title:"Enigme numero 2",
				content: "Mon Premier est ... ",
				response : "le vingt huit janvier",
				won : false,
				index:2
			}
		];
		this.currentEnigme = this.enigmes[0];
		this.phrases = ["rendez vous le", "vingt huit", "janvier"]
		this.wonPhrases = "";
		this.wonPhrasesIndexes = [];
//this.saveToStorage();
		this.loadFromStorage();

		this.showBigEnigme = false;

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
		this.emit("CURRENT_ENIGME_CHANGED");
		this.saveToStorage();
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
	getWonLetters()
	{
		let letters = []
		this.enigmes.forEach( (enigme) => {
			if(enigme.won)
			{
				letters = letters.concat(enigme.response.replace(/\s/g,"").split(""));
			}
		})
		return letters;
	}
}
const enigmeStore = new EnigmeStore();
export default enigmeStore;