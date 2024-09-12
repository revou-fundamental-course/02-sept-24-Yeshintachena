//ini javascript

// Fungsi untuk menghitung luas segitiga
function hitungLuas() {
    // Ambil nilai dari input panjang alas dan tinggi
    let panjangAlas = document.getElementById('panjang-alas').value;
    let tinggi = document.getElementById('tinggi').value;

    // Mengubah nilai input ke tipe angka
    let alas = parseFloat(panjangAlas);
    let t = parseFloat(tinggi);

    // Validasi input: cek apakah nilai valid dan bukan angka ilmiah ('e')
    if (!alas || !t || panjangAlas.includes('e') || tinggi.includes('e')) {
        alert('Angka tidak valid untuk alas dan tinggi.');
        return;
    }

    // Hitung luas segitiga: L = 1/2 * a * t
    var luas = (alas * t) / 2;

    // Tampilkan hasil perhitungan luas
    document.getElementById('result').innerText = 'Hasil Luas: ' + luas;
}

// Fungsi untuk mengubah warna tombol Jajar Genjang
function tryDOM() {
    // Ambil elemen tombol dengan ID 'jajar-genjang-btn' dan ubah warnanya
    let getDOM = document.getElementById('jajar-genjang-btn');
    getDOM.style.backgroundColor = '#dd681f';
    console.log(getDOM); // Cetak elemen di konsol untuk debugging
}

// Fungsi untuk menghitung keliling segitiga
function hitungKeliling() {
    // Ambil nilai dari input untuk sisi-sisi segitiga
    const s1 = parseFloat(document.getElementById('inputs1').value);
    const s2 = parseFloat(document.getElementById('inputs2').value);
    const s3 = parseFloat(document.getElementById('inputs3').value);

    // Validasi input: cek apakah nilai valid dan lebih dari 0
    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || s1 <= 0 || s2 <= 0 || s3 <= 0) {
        showError('error1', 'Angka tidak valid untuk semua sisi.');
        return;
    }

    // Hitung keliling segitiga: K = s1 + s2 + s3
    const keliling = s1 + s2 + s3;

    // Tampilkan hasil perhitungan keliling
    document.getElementById('keliling-result').innerText = 'Keliling Segitiga: ' + keliling;
}

// Fungsi untuk menampilkan pesan error
function showError(elementId, message) {
    // Menampilkan pesan error di elemen dengan ID yang diberikan
    document.getElementById(elementId).innerText = message;
}
