const fs = require("fs");

const content = fs.readFileSync("README.md", "utf8");

const words = content.split(" ");
const wordCount = words.length;

const reactWordCount = words.filter(
  (word) => word.toLowerCase() === "react"
).length;

console.log("Total de palabras:", wordCount);
console.log("Cantidad de veces que aparece 'React':", reactWordCount);
