// challenge 1: Convert the following function into a pure function.
// Also, write a reason, as why do you think, the following function is impure and
// how your solution made that impure function to a pure function.

// const listOfOddNumbers = [1, 3, 5, 7];

// function addOddNumber(newNumber) {
//   listOfOddNumbers.push(newNumber);
//   return listOfOddNumbers;
// }

// const oddNumber = addOddNumber(9);
// console.log(oddNumber);

function addOddNumber(list, newNumber) {
    const updatedList = [...list, newNumber];
    return updatedList;
  }
  
  const listOfOddNumbers = [1, 3, 5, 7];
  const oddNumber = addOddNumber(listOfOddNumbers, 9);
  console.log(oddNumber);
  
  // you can check the console, for the ouput of your code.
  console.log("")