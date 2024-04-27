console.log("connected");

/**
 * Write a code in which you call an arrow function called arrayOps(). It will take two parameters.
 * Inside the function add the first argument passed to the start of the array.
 * And the second argument passed to the end of the array.
 * Console log the array both before the operations and after all, operations are done.
 */

const arrayOps = (item1, item2) => {
  const prog_languages = ["Java ", "Python ", "Javascript ", "CSS ", "HTML"]; //creating array
  console.log(prog_languages);
  prog_languages.unshift(item1);  //appending an item to the start of an array
  prog_languages.push(item2);     // appending an item at the end of an array
  console.log(prog_languages);    // printing the array
}

arrayOps("DotNet", "C++");  //passing arguments to the function
