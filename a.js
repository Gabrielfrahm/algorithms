function reverseString(str) {
  let s = '';
  for(let i = str.length - 1; i >= 0; i-- ){
    s += str[i];
  }
  return s;
}

console.log(reverseString("yoyo master"));

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringRecursive("yoyo master"));



