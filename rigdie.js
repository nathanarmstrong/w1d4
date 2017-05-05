function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var numroll = 0;


  return function() {
    numroll += 1;
    return list[numroll -1]

  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
