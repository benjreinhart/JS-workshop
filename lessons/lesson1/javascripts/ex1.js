function sing(numberOfBottles) {
  for (var i = numberOfBottles; i > 0; --i) { 
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer!");
    console.log("Take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.\n\n")
  }
}

sing(5);