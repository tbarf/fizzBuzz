/*Create a for loop that will iterate through 100 numbers starting from 1 and do the following:

if the number is a multiple of 3, it will console.log "fizz",
if the number is a multiple of 5, it will console.log "buzz",
if the number is a multiple of 3 and 5, it will console.log "fizzBuzz"
*/



for (var i = 1; i <= 100; i++) {
  if(i % 5 === 0) {
    console.log("buzz");
  }if(i % 3 === 0)
    console.log("fizz");
  }if(i % 5 === 0 && i % 3 === 0){
  console.log("fizzBuzz");
}else{ console.log(i);
}
