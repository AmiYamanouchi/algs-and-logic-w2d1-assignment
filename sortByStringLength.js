// Create a function that returns an array of strings 
// sorted by length in ascending order.

//all string lengths in an array will be different (dont worry about two of the same length)

const sortByLength = function(arr) {
  
  let numBigger = arr.sort(function(a,b){
    return (a > b ? a.length : b.length);
  })

  return numBigger

}

console.log(sortByLength(["a", "ccc", "dddd", "bb"]) )
//➞ ["a", "bb", "ccc", "dddd"]

console.log(sortByLength(["apple", "pie", "shortcake"]) )
//➞ ["pie", "apple", "shortcake"]

console.log(sortByLength(["may", "april", "september", "august"]) )
//➞ ["may", "april", "august", "september"]

console.log(sortByLength([]))
//➞ []