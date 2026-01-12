const weight = Number(process.argv[2]);
const height = Number(process.argv[3]);

const bmi = weight / (height * height);

console.log(`Dein BMI ist ${bmi}.`);