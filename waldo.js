// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(entry, index) {
    if(entry === "Waldo"){
      found(index)
    }
  })
}

function actionWhenFound(index) {
  console.log("Found him at index " + index + "!");
}


findWaldo(["Alice", "Bob", "Waldo", "Winston", "Waldo"], actionWhenFound);