function grammer(num) {
  if (num === 1) {
    return num + " bottle";
  }
  return num + " bottles";
}

function sing(numberOfBottles) {
  for (var i = numberOfBottles; i > 0; --i) { 
    console.log(grammer(i) + " of beer on the wall, " + grammer(i) + " of beer!");
    console.log("Take one down, pass it around, " + grammer(i - 1) + " of beer on the wall.\n\n");
  }
}

sing(5);