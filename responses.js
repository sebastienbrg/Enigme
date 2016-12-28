

const cyphPhrases = [
    "368bda94246b35663f5cf741",
    "088b9486287f7f647d41f104e6",
    "0e8fda8628746a",
    "a74e9483247862757041e118e0e60f",
    "109cd19e357436",
    "318098d033647d30344c",
    "088f94802078603c",
    "239cd19e2e7374757e"
]
let enigmes = [
    {
        "name": "Blanc",
        "title": "Ivoire, Lin, Sable, Gris, Beige",
        "content": [
            "Suisse",
            "It",
            "potentiel Hydrogène sept",
            "Sans tension"
        ],
        "response": "0a8bc1843374",
        "won": false,
        "index": 0
    },
    {
        "name": "Complet",
        "title": "Sur son 31",
        "content": [
            "Pantalon",
            "Gilet",
            "..."
        ],
        "response": "128bc7842e7f",
        "won": false,
        "index": 1
    },
    {
        "name": "Apothéose",
        "title": "Apothéose",
        "content": [
            " ",
            "Mon premier est dééétendu,",
            "Mon second connait un grand succès,",
            " ",
            "Mon tout est au dessus."
        ],
        "response": "1e8bda993579",
        "won": false,
        "index": 2
    },
    {
        "name": "Hétérodontie",
        "title": "Théoriquement chez nous c'est 32",
        "photos": "9.jpg",
        "response": "008bda8434637d",
        "won": false,
        "index": 3
    },
    {
        "name": "Codicône",
        "title": "Ca balance",
        "content": "Pas encore fait",
        "response": "0087c2852d766d7522",
        "won": false,
        "index": 4
    },
    {
        "name": "Faits divers",
        "title": "Tragique",
        "content": "Il le fût à Colombey",
        "response": "068fd8",
        "won": false,
        "index": 5
    },
    {
        "name": "En deux",
        "title": "Il s'est fait berner",
        "content": [
            "Mais quelle bavarde cette pipelette ! Incroyable, elle a réussi à le voler tout en continuant à déblatérer bruyamment ...",
            "Puis tu as vu l'anneau en question !? C'est de l'or, le profil est bien régulier et rond. Je peux t'assurer que ce n'est pas un demi, ni un parisien, c'est un pur!"
        ],
        "response": "1487d3952e7f",
        "won": false,
        "index": 6
    },
    {
        "name": "Mr Holbrook Penniman Jr.",
        "title": "Take it easy",
        "content": [
            "For there is nothing that we can do",
            "Blame it on me or blame it on you"
        ],
        "response": "168bd89139",
        "won": false,
        "index": 7
    },
    {
        "name": "City",
        "title": "CAC",
        "photos": [
            "1.png",
            "2.png",
            "3.jpg",
            "4.png",
            "5.jpg",
            "6.jpg",
            "7.png",
            "8.jpg"
        ],
        "content": "Pas encore fait",
        "response": "0c8fc18332787d6235",
        "won": false,
        "index": 8
    },
    {
        "name": "Ibérique",
        "title": "Famoso por el caballo, el flamenco, el motociclismo y esto",
        "content": [
            "Xe zuiz un xuz de raizin blanc du zud."
        ],
        "response": "0e8bc6953b",
        "won": false,
        "index": 9
    },
    {
        "name": "Electro-pop-rock",
        "title": "Sans les nouveaux batteurs",
        "content": [
            "Summum - 03-03",
            "Plan 04-03",
            "Big Band Café - 09-03",
            "Echonova 10-03",
            "Splendid - 15-03",
            "Krakatoa 17-03",
            "Olympia - 22-03",
            "Oasis - 30-03",
            "Normandy 31-03"
        ],
        "response": "0a8fdd8624",
        "won": false,
        "index": 10
    }
]

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';
var resp = require("./responsesClaires")



function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}


enigmes.forEach((en) => { en.response = decrypt(en.response) });
exports.enigmes = enigmes;
const phrases = cyphPhrases.map((ph) => {return decrypt(ph)});
exports.phrases = phrases;