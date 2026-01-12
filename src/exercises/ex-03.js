const myname = process.argv[2];
const age= Number(process.argv[3]); // Number da sonst die zahlen einfach als text also wie buchstaben gelesen werden.

console.log(`Hallo ${myname}, dein Alter ist ${age} und du wirst die Matur mit ${age + 4} Jahren bestehen.`);