var recipes = { };

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  destructivelyUpdateObjectWithKeyAndValue(object, key, value)
  return object
}
//function deleteFromObjectByKey(object, key) {
  //delete recipes[key]
  //return recipes
//}

//function destructivelyDeleteFromObjectByKey(object, key) {
  //destructivelyDeleteFromObjectByKey(recipes, key)
  //return recipes
//}
