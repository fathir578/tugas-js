// Deklarasi variabel dengan `var`
// `var` adalah cara lama untuk mendeklarasikan variabel.
// Variabel yang dideklarasikan dengan `var` memiliki cakupan (scope) fungsi.
var nama = "Budi";
var umur = 25;
var sudahMenikah = false;

// Menampilkan nilai variabel `var` di konsol
console.log("Menggunakan 'var':");
console.log("Nama: " + nama); // Tipe data string
console.log("Umur: " + umur); // Tipe data number
console.log("Status Menikah: " + sudahMenikah); // Tipe data boolean
console.log("------------------------");

// Deklarasi variabel dengan `let`
// `let` adalah cara modern dan direkomendasikan untuk mendeklarasikan variabel.
// Variabel yang dideklarasikan dengan `let` memiliki cakupan (scope) blok.
let kota = "Jakarta";
let populasi = 10000000;
let isIbukota = true;

// Menampilkan nilai variabel `let` di konsol
console.log("Menggunakan 'let':");
console.log("Kota: " + kota); // Tipe data string
console.log("Populasi: " + populasi); // Tipe data number
console.log("Apakah Ibukota: " + isIbukota); // Tipe data boolean

// Contoh mengubah nilai variabel
// Nilai variabel bisa diubah setelah dideklarasikan.
kota = "Bandung";
populasi = 2500000;
console.log("------------------------");
console.log("Setelah mengubah nilai 'let':");
console.log("Kota: " + kota);
console.log("Populasi: " + populasi);

// Contoh tipe data null dan undefined
let nilaiNull = null; // Menunjukkan ketiadaan nilai secara sengaja
let nilaiUndefined; // Variabel dideklarasikan tapi belum diberi nilai
console.log("------------------------");
console.log("Contoh 'null' dan 'undefined':");
console.log("Nilai Null: " + nilaiNull);
console.log("Nilai Undefined: " + nilaiUndefined);