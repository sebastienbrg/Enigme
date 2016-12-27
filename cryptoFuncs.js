
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