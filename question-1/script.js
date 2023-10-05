function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        reject({ error: "Input is not an array" });
        return;
      }
  
      const filteredAndLowerCased = mixedArray
        .filter((item) => typeof item === "string")
        .map((word) => word.toLowerCase());
  
      if (filteredAndLowerCased.length === 0) {
        reject({ error: "No strings found in the array" });
      } else {
        resolve(filteredAndLowerCased);
      }
    });
  }
  
  // Test the function
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then((result) => {
      console.log(JSON.stringify(result));
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
    });
  