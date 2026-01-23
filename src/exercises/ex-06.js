const number = Number(process.argv[2]);

const remainder = number % 3; // schaut wie viel rest es gibt bei einer divission dur 3

if (remainder === 0) {
  console.log("Die Zahl ist durch 3 teilbar.");
} else {
  console.log("Die Zahl ist nicht durch 3 teilbar.");
}
