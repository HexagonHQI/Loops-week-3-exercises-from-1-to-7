const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// First letters was extracted and sort in one step (alternative approach)
const sortedFirstLetters = names.map(name => name.charAt(0)).sort();
const secretSocietyName = sortedFirstLetters.join("");
console.log(secretSocietyName); // Output is "ABJKPS"
