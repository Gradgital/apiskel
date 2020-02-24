var Parse = require("../config/config");

const init = (object) =>{
  const ParseObject = Parse.Object.extend(object);
  return new ParseObject();
}

var root = {
  setObject: async ({ object, objectName }) => {
   
    var parseObject = init(objectName)

    var currentObj = JSON.parse(object);

    console.log(currentObj.name);

    // Object.entries(currentObj).forEach(([key, value]) => {
    //   parseObject.set(key, value);
    // });

    return await parseObject
      .save(currentObj)
      .then(
        parseObject => {
          // Execute any logic that should take place after the object is saved.
          return parseObject.id;
        },
        error => {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          return (
            "Failed to create new object, with error code: " + error.message
          );
        }
      )
      .catch(e => console.log(e));
  },
  getObject: async ({objectFields, objectName}) =>{

    var objectResult = {}
    var parseObject = init(objectName)
    var query = new Parse.Query(parseObject);
    query.limit(25);

    var results = await query.find()
    for (let i = 0; i < results.length; i++) {
      var object = results[i];
      objectResult["id"] = object.id;
       for (let index = 0; index < objectFields.length; index++) {
         var field = objectFields[index];
         objectResult[field] = object.get(field);
         console.log(objectResult);
       }
  
      console.log(typeof objectFields);
    }
    
    return "Getting Object"
  },
  getParamObject: async () =>{
    
  }
};

module.exports = root;
