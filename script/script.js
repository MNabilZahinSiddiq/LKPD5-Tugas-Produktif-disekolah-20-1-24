// No.1
for (let bilangan = 1; bilangan <= 50; bilangan++) {
    console.log(bilangan)
}

// No.2
for (let bilangan2 = 1; bilangan2 <= 50; bilangan2+=2) {
    console.log(`${bilangan2} adalah bilangan ganjil`)
}

// No.3
for (let bilangan3 = 2; bilangan3 <= 50; bilangan3+=2) {
    console.log(`${bilangan3} adalah bilangan genap`)
}

// No.4
for (let bilangan4 = 1; bilangan4 <= 50; bilangan4++) {
    if(bilangan4 % 2 == 0) {
        hasil = `${bilangan4} bilangan genap`
    } else {
        hasil = `${bilangan4} bilangan ganjil`
    }
    console.log(hasil)
}

// No.5
let bilangan = [];

for (let i = 0; i < 20; i++) {
    let input = parseFloat(prompt("Masukkan bilangan ke-" + (i + 1) + ":"));
    bilangan.push(input);
}
let terbesar = bilangan[0];
let terkecil = bilangan[0];
let total = bilangan[0];

for (let i = 1; i < 20; i++) {
    if (bilangan[i] > terbesar) {
        terbesar = bilangan[i];
    }

    if (bilangan[i] < terkecil) {
        terkecil = bilangan[i];
    }

    total += bilangan[i];
}

let rataRata = total / 20;

console.log("Bilangan Terbesar: " + terbesar);
console.log("Bilangan Terkecil: " + terkecil);
console.log("Rata-rata: " + rataRata);
