// Dialog 3: prompt()
// Meminta input dari pengguna melalui kotak teks.
// Mengembalikan nilai string yang diinput atau null jika dibatalkan.
let namaPengguna = prompt("Silakan masukkan nama Anda:");
if (namaPengguna !== null && namaPengguna !== "") {
  alert("Halo, " + namaPengguna + "!");
} else {
  alert("Anda tidak memasukkan nama atau membatalkan.");
}