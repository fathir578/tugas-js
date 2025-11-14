// 1. Menghasilkan Angka Acak 1–10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Angka acak 1-10:", randomNumber);

// 2. Menghitung Luas Lingkaran
const radius = 5;
const area = Math.PI * Math.pow(radius, 2);
console.log("Luas lingkaran:", area);

// 3. Mencari Nilai Terbesar dan Terkecil
const numbers = [4, 9, 2, 7, 5];

const maxVal = Math.max(...numbers);
const minVal = Math.min(...numbers);

console.log("Nilai terbesar:", maxVal);
console.log("Nilai terkecil:", minVal);
