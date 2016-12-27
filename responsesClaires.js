const words = ["divulguer", "veston", "zenith", "denture", "neutre", "bal", "pigeon", "relax", "haussiere", "jerez", "naive"];
const phrasesInit = ["rendez vous le vingt huit",
 "janvier a seize heures",
 "trente un rue de",
 "la paix grenoble"];
const phrases = ["Rendez-vous,", "le vingt huit",
 "janvier", "a seize heures",
 "trente.","Un, rue de", "la paix,", "grenoble."]
exports.phrases = phrases;

 const enigmes = words.map((word, index) => {
 	return {
 		name:"Enigme"+index,
 		title: "Enigme " + word,
 		content : "Pas encore fait",
 		response: word,
 		won: false,
 		index : index
 		};
 })

 //console.log(JSON.stringify(enigmes, null, 4));

exports.enigmes = [
    {
        "name": "Blanc",
        "title": "Ivoire, Lin, Sable, Gris, Beige",
        "content": ["Suisse", "It", "potentiel Hydrogène sept", "Sans tension" ],
        "response": "neutre",
        "won": false,
        "index": 0
    },
    {
        "name": "Complet",
        "title": "Sur son 31",
        "content": ["Pantalon droit","Gilet", "Chemise", "Cravate", "Pochette", "Chapeau"],
        "response": "veston",
        "won": false,
        "index": 1
    },
    {
        "name": "Apothéose",
        "title": "Apothéose",
        "content": [" ", "Mon premier est dééétendu,", "Mon second connait un grand succès,"," ", "Mon tout est juste au dessus."],
        "response": "zenith",
        "won": false,
        "index": 2
    },
    {
        "name": "Hétérodontie",
        "title": "Théoriquement chez nous c'est 32",
        "photos": "9.jpg",
        "response": "denture",
        "won": false,
        "index": 3
    },
    {
        "name": "Codicone",
        "title": "Ca balance",
        "content": "Pas encore fait",
        "response": "divulguer",
        "won": false,
        "index": 4
    },    
    {
        "name": "Faits divers",
        "title": "Tragique",
        "content": "Il le fût à Colombey",
        "response": "bal",
        "won": false,
        "index": 5
    },
    {
        "name": "En deux",
        "title": "Il s'est fait berner",
        "content": ["Mais quelle bavarde cette pipelette ! Incroyable, elle a réussi à le voler tout en continuant à déblatérer bruyamment ...",
"Puis tu as vu l'anneau en question !? C'est de l'or, le profil est bien régulier et rond. Je peux t'assurer que c'est pas un demi, ni un parisien, c'est un pur!"],
        "response": "pigeon",
        "won": false,
        "index": 6
    },
    {
        "name": "Mr Holbrook Penniman Jr.",
        "title": "Take it easy",
        "content": ["For there is nothing that we can do", "Blame it on me or blame it on you"],
        "response": "relax",
        "won": false,
        "index": 7
    },
    {
        "name": "City",
        "title": "CAC",
        "photos" : ["1.png", "2.png","3.jpg", "4.png", "5.jpg", "6.jpg", "7.png", "8.jpg"],
        "content": "Pas encore fait",
        "response": "haussiere",
        "won": false,
        "index": 8
    },
    {
        "name": "Ibérique",
        "title": "Famoso por el caballo, el flamenco, el motociclismo y esto",
        "content": "Xe zuiz un xuz de raizin blanc du zud.",
        "response": "jerez",
        "won": false,
        "index": 9
    },
    {
        "name": "Electro-pop-rock",
        "title": "Sans les nouveaux batteurs",
        "content": ["Summum - 03-03", "Plan 04-03", "Big Band Café - 09-03", "Echonova 10-03", "Splendid - 15-03", "Krakatoa 17-03", "Olympia - 22-03", "Normandy 31-03"],
        "response": "naive",
        "won": false,
        "index": 10
    }
];