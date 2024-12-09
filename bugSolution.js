function foo(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); // false (Correct)
console.log(foo(0, -0));  // false (Correct)

//Improved handling of NaN
function isNaNsafe(value){
  return value !== value;
}
console.log(isNaNsafe(NaN)); //true
console.log(isNaNsafe(5)); //false