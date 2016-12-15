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
				index : 1
			},
			{
				name: "test2",
				title:"Enigme numero 2",
				content: "Mon Premier est ... ",
				response : "bla",
				index:2
			}
		];
	}

	setCurrentEnigme(enigme)
	{
		this.emit("CURRENT_ENIGME_CHANGED", enigme);
	}

}
const enigmeStore = new EnigmeStore();
export default enigmeStore;