let number;

do {
  number = prompt("Enter a number (must be 10 or greater): ");

  // Check if input is a number using isNaN
  if (isNaN(number)) {
    alert("Invalid input. Please enter a number.");
  }
} while (number && number < 10); // Loop as long as number is truthy (not null or undefined) and less than 10

if (number >= 10) {
  console.log("You entered", number);
}
