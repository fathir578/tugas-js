
    const output = document.getElementById("output");

    // ===============================
    // 1. Function Declaration
    // ===============================
    // Cara klasik membuat function dengan kata kunci "function"
    function salamDeclaration(nama) {
    return "Halo " + nama + " (Function Declaration)";
    }

    output.innerHTML += salamDeclaration("Fathir") + "<br><br>";


    // ===============================
    // 2. Function Expression
    // ===============================
    // Function dibuat lalu disimpan di dalam variabel
    const salamExpression = function(nama) {
    return "Halo " + nama + " (Function Expression)";
    };

    output.innerHTML += salamExpression("Aisyah") + "<br><br>";


    // ===============================
    // 3. Anonymous Function
    // ===============================
    // Function tanpa nama (umumnya dipakai langsung di dalam variabel atau callback)
    const salamAnonymous = function(nama) {
      return "Halo " + nama + " (Anonymous Function)";
    };

    output.innerHTML += salamAnonymous("Budi") + "<br><br>";


    // ===============================
    // 4. Arrow Function
    // ===============================
    // Bentuk singkat dari function expression
    const salamArrow = (nama) => {
      return "Halo " + nama + " (Arrow Function)";
    };

    output.innerHTML += salamArrow("Citra") + "<br><br>";


    // ===============================
    // 5. Arrow Function Versi Singkat
    // ===============================
    // Jika hanya satu baris return, bisa ditulis tanpa kurung kurawal
    const salamSingkat = nama => "Halo " + nama + " (Arrow Function Singkat)";

    output.innerHTML += salamSingkat("Doni") + "<br><br>";


    // ===============================
    // 6. Immediately Invoked Function Expression (IIFE)
    // ===============================
    // Function langsung dijalankan setelah dibuat (umum dipakai untuk inisialisasi)
    (function() {
      output.innerHTML += "Halo dari IIFE (langsung jalan tanpa dipanggil)<br><br>";
    })();


    // ===============================
    // 7. Function sebagai Parameter (Callback)
    // ===============================
    function jalankanFunction(callback, nama) {
      return callback(nama);
    }

    const hasilCallback = jalankanFunction(salamArrow, "Eva");
    output.innerHTML += hasilCallback + " (Callback Function)<br><br>";