var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';
var resp = require("./responsesClaires")

//node crypto.js > responses.js && cat cryptoFuncs.js  >> responses.js

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

let cyphPhrase = resp.phrases.map((ph) => {return encrypt(ph)});
resp.enigmes.forEach((en) => { en.response = encrypt(en.response) });

console.log("\n\nconst cyphPhrases = " + JSON.stringify(cyphPhrase, null, 4));
console.log("let enigmes = " + JSON.stringify(resp.enigmes, null, 4));




let okPh = cyphPhrase.map((ph) => {return decrypt(ph)});

resp.enigmes.forEach((en) => { en.response = decrypt(en.response) });

//console.log(JSON.stringify(okPh, null, 4));
//console.log(JSON.stringify(resp.enigmes, null, 4));
