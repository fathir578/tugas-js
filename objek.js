const user = {
  nama: "John Doe",
  usia: 30,
  hobi: ["membaca", "bermain game"],
  sapa: function() {
    console.log(`Halo, nama saya ${this.nama}.`);
  }
};

// Mengakses properti
console.log(user.nama);

// Memanggil method
user.sapa();

// Mengubah properti
user.usia = 31;
console.log(user.usia);