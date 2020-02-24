var Parse = require('parse/node');

// Parse.initialize("5b32e704db35e23226b79352300303f8d85cb7e1", "YOUR_JAVASCRIPT_KEY");
Parse.initialize("1072fb94369e27ee48277d75255eb599a603160a");
//javascriptKey is required only if you have it on server.
//1072fb94369e27ee48277d75255eb599a603160a

//Parse.serverURL = "http://35.192.170.109:80/parse"
Parse.serverURL = "http://40.89.174.25/parse"



const GameScore = Parse.Object.extend("NewGameScore");
const gameScore = new GameScore();

gameScore.set("score", 1337);
gameScore.set("playerName", "Sean Plott");
gameScore.set("cheatMode", false);

gameScore.save()
.then((gameScore) => {
  // Execute any logic that should take place after the object is saved.
  console.log('New object created with objectId: ' + gameScore.id);
}, (error) => {
  // Execute any logic that should take place if the save fails.
  // error is a Parse.Error with an error code and message.
  alert('Failed to create new object, with error code: ' + error.message);
}).catch(e => console.log(e));
