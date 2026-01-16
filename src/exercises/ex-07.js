const number = Number(process.argv[2]);
const teiler = Number(process.argv[3]);
const remainder = number % teiler; // schaut wie viel rest es gibt bei einer divission durch teiler

if (remainder === 0) {
console.log(`${number} ist durch ${teiler} teilbar.`);
} else {
  console.log(`${number} ist nicht durch ${teiler} teilbar.`);
}