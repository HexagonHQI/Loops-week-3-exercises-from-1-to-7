const colors = ["blue", "green", "purple", "yellow", "red"];
const suffixes = ["st", "nd", "rd", "th", "th"]; // 1st blue / 2nd green etc..

for (let i = 0; i < colors.length; i++) {
  const ordinal = String(i + 1); // string was converted
  let suffix;

  // Handle special cases for 1st, 2nd, and 3rd
  if (ordinal.endsWith("1") && ordinal !== "11") {
    suffix = "st";
  } else if (ordinal.endsWith("2") && ordinal !== "12") {
    suffix = "nd";
  } else if (ordinal.endsWith("3") && ordinal !== "13") {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  console.log(`My ${ordinal}${suffix} choice is ${colors[i]}`);
}
