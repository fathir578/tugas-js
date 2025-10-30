// ============================
// Membuat sebuah objek
// ============================
let mobil = {
    // ====== PROPERTIES ======
    // Properti adalah data/atribut yang dimiliki oleh objek
    merk: "bmw",
    warna: "Hitam",
    tahun: 2020,
    kecepatan: 0,

    // ====== METHODS ======
    // Method adalah fungsi (function) yang berada di dalam objek
    // Method digunakan untuk melakukan aksi pada objek tersebut
    nyalakanMesin: function() {
        return "Mesin dinyalakan...";
    },
    percepat: function(naik) {
        this.kecepatan += naik; // 'this' mengacu pada objek 'mobil'
        return "Kecepatan sekarang: " + this.kecepatan + " km/jam";
    },
    infoMobil: function() {
        return `Mobil ${this.merk} berwarna ${this.warna}, keluaran tahun ${this.tahun}.`;
    }
};

// ============================
// Menampilkan hasil ke halaman
// ============================
let output = document.getElementById("output");

output.innerHTML += "<b>Properti Mobil:</b><br>";
output.innerHTML += "Merk: " + mobil.merk + "<br>";
output.innerHTML += "Warna: " + mobil.warna + "<br>";
output.innerHTML += "Tahun: " + mobil.tahun + "<br><br>";

output.innerHTML += "<b>Method Mobil:</b><br>";
output.innerHTML += mobil.nyalakanMesin() + "<br>";
output.innerHTML += mobil.percepat(40) + "<br>";
output.innerHTML += mobil.infoMobil() + "<br>";
