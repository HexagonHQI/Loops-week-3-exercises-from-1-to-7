const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };
  
  let sentence = "";
  
  for (const key in details) {
    sentence += `${key} ${details[key]} `;
  }
  sentence = sentence.trim();
  console.log(sentence);
  