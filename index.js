var recipes = { };

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.assign({}, {key: value})
  return recipes
}

//function deleteFromObjectByKey(object, key) {
  //delete recipes[key]
  //return recipes
//}

//function destructivelyDeleteFromObjectByKey(object, key) {
  //destructivelyDeleteFromObjectByKey(recipes, key)
  //return recipes
//}
