const family = {
    mom: "Jane",
    dad: "John",
    kids: ["Alice", "Bob"],
    pet: "Max",
  };
  
  // Looping keys
  for (const key in family) {
    console.log("Key:", key);
  }
  
  // Looping values
  for (const key in family) {
    console.log("Value:", family[key]);
  }
  