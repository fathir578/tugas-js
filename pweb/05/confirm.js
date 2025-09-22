// Menggunakan confirm() untuk meminta konfirmasi
// Dialog ini akan menampilkan pesan "Apakah Anda yakin ingin menghapus data ini?"
let konfirmasi = confirm("Apakah Anda yakin ingin menghapus data ini?");

// Mengecek nilai yang dikembalikan oleh confirm()
if (konfirmasi) {
  // Jika pengguna menekan OK (nilainya true)
  alert("Data berhasil dihapus.");
} else {
  // Jika pengguna menekan Cancel (nilainya false)
  alert("Penghapusan data dibatalkan.");
}