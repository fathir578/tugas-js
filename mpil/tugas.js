const namaPengguna = "fathir azhar syahputra";

// Menghitung jumlah huruf dalam nama
const jumlahHuruf = namaPengguna.replace(/\s/g, '').length;
const hasil = jumlahHuruf * 5;

// Menampilkan hasil di konsol
console.log("Nama:", namaPengguna);
console.log("Jumlah huruf:", jumlahHuruf);
console.log("Hasil akhir (jumlah huruf dikali 5):", hasil);