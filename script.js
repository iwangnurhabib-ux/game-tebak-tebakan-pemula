// ==========================================
// DATA SOAL
// ==========================================

const soal = [

    {
        pertanyaan: "Fenomena ketika Bulan terlihat melintas di depan Venus dari sudut pandang pengamat di Bumi disebut...",
        pilihan: [
            "Gerhana Venus",
            "Okultasi",
            "Konjungsi",
            "Transit"
        ],
        jawaban: 1
    },

    {
        pertanyaan: "Siapa yang dilantik Presiden Prabowo sebagai Menteri Keuangan pada 14 September 2026?",
        pilihan: [
            "Bahlil Lahadalia",
            "Suahasil Nazara",
            "Sri Mulyani",
            "Sugiono"
        ],
        jawaban: 1
    },

    {
        pertanyaan: "Planet yang dikenal sebagai Planet Merah adalah...",
        pilihan: [
            "Venus",
            "Mars",
            "Jupiter",
            "Merkurius"
        ],
        jawaban: 1
    },

    {
        pertanyaan: "Ketika seseorang membuat judul yang sengaja dibuat berlebihan agar orang tertarik mengekliknya, istilah yang paling tepat adalah...",
        pilihan: [
            "Clickbait",
            "Bookmark",
            "Firewall",
            "Streaming"
        ],
        jawaban: 0
    },

    {
        pertanyaan: "Perangkat yang digunakan untuk menentukan lokasi berdasarkan sinyal dari satelit adalah...",
        pilihan: [
            "NFC",
            "GPS",
            "RAM",
            "USB"
        ],
        jawaban: 1
    },

    {
        pertanyaan: "Jalur LRT Jakarta yang diresmikan Presiden Prabowo pada September 2026 menghubungkan...",
        pilihan: [
            "Kelapa Gading - Manggarai",
            "Bekasi - Tanah Abang",
            "Depok - Jakarta Kota",
            "Bogor - Manggarai"
        ],
        jawaban: 0
    },

    {
        pertanyaan: "Jika sebuah video terlihat meyakinkan tetapi dibuat atau dimanipulasi menggunakan teknologi AI, istilah yang sering digunakan adalah...",
        pilihan: [
            "Deepfake",
            "Screenshot",
            "Podcast",
            "Thumbnail"
        ],
        jawaban: 0
    },

    {
        pertanyaan: "Apa fungsi utama QR Code pada pembayaran digital?",
        pilihan: [
            "Memperbesar sinyal internet",
            "Menyimpan dan membaca informasi secara cepat",
            "Mengisi baterai ponsel",
            "Meningkatkan kualitas kamera"
        ],
        jawaban: 1
    },

    {
        pertanyaan: "Berapa bonus yang dijanjikan Presiden Prabowo bagi atlet Indonesia yang meraih medali emas di Asian Games 2026?",
        pilihan: [
            "Rp1 miliar",
            "Rp2 miliar",
            "Rp3 miliar",
            "Rp5 miliar"
        ],
        jawaban: 2
    },

    {
        pertanyaan: "Benda langit yang mengelilingi sebuah planet disebut...",
        pilihan: [
            "Asteroid",
            "Komet",
            "Satelit",
            "Meteor"
        ],
        jawaban: 2
    },

    {
        pertanyaan: "Dalam keamanan akun, kode OTP seharusnya...",
        pilihan: [
            "Dibagikan kepada teman",
            "Diposting di media sosial",
            "Dirahasiakan",
            "Disimpan di kolom komentar"
        ],
        jawaban: 2
    },

    {
        pertanyaan: "Pada 1 Oktober 2026, Presiden Prabowo memimpin upacara peringatan...",
        pilihan: [
            "Hari Kemerdekaan",
            "Hari Kesaktian Pancasila",
            "Hari Kebangkitan Nasional",
            "Hari Sumpah Pemuda"
        ],
        jawaban: 1
    },

    {
        pertanyaan: "Apa nama satuan yang umum digunakan untuk mengukur kapasitas penyimpanan data?",
        pilihan: [
            "Gigabyte",
            "Gigawatt",
            "Gigahertz",
            "Gigapascal"
        ],
        jawaban: 0
    },

    {
        pertanyaan: "Jika sebuah informasi di media sosial belum dikonfirmasi oleh sumber resmi, tindakan yang paling tepat adalah...",
        pilihan: [
            "Langsung membagikannya",
            "Menganggapnya pasti benar",
            "Memeriksa sumber dan konteksnya",
            "Menghapus semua media sosial"
        ],
        jawaban: 2
    },

    {
        pertanyaan: "Setelah memimpin upacara Hari Kesaktian Pancasila pada 1 Oktober 2026, Presiden Prabowo meresmikan...",
        pilihan: [
            "Museum Nasional Indonesia",
            "Museum Kesaktian Pancasila",
            "Museum Sumpah Pemuda",
            "Museum Proklamasi"
        ],
        jawaban: 1
    }

];

