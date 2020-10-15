module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.join("").replace(/,/g,"");
  let index = 0;
  let currentBrackets;
  let n = str.length;
  for(let i = 0; i < n; ++i){
    if(index >= brackets.length-2)
    index = 0;
    while(str !== "" && index < brackets.length){
    currentBrackets = brackets.substring(index ,index + 2);
    console.log(currentBrackets);
    if(str.indexOf(currentBrackets) >= 0){
      str = str.replace(currentBrackets,'');
      index += 2;
      break;
    } 
    index += 2;
  }
}
  if (str === "") return true;
  return false;
}
   