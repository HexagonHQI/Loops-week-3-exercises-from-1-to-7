const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays (loops) List of people

// Remove "Greg"
const updatedPeople = people.slice(1); // Write code to remove “Greg” from the people array.
console.log(updatedPeople); // Output: ["Mary", "Devon", "James"]

// Replace "James" with "Jason"
people.splice(people.indexOf("James"), 1, "Jason"); // Find James's index, remove 1 element and replace with "Jason"
console.log(people); // Output: ["Greg", "Mary", "Devon", "Jason"]

// Add your name to the end
people.push("Your Name"); // Add "Your Name" to the end of the original array
console.log(people); // Output: ["Greg", "Mary", "Devon", "Jason", "Your Name"]

// Mary's index
const maryIndex = people.indexOf("Mary");
console.log(maryIndex); // Output: 1

// Copy the array without Mary or your name (assuming "Your Name" is the last element)
const peopleCopy = people.slice(0, maryIndex).concat(people.slice(maryIndex + 1)); // Slice from 0 to Mary's index, then concatenate the rest (excluding Mary and "Your Name")
console.log(peopleCopy); // Output: ["Greg", "Devon", "Jason"]

// Index of "Foo" (not in the array)
const fooIndex = people.indexOf("Foo");
console.log(fooIndex); // Output: -1 (because "Foo" is not present)

// Get the last element
const last = people[people.length - 1]; // Access the element at the index of the last element (length - 1)
console.log(last); // Output: "Your Name" (assuming "Your Name" was added earlier)


// Part II - Loops

// Iterate through all people
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }
  
  // Iterate until "Devon"
  for (let i = 0; i < people.length; i++) {
    if (people[i] === "Devon") {
      console.log(people[i]);
      break;
    } else {
      console.log(people[i]);
    }
  }
  