// ==========================================
// VARIABEL GAME
// ==========================================

let nomorSoal = 0;
let skor = 0;


// ==========================================
// ELEMENT HTML
// ==========================================

const gameContainer = document.querySelector(".game-container");

const mulaiBtn = document.getElementById("mulaiBtn");


// ==========================================
// MULAI GAME
// ==========================================

mulaiBtn.addEventListener("click", function () {

    nomorSoal = 0;

    skor = 0;

    tampilkanSoal();

});


// ==========================================
// TAMPILKAN SOAL
// ==========================================

function tampilkanSoal() {

    const dataSoal = soal[nomorSoal];

    const progress =
        ((nomorSoal + 1) / soal.length) * 100;


    gameContainer.innerHTML = `

        <div class="game-header">

            <p class="nomor-soal">
                Soal ${nomorSoal + 1} / ${soal.length}
            </p>

            <p class="skor-game">
                Skor ${skor}
            </p>

        </div>


        <div class="progress-container">

            <div
                class="progress-bar"
                style="width: ${progress}%"
            ></div>

        </div>


        <h2 class="pertanyaan">
            ${dataSoal.pertanyaan}
        </h2>


        <div class="pilihan">

            <button class="jawaban" data-jawaban="0">
                A. ${dataSoal.pilihan[0]}
            </button>

            <button class="jawaban" data-jawaban="1">
                B. ${dataSoal.pilihan[1]}
            </button>

            <button class="jawaban" data-jawaban="2">
                C. ${dataSoal.pilihan[2]}
            </button>

            <button class="jawaban" data-jawaban="3">
                D. ${dataSoal.pilihan[3]}
            </button>

        </div>


        <p class="feedback"></p>

    `;


    const tombolJawaban =
        document.querySelectorAll(".jawaban");


    tombolJawaban.forEach(function (tombol) {

        tombol.addEventListener("click", function () {

            const jawabanDipilih =
                Number(
                    tombol.getAttribute("data-jawaban")
                );


            cekJawaban(
                jawabanDipilih,
                tombol,
                tombolJawaban
            );

        });

    });

}


// ==========================================
// CEK JAWABAN
// ==========================================

function cekJawaban(
    jawabanDipilih,
    tombolDipilih,
    semuaTombol
) {

    const jawabanBenar =
        soal[nomorSoal].jawaban;


    // Mencegah klik berkali-kali

    semuaTombol.forEach(function (tombol) {

        tombol.disabled = true;

    });


    const feedback =
        document.querySelector(".feedback");


    if (jawabanDipilih === jawabanBenar) {

        skor += 10;

        tombolDipilih.classList.add("benar");

        feedback.textContent =
            "Benar! +10 poin";

        feedback.style.color = "#16a34a";

    } else {

        tombolDipilih.classList.add("salah");

        feedback.textContent =
            "Kurang tepat.";

        feedback.style.color = "#dc2626";


        // Tampilkan jawaban yang benar

        semuaTombol.forEach(function (tombol) {

            const nomorJawaban =
                Number(
                    tombol.getAttribute("data-jawaban")
                );


            if (nomorJawaban === jawabanBenar) {

                tombol.classList.add("benar");

            }

        });

    }


    // Tunggu sebentar sebelum pindah

    setTimeout(function () {

        nomorSoal++;


        if (nomorSoal < soal.length) {

            tampilkanSoal();

        } else {

            tampilkanHasil();

        }

    }, 900);

}


// ==========================================
// HASIL AKHIR
// ==========================================

function tampilkanHasil() {

    const totalSkor =
        soal.length * 10;


    gameContainer.innerHTML = `

        <div style="text-align: center;">

            <p style="
                color: #6b7280;
                font-size: 14px;
                margin-bottom: 8px;
            ">
                GAME SELESAI
            </p>


            <h1>
                Hasil Kamu
            </h1>


            <h2 class="skor-akhir">
                ${skor}
            </h2>


            <p class="deskripsi">
                dari ${totalSkor} poin
            </p>


            <button id="mainLagiBtn">
                Main Lagi
            </button>

        </div>

    `;


    const mainLagiBtn =
        document.getElementById("mainLagiBtn");


    mainLagiBtn.addEventListener(
        "click",
        function () {

            nomorSoal = 0;

            skor = 0;

            tampilkanSoal();

        }
    );

}