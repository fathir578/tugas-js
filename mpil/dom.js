// 1. Temukan elemen yang ingin Anda manipulasi
const mainHeading = document.getElementById('main-heading');
const myButton = document.getElementById('my-button');

// 2. Ubah konten teks dari judul utama
mainHeading.textContent = 'Selamat Datang di DOM!';

// 3. Tambahkan event listener ke tombol
myButton.addEventListener('click', function() {
    // Fungsi ini akan berjalan saat tombol diklik
    
    // Ubah warna teks dari judul utama
    mainHeading.style.color = 'blue';
    
    // Ubah warna latar belakang dari body
    document.body.style.backgroundColor = 'lightgray';
});