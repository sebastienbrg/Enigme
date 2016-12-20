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
				response : "bla",
				won : false,
				index : 1
			},
			{
				name: "test2",
				title:"Enigme numero 2",
				content: "Mon Premier est ... ",
				response : "blou",
				won : false,
				index:2
			}
		];
		this.currentEnigme = this.enigmes[0];
		
		this.loadFromStorage();

this.showBigEnigme = true;

	}
	loadFromStorage()
	{
		let en = localStorage.getItem("enigmes");
		if(en)
		{
			en.split(",").forEach((enigmeWon, index) => {
				this.enigmes[index].won = (enigmeWon == "true");
			});
			this.emit("WON_LETTERS_CHANGED");
			
		}
	}
	enigmeWon()
	{
		this.currentEnigme.won = true;
		this.emit("WON_LETTERS_CHANGED");
		this.emit("CURRENT_ENIGME_CHANGED");
		this.saveToStorage();
	}
	saveToStorage()
	{
		localStorage.setItem("enigmes", this.enigmes.map((enigme) => {
			return enigme.won;
		}).join(","));
	}
	allWon()
	{
		return this.enigmes.every((en) => {return en.won});
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
				letters = letters.concat(enigme.response.split(""));
			}
		})
		return letters;
	}
}
const enigmeStore = new EnigmeStore();
export default enigmeStore;