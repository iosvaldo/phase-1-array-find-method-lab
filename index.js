// code your solution here
function basis(object){
  return object.result === "W"
}
function superbowlWin(array){
  const data = array.find(basis);
  if (data){
      return data.year;
  }
}
console.log(superbowlWin(record));