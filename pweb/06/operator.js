// ========================================
// 1. Operator Aritmatika
// ========================================
let a = 10;
let b = 3;

console.log("=== Operator Aritmatika ===");
console.log("a + b = " + (a + b)); // Penjumlahan → 10 + 3 = 13
console.log("a - b = " + (a - b)); // Pengurangan → 10 - 3 = 7
console.log("a * b = " + (a * b)); // Perkalian → 10 * 3 = 30
console.log("a / b = " + (a / b)); // Pembagian → 10 / 3 = 3.333...
console.log("a % b = " + (a % b)); // Modulus → sisa bagi 10 % 3 = 1
console.log("a ** b = " + (a ** b)); // Pangkat → 10^3 = 1000

// Increment & Decrement
let c = 5;
console.log("c++ = " + (c++)); // Post-increment: tampilkan dulu 5, lalu jadi 6
console.log("++c = " + (++c)); // Pre-increment: tambah dulu, jadi 7
console.log("c-- = " + (c--)); // Post-decrement: tampilkan dulu 7, lalu jadi 6
console.log("--c = " + (--c)); // Pre-decrement: kurangi dulu, jadi 5


// ========================================
// 2. Operator Perbandingan (Boolean)
// ========================================
console.log("\n=== Operator Perbandingan ===");
console.log("a == b : " + (a == b));   // Sama dengan (nilai) → false
console.log("a === b : " + (a === b)); // Sama dengan (nilai & tipe data) → false
console.log("a != b : " + (a != b));   // Tidak sama dengan → true
console.log("a !== b : " + (a !== b)); // Tidak sama dengan (nilai & tipe) → true
console.log("a > b : " + (a > b));     // Lebih besar → true
console.log("a < b : " + (a < b));     // Lebih kecil → false
console.log("a >= b : " + (a >= b));   // Lebih besar sama dengan → true
console.log("a <= b : " + (a <= b));   // Lebih kecil sama dengan → false


// ========================================
// 3. Operator Logika
// ========================================
let x = true;
let y = false;

console.log("\n=== Operator Logika ===");
console.log("x && y : " + (x && y)); // AND → true jika keduanya true
console.log("x || y : " + (x || y)); // OR → true jika salah satu true
console.log("!x : " + (!x));         // NOT → kebalikan dari true = false
console.log("!y : " + (!y));         // kebalikan dari false = true


// ========================================
// 4. Operator Penugasan
// ========================================
let d = 10;
console.log("\n=== Operator Penugasan ===");
console.log("d = " + d); 

d += 5; // sama dengan d = d + 5
console.log("d += 5 → " + d);

d -= 3; // sama dengan d = d - 3
console.log("d -= 3 → " + d);

d *= 2; // sama dengan d = d * 2
console.log("d *= 2 → " + d);

d /= 4; // sama dengan d = d / 4
console.log("d /= 4 → " + d);

d %= 3; // sama dengan d = d % 3
console.log("d %= 3 → " + d);


// ========================================
// 5. Operator Bitwise (Manipulasi Bit)
// ========================================
// Angka akan dihitung dalam biner
let m = 5;  // 0101
let n = 3;  // 0011

console.log("\n=== Operator Bitwise ===");
console.log("m & n = " + (m & n)); // AND → 0101 & 0011 = 0001 = 1
console.log("m | n = " + (m | n)); // OR  → 0101 | 0011 = 0111 = 7
console.log("m ^ n = " + (m ^ n)); // XOR → 0101 ^ 0011 = 0110 = 6
console.log("~m = " + (~m));       // NOT → ~0101 = -6 (komplemen)
console.log("m << 1 = " + (m << 1)); // Shift kiri → 0101 << 1 = 1010 = 10
console.log("m >> 1 = " + (m >> 1)); // Shift kanan → 0101 >> 1 = 0010 = 2


// ========================================
// 6. Operator Ternary (Kondisi singkat)
// ========================================
let umur = 18;
let status = (umur >= 18) ? "Dewasa" : "Anak-anak"; 
console.log("\n=== Operator Ternary ===");
console.log("Umur = " + umur + " → Status: " + status);


// ========================================
// 7. Operator typeof & instanceof
// ========================================
console.log("\n=== Operator typeof & instanceof ===");
console.log("typeof 123 : " + typeof 123);       // number
console.log("typeof 'halo' : " + typeof "halo"); // string
console.log("typeof true : " + typeof true);     // boolean
console.log("typeof {} : " + typeof {});         // object
console.log("typeof [] : " + typeof []);         // object (array dianggap object)

// instanceof → cek apakah sebuah object merupakan instance dari class tertentu
let tanggal = new Date();
console.log("tanggal instanceof Date : " + (tanggal instanceof Date)); // true
