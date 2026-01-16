const gender = process.argv[2];
const height = Number(process.argv[3]);

let talent = 0;

if (gender === "m") {
    talent = (243 - height);
}
 else if (gender === "f") {
    talent = (224 - height);
}

if ( talent < 50) {
    console.log(`Du hast sehr viel Potenzial`);}
else if (talent > 50 && talent < 60) {
    console.log(`Du musst dringend an deiner Spungkraft arbeiten.`);}
else if (60 < talent && talent < 70) {
    console.log(`Wenn du schnell bist, kannst du dir die Libero-Position überlegen.`);}
else if ( talent > 70) {
    console.log(`Du wirst im Volleyball nicht glücklich werden.`);}