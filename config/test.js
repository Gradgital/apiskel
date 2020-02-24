const fetch = require('node-fetch');

var obj = JSON.stringify({name:"rawk",surname:"mbankeu"});
var objName = "newObjectCode";
var query = `query   setObject($obj: String, $objName: String){
  setObject(object: $obj ,objectName: $objName)
}`;

fetch('http://localhost:4000/object', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: { obj, objName },
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));


  //this will help creating the post query to set data 
  