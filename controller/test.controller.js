var Parse = require('../config/config');



var root = {
        hello: async({name}) => {
        console.log(name)

        const GameScore = Parse.Object.extend("NewGameScore");
        const gameScore = new GameScore();
        
        gameScore.set("score", 1337);
        gameScore.set("playerName", "Sean Plott");
        gameScore.set("cheatMode", false);

return await gameScore.save()
.then((gameScore) => {
  // Execute any logic that should take place after the object is saved.
return gameScore.id
}, (error) => {
  // Execute any logic that should take place if the save fails.
  // error is a Parse.Error with an error code and message.
  alert('Failed to create new object, with error code: ' + error.message);
}).catch(e => console.log(e));
        

    },
    setHello: () =>{
      return 1;
    },
    getHello: async () =>{
      var GameScore = Parse.Object.extend("NewGameScore");
      var query = new Parse.Query(GameScore);
      query.limit(25);
      var results = await query.find()
      for (let i = 0; i < results.length; i++) {
    var object = results[i];
    console.log(object.id + ' - ' + object.get('score'));
}
      return "Succefully Got"
    },
  
  };


module.exports = root;