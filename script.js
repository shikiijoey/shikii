'use strict';
/* =====================================================================
   DATA CERITA — semua konten yang perlu kamu edit ada di objek STORY ini.
   Ganti teks placeholder dengan ceritamu sendiri.
   ===================================================================== */
const STORY = {
  meta: {
    tag: 'MISTERI INTERAKTIF',
    title: 'Jejak Pukul Tiga',
    subtitle: 'Sebuah misteri tersembunyi di dalam ponsel yang bukan milikmu',
    credit: 'sebuah cerita interaktif',
    warning: 'Cerita ini memuat suasana tegang dan misteri.',
    clock: '09:41',
    date: 'Sat Jun 20'
  },
  passcode: '1234',               // <- ganti passcode benar di sini
  rememberUnlock: false,          // false = passcode SELALU diminta tiap swipe dari lock screen; true = lewati jika sudah pernah benar
  wallpaper: 'linear-gradient(160deg,#1b2a49 0%,#3a1c4a 45%,#0d0d16 100%)',

  // Notifikasi di lock screen
  lockNotifs: [
    { icon: '💬', title: 'Unknown', body: 'Kalau sudah bangun, buka pesanku. Jangan keluar dulu.', time: '09:38' }
  ],

  // Definisi app. theme 'dark' = teks gelap (latar app terang)
apps: [
    { id: 'calendar',  
      name: 'Calendar', 
      img:`./icons/calendar.jpg`,  
      icon: '📅', 
      color: '#fff', 
      theme: 'dark' 
    },
    { id: 'photos',    
      name: 'Foto',       
      img: './icons/gallery.jpg',
      icon: '🌸', 
      color: '#fff', 
      theme: 'dark' 
    },
    { id: 'instagram', 
      name: 'Instagram',  
      img: './icons/instagram.jpg',
      icon: '📷', 
      color: '#E1306C', 
      theme: 'dark' 
    },
    { id: 'spotify',   
      name: 'Spotify',    
      img: './icons/spotify.jpg',
      icon: '🟢', 
      color: '#191414', 
      theme: 'dark' 
    },
    { id: 'maps',      
      name: 'Maps',       
      img: './icons/maps.jpg',
      icon: '🗺️', 
      color: '#7fd19a', 
      theme: 'dark' 
    },
    { id: 'files',     
      name: 'Files',      
      img: './icons/files.jpg',
      icon: '📁', 
      color: '#4aa3ff', 
      theme: 'dark' 
    },
    { id: 'gmail',     
      name: 'Gmail',      
      img: './icons/email.jpg',
      icon: '✉️', 
      color: '#fff', 
      theme: 'dark' 
    },
    { id: 'settings',  
      name: 'Settings',   
      img: './icons/settings.jpg',
      icon: '⚙️', 
      color: '#8e8e93', 
      theme: 'dark' 
    }
],
dock: [
  {
    id: 'phone',
    name: 'Telepon',
    icon: '📞',
    img: './icons/call.jpg',
    color: '#34c759',
    theme: 'dark'
  },
  {
    id: 'safari',
    name: 'Safari',
    icon: '🧭',
    img: './icons/safari.jpg',
    color: '#fff',
    theme: 'dark'
  },
  {
    id: 'messages',
    name: 'Pesan',
    icon: '💬',
    img: './icons/message.jpg',
    color: '#34c759',
    theme: 'dark'
  },
  {
    id: 'notes',
    name: 'Catatan',
    icon: '📝',
    img: './icons/notes.jpg',
    color: '#ffd60a',
    theme: 'dark'
  }
],

  // ---- Notes ----
  notes: [
    { id: 'n1', title: 'Daftar belanja', date: '10 Juni', text: 'Beras\nTelur\nBaterai cadangan\nLampu senter\n\nKunci cadangan: bawah pot bunga.' },
    { id: 'n2', title: 'Jangan lupa', date: '11 Juni',
      text: 'Ada alamat yang kutemukan di belakang foto lama:\n\nketik di safari\narsip.lokal/3\nkalau udh muncul isinya lanjut cari\narsip.lokal/4\n\nKalau Mama bilang rumah lama cuma punya tiga kamar, jangan percaya.' },
    { id: 'n3', title: 'Malam ini', date: '20 Juni', text: 'Ada yang berdiri di depan rumah sejak tadi.\nLampunya kumatikan. Dia tetap di sana.\n\nPeta menunjukkan Jalan Melati 13, tapi aku tidak ingat pernah menyimpannya.' }
  ],

  // ---- Messages ----
  threads: [
    { id: 'th1', name: 'Unknown', time: '09:38', unread: true,
      messages: [
        { from: 'in', text: 'Kamu sudah bangun?', delay: 700 },
        { from: 'in', text: 'Jangan keluar dulu. Ada yang baru saja masuk ke rumah.', delay: 1200 }
      ],
      choices: [
        { text: 'Siapa ini?', reply: ['Namaku tidak penting.', 'Buka arsip.lokal/4. Lihat tujuan yang dibatalkan.'] },
        { text: 'Aku telepon polisi.', reply: ['Boleh. Tapi tanyakan dulu siapa yang melaporkan Sal pergi.'] }
      ] },
    { id: 'th2', name: 'Mama', time: 'Kemarin', unread: false,
      messages: [
        { from: 'in', text: 'Sudah makan? Rumah aman, kan?', delay: 0 },
        { from: 'out', text: 'Aman. Kenapa Mama tanya begitu?', delay: 0 },
        { from: 'in', text: 'Tidak apa-apa. Jangan buka pintu untuk siapa pun.', delay: 0 }
      ] }
  ],

  // ---- Safari ----
  safari: {
    favorites: [
      { name: 'Arsip', url: 'arsip.lokal', icon: '🗄️' },
      { name: 'Berita', url: 'berita.lokal', icon: '📰' }
    ],
    // 7 checkpoint: halaman dengan properti cp akan menyimpan checkpoint saat dibuka
    pages: {
      'arsip.lokal': { title: 'Arsip Lokal',
        html: '<p><small>ARSIP PRIBADI · AKSES TERBATAS</small></p><p>Halaman ini terakhir dibuka pukul 03:00. Tujuh berkas dipulihkan dari perangkat Sal.</p><p>Di bawah daftar berkas, ada catatan pendek:</p><blockquote>Kalau kamu membaca ini dari ponselku, berarti aku gagal pulang. Jangan percaya tanggal yang tertera di layar.</blockquote><p><a data-go="arsip.lokal/1">Mulai dari Berkas 1 — Rumah lama</a></p>' },
      'berita.lokal': { title: 'Berita Lokal',
        html: '<p>Warga melaporkan listrik padam di beberapa blok semalam.</p>' },
      'arsip.lokal/1': { title: 'Berkas 1 — Rumah lama', cp: 1, code: 'ALFA-01', html: '<p><small>20 JUNI · CATATAN RENOVASI</small></p><p>Deru hujan di luar rumah terdengar jelas dalam rekaman ini. Seorang tukang bertanya, "Ruang belakang ini mau ditutup juga?" Suara Mama menjawab cepat: "Tidak ada ruang belakang." Lalu ada bunyi benda berat diseret melintasi lantai.</p><p>Di pinggir denah, tulisan Sal nyaris terhapus: <i>Rumah ini punya empat kamar. Jangan biarkan Mama membuatmu menghitung tiga.</i></p><p>Denah berakhir di dinding kosong. Namun dari rekaman terdengar tiga ketukan dari balik dinding itu. Jeda. Tiga ketukan lagi.</p><p><a data-go="arsip.lokal/2">Buka foto yang dilampirkan</a></p>' },
      'arsip.lokal/2': { title: 'Berkas 2 — Foto yang dihapus', cp: 2, code: 'BRAVO-02', html: '<p>Foto kebun belakang. Rumah terlihat gelap kecuali jendela dapur. Di pantulannya ada seseorang berdiri di balik tirai. Wajahnya tidak terlihat, tapi satu tangannya menempel di kaca dari sisi dalam.</p><p>Sal menulis di bawah foto: <i>Waktu kuambil, aku sedang sendirian di halaman.</i></p><p>Metadata: foto dibuat pukul 03:04. Ponsel tercatat mati pukul 02:51. Foto sebelumnya seharusnya diambil tiga bulan lebih awal, pada Maret. Tapi metadata kedua foto sama-sama menunjukkan Agustus.</p><p>Di bagian belakang gambar tertulis alamat yang setengah tergores: Jalan Melati 13.</p><p><a data-go="arsip.lokal/3">Dengarkan transkrip rekaman</a></p>' },
      'arsip.lokal/3': { title: 'Berkas 3 — Transkrip', cp: 3, code: 'CHARLIE-03', html: '<p><small>REKAMAN SUARA · 7 DETIK · 11 JUNI</small></p><p>Awalnya hanya ada suara statis. Lalu napas terburu-buru, seolah Sal sedang berlari tanpa berani mengeluarkan suara.</p><blockquote>Kalau kamu menemukan ini, berarti pesannya terkirim. Mama bilang aku pergi malam itu. Aku ingat pintunya terkunci dari luar. Aku masih bisa dengar dia di dapur. Dia sedang menghitung kamar.</blockquote><p>Rekaman berhenti tepat setelah terdengar tiga ketukan. Di metadata, berkas ini dibuat tiga hari setelah Sal dinyatakan pergi.</p><p>Jam di sudut layar berubah sendiri dari 09:41 menjadi 03:00. Ponsel bergetar. Ada panggilan masuk.</p><p><a data-go="arsip.lokal/4">Lanjutkan ke Berkas 4 setelah panggilan selesai</a></p>' },
      'arsip.lokal/4': { title: 'Berkas 4 — Alamat', cp: 4, code: 'DELTA-04', html: '<p><small>RIWAYAT LOKASI · MALAM LISTRIK PADAM</small></p><p>Pukul 02:47, Sal menandai Jalan Melati 13 sebagai tujuan. Pukul 02:51, rute dibatalkan. Jarak yang ditempuh: 0 meter.</p><p>Pada menit yang sama, ponsel terhubung ke Wi-Fi rumah. Artinya, pembatalan itu dilakukan dari dalam rumah—atau oleh seseorang yang memegang ponsel Sal.</p><p>Di catatan rute ada satu kalimat yang bukan bagian dari aplikasi peta: <i>Kalau aku tidak sampai, cari kunci yang Mama sembunyikan. Jangan ketuk pintunya.</i></p><p>Di bawah kalimat itu tertulis: <i>Dia akan mengetuk balik.</i></p><p><a data-go="arsip.lokal/5">Buka Berkas 5</a></p>' },
      'arsip.lokal/5': { title: 'Berkas 5 — Pesan terjadwal', cp: 5, code: 'ECHO-05', html: '<p><small>DRAF PESAN · DIJADWALKAN 03:00</small></p><p>Pesan ini ditulis oleh Sal. Ada bekas jari di layar, berulang kali menghapus kalimat pertama sebelum akhirnya disimpan.</p><blockquote>Aku tidak diculik. Aku bersembunyi. Aku pikir kalau aku pergi, semua ini berhenti. Tapi tiap malam pukul tiga, ada yang mengetuk dari dalam dinding. Mama bilang itu pipa. Pipa tidak tahu namaku.</blockquote><p>Baris berikutnya baru ditambahkan satu menit sebelum pesan dikirim:</p><blockquote>Kalau ada yang membaca ini, jangan datang sendirian. Dan kalau Mama menelepon, jangan bilang kamu menemukan ruang itu.</blockquote><p>Lalu ada pesan lain, dikirim dari perangkat ini setelah Sal menghilang:</p><blockquote>Aku sudah di depan.</blockquote><p><b>Di balik pintu tempatmu berada, terdengar tiga ketukan.</b> Apa yang kamu lakukan?</p><p><a data-go="akhir.lokal/alamat">Pergi ke Jalan Melati 13</a></p><p><a data-go="akhir.lokal/mama">Telepon Mama</a></p><p><a data-go="akhir.lokal/balas">Balas Unknown</a></p>' },
      'arsip.lokal/6': { title: 'Berkas 6 — Suara dari kamar keempat', cp: 6, code: 'FOXTROT-06', html: '<p><small>MEMO SUARA · 03:04 · DARI PERANGKAT INI</small></p><p>Layar ponselmu padam selama satu tarikan napas. Saat menyala lagi, ada rekaman baru di folder yang sama dengan berkas Sal. Durasi: sebelas detik. Waktu dibuat: sekarang.</p><p>Kamu menekan putar. Tidak ada suara selama empat detik. Lalu terdengar napasmu sendiri—terlalu dekat dengan mikrofon, padahal ponsel ada di tanganmu.</p><blockquote>Kalau pesan ini muncul, berarti kamu sudah melihat salah satu akhirnya. Itu bukan akhir. Kamu cuma memilih cara pintunya terbuka.</blockquote><p>Rekaman berdesis. Di belakang suara itu terdengar bunyi kursi diseret, lalu tiga ketukan. Ketukan terakhir lebih pelan, seperti seseorang yang takut didengar.</p><p>Transkrip otomatis muncul setelah audio berhenti: <i>Jangan jawab kalau ada yang memanggil dari depan. Kalau yang memanggil adalah suaramu sendiri, jangan buka.</i></p><p>Di bawah transkrip ada satu baris tambahan. Tidak masuk ke rekaman, tetapi muncul di teks:</p><blockquote>Aku di kamar keempat. Kamu sedang berdiri di depannya.</blockquote><p>Di pantulan layar hitam, sosok di belakangmu mengangkat satu jari ke bibirnya. Lalu menunjuk ke ikon mikrofon yang masih menyala.</p><p><a data-go="arsip.lokal/7">Periksa siapa yang merekam memo itu</a></p>' },
      'arsip.lokal/7': { title: 'Berkas 7 — Riwayat mikrofon', cp: 7, code: 'GOLF-07', html: '<p><small>LOG PRIVASI · AKSES MIKROFON</small></p><p>Riwayat menunjukkan mikrofon aktif pukul 03:04. Aplikasi yang merekam: bukan Voice Memos. Namanya tertulis sebagai <b>Ruang Belakang</b>.</p><p>Kamu tidak pernah memasang aplikasi itu. Ikonnya tidak ada di layar utama. Namun log mencatat aplikasi tersebut sudah merekam setiap malam selama tiga belas hari.</p><p>Lokasi tiap rekaman sama: kamar tidurmu.</p><p>Kamu membuka rincian berkas. Pada kolom pemilik tertulis namamu. Pada kolom perangkat tertulis ponsel yang sedang kamu pegang. Kolom terakhir seharusnya berisi lokasi file, tetapi alamatnya berubah setiap kali kamu melihatnya.</p><p>Layar berkedip. Untuk sesaat, kolom itu menampilkan: <i>di balik dinding sebelah kiri</i>.</p><p>Tiga ketukan terdengar dari speaker ponsel. Kali ini bukan suara rekaman. Getarannya terasa di telapak tanganmu.</p><p>Sebuah pesan masuk dari Unknown: <i>Jangan rekam balik. Kalau dia mendengar suaramu, dia akan tahu pintu mana yang harus dibuka.</i></p><p>Di bawah pesan itu ada dua pilihan:</p><p><a data-go="akhir.lokal/suara">Balas ketukan dari dinding</a></p><p><a data-go="akhir.lokal/pantulan">Buka kamera depan</a></p>' },
      'akhir.lokal/suara': { title: 'Akhir — Suara yang menjawab', html: '<p>Kamu mengetuk dinding sekali. Dari dalam, seseorang langsung membalas dua kali.</p><p>Kamu mengetuk dua kali. Balasannya datang tiga kali, tepat di belakang telingamu.</p><p>Ponsel bergetar. Pesan Unknown terbuka sendiri: <i>Berhenti. Itu bukan aku.</i></p><p>Retakan tipis muncul di dinding. Tidak ada debu yang jatuh ke lantai. Dari celah itu keluar udara hangat dan bau hujan, sama seperti malam pada rekaman pertama.</p><p>Seseorang di balik dinding menyebut namamu dengan suaramu sendiri.</p><p><b>Kemudian, dari dalam ponsel, terdengar satu ketukan terakhir.</b></p>' },
      'akhir.lokal/pantulan': { title: 'Akhir — Empat pantulan', html: '<p>Kamera depan terbuka. Wajahmu muncul di layar, pucat dan diam.</p><p>Di belakang pantulanmu terlihat lorong yang tidak ada di kamar itu. Empat pintu berjajar di sana. Tiga terbuka sedikit. Pintu keempat tertutup rapat.</p><p>Kamu berbalik. Tidak ada lorong. Saat kembali melihat layar, pantulanmu belum ikut berbalik. Ia masih menatap pintu keempat.</p><p>Indikator kamera menyala hijau. Di layar, pantulanmu mengangkat tangan dan mengetuk pintu itu tiga kali.</p><p><b>Dari sisi kamarmu yang sebenarnya, ada tiga ketukan yang sama.</b></p>' },
      'akhir.lokal/alamat': { title: 'Akhir — Rumah keempat', html: '<p>Kamu mengikuti rute ke Jalan Melati 13. Rumah itu kosong, tapi di bawah pot bunga ada kunci yang masih hangat.</p><p>Pintu samping terbuka ke lorong sempit. Bau tanah basah dan debu memenuhi udara. Kamu menemukan ruang kecil di balik dapur: selimut, gelas berisi air, dan kalender dengan semua tanggal setelah 20 Juni dicoret.</p><p>Di meja ada ponsel lama. Layarnya menyala sendiri. Sebuah draf terbuka: <i>Kalau dia sampai di sini, jangan biarkan dia menghitung pintunya.</i></p><p>Dari lorong terdengar langkah kaki menjauh. Kamu berlari keluar. Di belakangmu, pintu menutup perlahan—lalu ada tiga ketukan dari sisi dalam.</p><p><b>Di layar ponselmu muncul pesan: "Kamu sudah pulang?"</b></p><p><a data-go="arsip.lokal/6">Buka pesan baru yang muncul</a></p>' },
      'akhir.lokal/mama': { title: 'Akhir — Suara Mama', html: '<p>Mama mengangkat sebelum nada sambung kedua. Kamu belum sempat menjelaskan, ia berbisik, "Kamu dengar ketukannya juga?"</p><p>Lalu suaranya berubah. Tenang. Terlalu tenang. <i>Sal aman. Dia minta Mama bilang begitu kalau ada yang menemukan ponselnya.</i></p><p>Kamu bertanya di mana Sal. Hening panjang. Dari ujung sana terdengar tiga ketukan, sama persis seperti rekaman. Mama menutup telepon.</p><p>Pesan Unknown masuk: <i>Kalau itu benar-benar Mama, dia akan tahu aku tidak pernah punya ponsel lama.</i></p><p>Kamu melihat layar panggilan. Durasi: 00:00. Panggilan itu tidak pernah tersambung.</p><p><b>Namun suara Mama masih terdengar dari speaker: "Jangan buka pintu."</b></p><p><a data-go="arsip.lokal/6">Buka pesan baru yang muncul</a></p>' },
      'akhir.lokal/balas': { title: 'Akhir — Centang dua', html: '<p>Kamu mengetik: <i>Kamu Sal?</i> Pesan langsung dibaca.</p><p>Balasan datang satu per satu, lambat seperti diketik dengan satu tangan.</p><blockquote>Aku Sal. Pesan yang menyuruhmu mencari arsip bukan dariku.</blockquote><p>Kamu bertanya siapa yang mengirimnya. Indikator mengetik muncul. Hilang. Muncul lagi.</p><blockquote>Orang yang ada di foto. Dia berdiri di rumah sejak dulu. Aku baru sadar karena pantulannya tidak pernah berubah.</blockquote><p>Kamera depan menyala tanpa diminta. Di belakang pantulan wajahmu, pintu kamar terbuka sedikit demi sedikit.</p><p>Pesan terakhir masuk: <i>Jangan menoleh. Aku sedang di luar rumahmu.</i></p><p><b>Dari belakangmu, seseorang berbisik: "Kamu sudah bangun?"</b></p><p><a data-go="arsip.lokal/6">Buka pesan baru yang muncul</a></p>' }
    }
  },

  // ---- Panggilan FaceTime ----
  call: {
    caller: 'Unknown',
    sub: 'FaceTime Video…',
    duration: 20,                       // detik
    script: [
      { t: 2,  text: '(layar gelap, terdengar napas pelan dan tiga ketukan)' },
      { t: 6,  text: '"Akhirnya kamu angkat. Aku Sal."' },
      { t: 11, text: '"Cari Jalan Melati 13. Jangan masuk lewat pintu depan."' },
      { t: 16, text: '"Kalau Mama yang menjawab, tutup teleponnya."' }
    ]
  },

  // ---- Foto ---- (e = emoji sebagai pengganti gambar; bisa diganti img: 'url' nanti)
  photos: [
    { id: 'p1', img: './media/p1.jpg', bg: '#3b3f4a', y: 2023, m: 'Agustus',  cap: 'Rumah lama, sebelum pindah.' },
    { id: 'p2', img: './media/p2.jpg', bg: '#2f5d3a', y: 2023, m: 'Agustus',  cap: 'Pohon di belakang rumah. Ada pantulan seseorang di jendela.' },
    { id: 'p3', img: './media/p3.jpg', bg: '#5a3d1e', y: 2023, m: 'Oktober',  cap: 'Listrik padam lagi.' },
    { id: 'p4', img: './media/p4.jpg', bg: '#4a2f2f', y: 2024, m: 'Mei',      cap: 'Pintu ini seharusnya terkunci.' },
    { id: 'p5', img: './media/p5.jpg', bg: '#2b3b4d', y: 2024, m: 'Juni',     cap: 'Ada bayangan di cermin. Berdiri di dalam rumah, di belakangku.' },
    { id: 'p6', img: './media/p6.jpg', bg: '#1d1f3a', y: 2024, m: 'Juni',     cap: '03:04. Foto ini diambil tiga belas menit setelah ponsel dimatikan.' }
  ],

  // ---- Kalender ---- (startDay: 0=Minggu ... 6=Sabtu)
  calendar: {
    month: 'Juni', year: 2024, startDay: 6, days: 30, today: 20,
    events: {
      3:  ['Servis AC'],
      9:  ['Makan malam bersama Mama'],
      12: ['Tutup semua tirai', 'Panggilan dari Mama — dibatalkan'],
      20: ['Listrik padam', 'Perjalanan ke Jalan Melati 13 dibatalkan pukul 02:51', 'Ponsel aktif kembali pukul 03:00']
    }
  },

  // ---- Instagram ----
  instagram: {
    user: 'ayamjago', name: 'Fai', bio: 'jangan stalk atau mata lo bintitan',
    followers: 312, following: 287,
    posts: [
      { id: 'i1', img: './media/ig1.jpg', bg: '#4b3a63', cap: 'nyore santuy.', likes: 41,
        comments: [{ u: 'dikidaw', t: 'gelo cuk' }] },
      { id: 'i2', img: './media/ig2.jpg', bg: '#222', cap: 'sopankah begitu?', likes: 12,
        comments: [{ u: 'rasynde', t: 'tulung dihapus mas, akeh cah cilik😱' }] },
      { id: 'i3', img: './media/ig3.jpg', bg: '#6b4a2f', cap: 'wanna this young forever.', likes: 58, comments: [] }
    ]
  },

  // ---- Peta ----
  maps: {
    home: 'Rumah', work: 'Kantor',
    recents: [
      { id: 'm1', name: 'Nectar Studio',  dist: '21,2 km · Jakarta', note: 'Terakhir dikunjungi: 3 hari lalu' },
      { id: 'm2', name: 'Game Center',    dist: '28,4 km',           note: 'Tidak pernah dikunjungi' },
      { id: 'm3', name: 'Jalan Melati 13',dist: '0,4 km',            note: 'Tujuan tersimpan pukul 02:47. Rute dibatalkan pukul 02:51 dari ponsel ini.' }
    ]
  },

  // ---- File ----
  files: {
    recents: ['f1', 'f2'],
    locations: {
      'iCloud Drive':    ['f1', 'f2'],
      'Di iPhone-ku':    ['f3'],
      'Baru Dihapus':    ['f4']
    },
    items: {
      f1: { name: 'catatan_suara.txt', size: '2 KB', date: '11 Jun', text: 'Transkrip: "Kalau kamu dengar ini, aku sudah tidak ada di rumah. Mama bilang aku pergi. Aku ingat pintunya terkunci dari luar."' },
      f2: { name: 'denah.pdf',        size: '480 KB', date: '9 Jun', text: 'Denah rumah lama. Ada empat kamar. Ruang kecil di belakang dapur ditandai dari sisi dalam.' },
      f3: { name: 'kunci.txt',        size: '1 KB', date: '5 Jun', text: 'Kunci cadangan ruang belakang: di bawah pot bunga. Jangan tinggalkan di tempat yang sama.' },
      f4: { name: 'JANGAN_DIBUKA.txt',size: '1 KB', date: '20 Jun', text: 'Jadwal pesan terkirim: 03:00. Pengirim: Sal. Status perangkat saat pesan dikirim: tidak diketahui.' }
    }
  },

  // ---- Gmail ----
  gmail: [
    { id: 'g1', from: 'Layanan Listrik', subj: 'Pemadaman terjadwal', time: '08:12', unread: true,
      body: 'Pelanggan yth,\n\nPemadaman di wilayah Jalan Melati dijadwalkan pukul 00:00. Pasokan listrik kembali pukul 03:00.\n\nTerima kasih.' },
    { id: 'g2', from: 'Mama', subj: 'Pulang kapan?', time: 'Kemarin', unread: false,
      body: 'Nak, rumahnya aman kan? Mama telepon tidak diangkat. Jangan buka ruang belakang, ya. Pintu itu sudah lama tidak ada.' },
    { id: 'g3', from: '(tanpa pengirim)', subj: '(tanpa subjek)', time: '03:00', unread: true,
      body: 'Aku sudah di depan. Kenapa lampunya menyala?' }
  ],

  // ---- Telepon ----
  phone: {
    recents: [
      { name: 'Unknown', kind: 'Panggilan tak terjawab', time: '03:00', missed: true },
      { name: 'Mama',    kind: 'Keluar',                  time: 'Kemarin', missed: false },
      { name: 'Unknown', kind: 'Panggilan tak terjawab', time: 'Kemarin', missed: true }
    ],
    contacts: ['Mama', 'Sahabat', 'Unknown'],
    voicemail: [
      { from: 'Unknown', time: '03:01', dur: '0:07', text: '(hanya terdengar suara napas...)' }
    ],
    // Nomor yang bisa diketik di Keypad -> menjalankan aksi (sama seperti triggers)
    dial: {
      '4719': { type: 'toast', text: 'Nomor tidak aktif.' }
    }
  },

  // ---- Pengaturan ----
  settings: [
    [{ i: '✈️', c: '#ff9f0a', t: 'Mode Pesawat', toggle: false },
     { i: '📶', c: '#0a84ff', t: 'Wi-Fi', v: 'Tidak Terhubung' },
     { i: '🔵', c: '#0a84ff', t: 'Bluetooth', v: 'Nyala' }],
    [{ i: '🔔', c: '#ff3b30', t: 'Notifikasi' },
     { i: '🌙', c: '#5e5ce6', t: 'Fokus', v: 'Jangan Ganggu' }],
    [{ i: '🔋', c: '#34c759', t: 'Baterai', v: '85%' },
     { i: 'ℹ️', c: '#8e8e93', t: 'Tentang', v: 'iPhone' }]
  ],

  // ---- Trigger / event ----
  // on: 'home' | 'open:app:<id>' | 'open:note:<id>' | 'open:thread:<id>' | 'checkpoint:<n>' | 'call:end'
  // do: {type:'banner', icon, title, body, open:'app:deepId'} | {type:'call'} | {type:'toast', text}
  triggers: [
    { id: 't-home',  on: 'home', delay: 5000,
      do: { type: 'banner', icon: '💬', title: 'Unknown', body: 'Buka pesanku.', open: 'messages:th1' } },
    { id: 't-note3', on: 'open:note:n3', delay: 1500,
      do: { type: 'banner', icon: '💬', title: 'Unknown', body: 'Kamu membacanya, ya?', open: 'messages:th1' } },
    { id: 't-call',  on: 'checkpoint:3', delay: 1500, repeatable: true, do: { type: 'call' } }
  ]
};

/* =====================================================================
   UTIL
   ===================================================================== */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const vibrate = p => { try { navigator.vibrate && navigator.vibrate(p); } catch (e) {} };

/* ---------- State (localStorage) ---------- */
const KEY = 'ifsim.v1';
const DEFAULT_STATE = () => ({ unlocked: false, seen: {}, cps: [], fired: {}, msgRead: {}, chosen: {}, noteRead: {} });
function loadState() {
  try { return Object.assign(DEFAULT_STATE(), JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch (e) { return DEFAULT_STATE(); }
}
let S = loadState();
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
function resetProgress() {
  try { localStorage.removeItem(KEY); } catch (e) {}
  location.reload();
}

/* ---------- Audio sederhana (WebAudio, tanpa file) ---------- */
let ac;
function audio() {
  if (!ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
  if (ac && ac.state === 'suspended') ac.resume();
  return ac;
}
function tone(freq, dur, vol = 0.12, when = 0, type = 'sine') {
  const a = audio(); if (!a) return;
  const o = a.createOscillator(), g = a.createGain(), t = a.currentTime + when;
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(a.destination); o.start(t); o.stop(t + dur);
}
const sfx = {
  notif: () => {
    try {
      const sound = new Audio('./sounds/notification.mp3');
      sound.volume = 0.75;
      sound.play().catch(() => { tone(880, .12); tone(1320, .2, .1, .13); });
    } catch (e) { tone(880, .12); tone(1320, .2, .1, .13); }
  },
  key:   () => tone(520, .04, .05),
  ring:  () => { tone(440, .45, .1); tone(480, .45, .1); tone(440, .45, .1, .6); tone(480, .45, .1, .6); },
  err:   () => tone(150, .25, .12, 0, 'square')
};

/* =====================================================================
   ROUTER LAYAR
   ===================================================================== */
const phone = $('#phone');
const view = $('#appview');
const SCREENS = ['title', 'lock', 'passcode', 'home'];
let current = 'title';
let openId = null;

function syncChrome() {
  const inApp = !!openId;
  let darkBackground = false;
  if (inApp) {
    const appBody = view.querySelector('.app-body');
    const background = appBody && getComputedStyle(appBody).backgroundColor;
    const rgb = background && background.match(/[\d.]+/g);
    if (rgb && rgb.length >= 3) {
      const [r, g, b] = rgb.slice(0, 3).map(Number);
      const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      darkBackground = luminance < 0.5;
    }
  }
  // CSS `dark` means dark status icons; use light icons on dark app backgrounds.
  phone.dataset.sb = inApp && !darkBackground ? 'dark' : 'light';
  phone.dataset.hb = (call.active || current === 'title') ? 'hide' : (inApp ? 'dark' : 'light');
}

function showScreen(name) {
  if (openId) closeApp(true);
  SCREENS.forEach(n => $('#' + n).classList.toggle('active', n === name));
  current = name;
  if (name === 'passcode') resetPass();
  if (name === 'home') { renderHome(); fire('home'); }
  syncChrome();
}

/* Swipe ke atas dengan pointer events (mouse + touch) */
function onSwipeUp(el, cb, min = 50) {
  let y0 = null;
  el.addEventListener('pointerdown', e => { y0 = e.clientY; });
  el.addEventListener('pointerup', e => { if (y0 !== null && y0 - e.clientY > min) cb(); y0 = null; });
  el.addEventListener('pointercancel', () => { y0 = null; });
}

/* Home bar / geser ke atas: kembali ke home atau buka kunci */
function goHome() {
  if (call.active || current === 'title') return;
  if (openId) { closeApp(); syncChrome(); renderHome(); return; }
  if (current === 'lock') { showScreen(STORY.rememberUnlock && S.unlocked ? 'home' : 'passcode'); }
}

function updateStatusBarTime() {
  const time = $('#sb-time');
  const formatted = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
  if (time) time.textContent = formatted;
  const lockTime = $('#lock-time');
  if (lockTime) lockTime.textContent = formatted;
}
/* =====================================================================
   JUDUL, LOCK, PASSCODE
   ===================================================================== */
function initTitle() {
  const m = STORY.meta;
  $('#t-tag').textContent = m.tag;
  $('#t-title').textContent = m.title;
  $('#t-sub').textContent = m.subtitle;
  $('#t-credit').textContent = m.credit;
  $('#t-warn').textContent = m.warning;
  updateStatusBarTime();
  $('#lock-date').textContent = m.date;
  document.documentElement.style.setProperty('--wall', STORY.wallpaper);
  $('#t-ok').onclick = () => { audio(); showScreen('lock'); };
  $('#t-reset').onclick = () => { if (confirm('Hapus semua progres?')) resetProgress(); };
}

function initLock() {
  $('#lock-notifs').innerHTML = STORY.lockNotifs.map(n =>
    `<div class="notif"><div class="ni">${n.icon}</div><div><b>${esc(n.title)}</b>${esc(n.body)}</div><small>${esc(n.time)}</small></div>`).join('');
  onSwipeUp($('#lock'), goHome);
  $('#lock-hint').onclick = goHome;   // cadangan untuk desktop
}

let pc = '';
const LETTERS = { 2: 'ABC', 3: 'DEF', 4: 'GHI', 5: 'JKL', 6: 'MNO', 7: 'PQRS', 8: 'TUV', 9: 'WXYZ' };
function initPass() {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  $('#keys').innerHTML = keys.map(k =>
    `<button class="key${k === 0 ? ' zero' : ''}" data-k="${k}">${k}<small>${LETTERS[k] || ''}</small></button>`).join('');
  $$('.key').forEach(b => b.addEventListener('click', () => pressKey(b.dataset.k)));
  $('#pc-emg').onclick = () => toast('Panggilan darurat tidak tersedia');
  $('#pc-cancel').onclick = () => {
    if (pc.length) { pc = pc.slice(0, -1); updateDots(); }
    else showScreen('lock');
  };
}
function updateDots() {
  $$('#dots i').forEach((d, i) => d.classList.toggle('on', i < pc.length));
  $('#pc-cancel').textContent = pc.length ? 'Hapus' : 'Batal';
}
function resetPass() { pc = ''; updateDots(); }
function pressKey(d) {
  if (pc.length >= 4) return;
  sfx.key(); vibrate(8);
  pc += d; updateDots();
  if (pc.length === 4) setTimeout(checkPass, 180);
}
function checkPass() {
  if (pc === STORY.passcode) {
    S.unlocked = true; save(); vibrate(15);
    showScreen('home');
  } else {
    const dots = $('#dots');
    dots.classList.add('shake'); sfx.err(); vibrate([60, 40, 60]);
    setTimeout(() => { dots.classList.remove('shake'); resetPass(); }, 450);
  }
}

/* =====================================================================
   HOME + BUKA/TUTUP APP
   ===================================================================== */
const allApps = () => STORY.apps.concat(STORY.dock);
function unreadCount() { return STORY.threads.filter(t => t.unread && !S.msgRead[t.id]).length; }

function appIcon(a) {
    const badge = a.id === 'messages' && unreadCount()
        ? `<span class="badge">${unreadCount()}</span>` : '';

    const visual = a.img
        ? `<img src="${a.img}" class="app-image" alt="">`
        : a.icon;

    return `
        <button class="app" data-app="${a.id}">
            <div class="icon" style="background:${a.color}">
                ${visual}${badge}
            </div>
            <span class="lbl">${esc(a.name)}</span>
        </button>
    `;
}
function homeWidgetsMarkup() {
  const calendar = STORY.calendar;
  const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][(calendar.startDay + calendar.today - 1) % 7];
  const events = calendar.events[calendar.today] || [];
  const eventSummary = events.length ? `${events.length} acara hari ini` : 'Tidak ada acara hari ini';
  return `<div class="home-widget calendar-widget" aria-label="Kalender ${calendar.month} ${calendar.today}">
      <span class="widget-kicker">${weekday}</span>
      <strong class="calendar-day">${calendar.today}</strong>
      <span class="widget-caption">${eventSummary}</span>
    </div>
    <div class="home-widget weather-widget" aria-label="Cuaca Jakarta cerah, 23 derajat">
      <b class="weather-city">Jakarta</b>
      <strong class="weather-temp">23<span>°</span></strong>
      <span class="weather-condition"><i aria-hidden="true">☀</i> Cerah</span>
    </div>`;
}
function renderHome() {
  $('#home-widgets').innerHTML = homeWidgetsMarkup();
  $('#grid').innerHTML = STORY.apps.map(appIcon).join('');
  $('#dock').innerHTML = STORY.dock.map(appIcon).join('');
  $$('#home .app').forEach(b => b.onclick = () => openApp(b.dataset.app, b.querySelector('.icon')));
}

function openApp(id, fromEl, deep) {
  const def = allApps().find(a => a.id === id); if (!def) return;
  const already = view.classList.contains('open');
  if (!already) {
    const pr = phone.getBoundingClientRect();
    const k = pr.width / phone.offsetWidth || 1;   // faktor scale HP (desktop)
    if (fromEl) {
      const r = fromEl.getBoundingClientRect();
      view.style.transformOrigin = `${(r.left - pr.left + r.width / 2) / k}px ${(r.top - pr.top + r.height / 2) / k}px`;
    } else view.style.transformOrigin = '50% 100%';
  }
  openId = id;
  view._tok = (view._tok || 0) + 1;
  (RENDER[id] || renderPlaceholder)(view, def, deep);
  syncChrome();
  if (!already) requestAnimationFrame(() => requestAnimationFrame(() => view.classList.add('open')));
  S.seen[id] = 1; save();
  fire('open:app:' + id);
}
function closeApp(instant) {
  if (typeof view._cleanup === 'function') {
    view._cleanup();
    view._cleanup = null;
  }
  view._tok = (view._tok || 0) + 1;
  openId = null;
  if (instant) { view.style.transition = 'none'; view.classList.remove('open'); void view.offsetWidth; view.style.transition = ''; }
  else view.classList.remove('open');
  setTimeout(() => { if (!openId) view.innerHTML = ''; }, 420);
}
const backBtn = (label, fn) => { const b = document.createElement('button'); b.textContent = label; b.onclick = fn; return b; };

/* =====================================================================
   KOMPONEN APP
   ===================================================================== */
const RENDER = {};
// ---------- Spotify: playlist dan lagu ----------
// Cover ini artwork buatan untuk prototype; audio lagu perlu file lokalnya.
const spotifyPlaylists = [
  { id: 'emel-an', title: 'emel an', artist: 'Breakbeat buat JJ', cover: './media/pict1.jpg', tracks: [
    ['Astaga Bercanda (Remix DJ)', 'Mingse, Akbar Chalay'],
    ['Wayase Seka', 'Novia Bachmid, Toton Caribo, Jacson Zeran'], ['Raci Kuah (Remix)', 'Fresly Nikijuluw'],
    ['Otak Dimana? (JJ Remix)', 'Mario G Klau, Juan Reza'], ['Tor Monitor Ketua', 'JEDAG JEDUG SOUND, Ecko Show'],
    ['Tabola Bale (JJ Remix)', 'Silet Open Up, Jacson Seran'], ['Ubur Ubur Ikan Lele', 'Juan Reza, Jacson Zeran'],
    ['Curi Curi Pandang (Remix)', 'Juan Reza, Maman Fvndy'], ['Dola (Remix Version)', 'Angga Dermawan, Maman Fvndy']
  ]},
  { id: 'chase-atlantic', title: "don't chase men, instead of", artist: 'Chase Atlantic', cover: './media/pict3.jpg', tracks: [
    ['Swim', 'Chase Atlantic'], ['Friends', 'Chase Atlantic'], ['Into It', 'Chase Atlantic'],
    ['Slow Down', 'Chase Atlantic'], ['Consume', 'Chase Atlantic, Goon Des Garcons'],
    ['Meddle About', 'Chase Atlantic'], ['Heaven and Back', 'Chase Atlantic']
  ]},
  { id: 'jowo', title: 'jowo', artist: 'NDX A.K.A. • Denny Caknan', cover: './media/pict6.jpg', tracks: [
    ['Terminal Giwangan', 'NDX A.K.A.'], ['Kau Tercipta Bukan Untukku', 'NDX A.K.A.'],
    ['Nemen', 'NDX A.K.A.'], ['Apa Kabar Mantan', 'NDX A.K.A.'], ['Lagu Galau', 'OMWAWES, NDX A.K.A.'],
    ['Bojoku Di Gondol Bojone', 'NDX A.K.A.'], ['Kartonyono Medot Janji', 'Denny Caknan'],
    ['Los Dol', 'Denny Caknan'], ['Angge-angge Orong-orong', 'Fendik Adella, Yeni Inka'], ['Cucak Rowo', 'Difarina Indra Adella, Fendik Adella'],
    ['Kelingan Mantan', 'NDX A.K.A.'], ['Tresno Tekan Mati (New Version - Remastered 2023)', 'NDX A.K.A.'],
    ['Ngertenono Ati (NDX A.K.A. Version)', 'NDX A.K.A.'], ['Tewas Tertimbun Masa Lalu (TTM)', 'NDX A.K.A.'],
    ['Ditinggal Rabi', 'NDX A.K.A.'], ['Kimcil Kepolen', 'NDX A.K.A.'],
    ['Piwales Tresno', 'NDX A.K.A.'], ['Cintamu Tak Terbatas Waktu', 'NDX A.K.A.'],
    ['Kangen Mantan', 'NDX A.K.A.'], ['Aku Bukan Bonekamu', 'NDX A.K.A.']
  ]},
  { id: 'lngshot', title: 'LNGSHOT', artist: 'LNGSHOT', cover: './media/pict5.jpg', tracks: [
    ['MOYA', 'LNGSHOT'], ['Never Let Go', 'LNGSHOT'], ['Saucin', 'LNGSHOT'],
    ["Moonwalkin'", 'LNGSHOT'], ['Vanilla Days', 'LNGSHOT'], ['RUN IT UP', 'LNGSHOT'],
    ['Summer Eyes', 'LNGSHOT'], ['Masterpiece', 'LNGSHOT']
  ]}
];
const spotifyLocalFiles = {
  'Astaga Bercanda (Remix DJ)': 'ASTAGA BERCANDA THAYLAND.mp3',
  'Wayase Seka': 'NOVIA BACHMID, TOTON CARIBO & JACSON ZERAN - WAYASE SEKA (OFFICIAL MUSIC VIDEO).mp3',
  'Raci Kuah (Remix)': 'PARTY SENTAK🌴 - RACI KUAH💃_PHYTER 2026.mp3',
  'Otak Dimana? (JJ Remix)': 'Mario G Klau, Juan Reza - Otak Dimana (Official Music Video).mp3',
  'Tor Monitor Ketua': 'DJ TOR MONITOR KETUA - ORANG BARU LEBE GACOR SLOW VIRAL TIKTOK FULL SONG MAMAN FVNDY 2025.mp3',
  'Tabola Bale (JJ Remix)': 'Tabola Bale - Silet Open Up Ft Jacson Zeran - Juan Reza & Diva Aurel (Official Music Video).mp3',
  'Ubur Ubur Ikan Lele': 'Juan Reza - UBUR-UBUR IKAN LELE feat. @jacsonzeranofficial & @CHESYLINO16 (Official Music Video).mp3',
  'Curi Curi Pandang (Remix)': 'DJ KAKA PU MANIS BIKIN SA SUKA DJ CURI CURI PANDANG SLOW VIRAL TIKTOK FULL SONG MAMAN FVNDY 2026.mp3',
  'Dola (Remix Version)': 'DJ CIS CIS FAJA SKALI X DOLA DOLA KITA SALAH DOLA VIRAL TIKTOK FULL SONG MAMAN FVNDY 2024.mp3',
  'Swim': 'Chase Atlantic - Swim (Lyrics).mp3',
  'Friends': 'Chase Atlantic - Friends (Lyrics) So what the hell are we tell me we weren’t just friends.mp3',
  'Into It': 'Chase Atlantic - Into It (Official Audio).mp3',
  'Slow Down': 'Slow Down.mp3',
  'Consume': 'Chase Atlantic - Consume feat. Goon Des Garcons (Official Audio).mp3',
  'Meddle About': 'Meddle About.mp3',
  'Heaven and Back': 'Chase Atlantic - HEAVEN AND BACK.mp3',
  'Terminal Giwangan': 'Terminal Giwangan (lirik) - NDX AKA.mp3',
  'Kau Tercipta Bukan Untukku': 'NDX A.K.A - Kau Tercipta Bukan Untuk Ku (Lirik).mp3',
  'Nemen': 'NDX AKA - Nemen HipHop Dangdut Version ( Official Lyric Video ).mp3',
  'Apa Kabar Mantan': 'NDX A.K.A – Apa Kabar Mantan I JOOX Original (Official Music Video).mp3',
  'Lagu Galau': 'OMWAWES ft. NDX AKA - Lagu Galau (Official Music Video).mp3',
  'Bojoku Di Gondol Bojone': 'NDX A.K.A - Bojoku Digondol Bojone.mp3',
  'Kartonyono Medot Janji': 'Kartonyono Medot Janji - Denny Caknan lirik lagu.mp3',
  'Los Dol': 'Denny Caknan - LOS DOL (Official Music Video).mp3',
  'Angge-angge Orong-orong': 'Angge Angge Orong Orong - Fendik Adella ft Yeni Inka - OM ADELLA.mp3',
  'Cucak Rowo': 'CUCAK ROWO - Difarina Indra Adella Ft. Fendik Adella - OM ADELLA.mp3',
  'Kelingan Mantan': 'Kelingan Mantan - NDX A.K.A.mp3',
  'Tresno Tekan Mati (New Version - Remastered 2023)': 'NDX AKA - Tresno Tekan Mati New Version ( Official Lyric Video ).mp3',
  'Ngertenono Ati (NDX A.K.A. Version)': 'Ngertenono Ati (NDX A.K.A. Version).mp3',
  'Tewas Tertimbun Masa Lalu (TTM)': 'Tewas Tertimbun Masa Lalu (TTM).mp3',
  'Ditinggal Rabi': 'Ditinggal Rabi - NDX A.K.A ta lirik.mp3',
  'Kimcil Kepolen': 'Kimcil Kepolen.mp3',
  'Piwales Tresno': 'PIWALES TRESNO - NDX-AKA (Lirik Lagu).mp3',
  'Cintamu Tak Terbatas Waktu': 'Cintamu Tak Terbatas Waktu.mp3',
  'Kangen Mantan': 'Kangen Mantan.mp3',
  'Aku Bukan Bonekamu': 'Aku Bukan Bonekamu.mp3',
  'MOYA': 'Jay Park & LNGSHOT - [MOYA] Official Audio.mp3',
  'Never Let Go': 'LNGSHOT - [Never Let Go] Official Audio.mp3',
  'Saucin': 'LNGSHOT - [Saucin’] Official Audio.mp3',
  "Moonwalkin'": 'LNGSHOT - [Moonwalkin’] Official Audio.mp3',
  'Vanilla Days': 'LNGSHOT - [Vanilla Days] Official Audio.mp3',
  'RUN IT UP': 'Jay Park & LNGSHOT - [RUN IT UP] Official Audio.mp3',
  'Summer Eyes': 'OHYUL of LNGSHOT - [Summer Eyes] Official Audio.mp3',
  'Masterpiece': 'LNGSHOT - Masterpiece (Lyrics).mp3'
};
const spotifyCoverFiles = {
  "Astaga Bercanda (Remix DJ)": "./icons/song-covers/astaga-bercanda-remix-dj.jpg",
  "Wayase Seka": "./icons/song-covers/wayase-seka.jpg",
  "Raci Kuah (Remix)": "./icons/song-covers/raci-kuah-remix.jpg",
  "Otak Dimana? (JJ Remix)": "./icons/song-covers/otak-dimana-jj-remix.jpg",
  "Tor Monitor Ketua": "./icons/song-covers/tor-monitor-ketua.jpg",
  "Tabola Bale (JJ Remix)": "./icons/song-covers/tabola-bale-jj-remix.jpg",
  "Ubur Ubur Ikan Lele": "./icons/song-covers/ubur-ubur-ikan-lele.jpg",
  "Curi Curi Pandang (Remix)": "./icons/song-covers/curi-curi-pandang-remix.jpg",
  "Dola (Remix Version)": "./icons/song-covers/dola-remix-version.jpg",
  "Swim": "./icons/song-covers/swim.jpg",
  "Friends": "./icons/song-covers/friends.jpg",
  "Into It": "./icons/song-covers/into-it.jpg",
  "Slow Down": "./icons/song-covers/slow-down.jpg",
  "Consume": "./icons/song-covers/consume.jpg",
  "Meddle About": "./icons/song-covers/meddle-about.jpg",
  "Heaven and Back": "./icons/song-covers/heaven-and-back.jpg",
  "Terminal Giwangan": "./icons/song-covers/terminal-giwangan.jpg",
  "Kau Tercipta Bukan Untukku": "./icons/song-covers/kau-tercipta-bukan-untukku.jpg",
  "Nemen": "./icons/song-covers/nemen.jpg",
  "Apa Kabar Mantan": "./icons/song-covers/apa-kabar-mantan.jpg",
  "Lagu Galau": "./icons/song-covers/lagu-galau.jpg",
  "Bojoku Di Gondol Bojone": "./icons/song-covers/bojoku-di-gondol-bojone.jpg",
  "Kartonyono Medot Janji": "./icons/song-covers/kartonyono-medot-janji.jpg",
  "Los Dol": "./icons/song-covers/los-dol.jpg",
  "Angge-angge Orong-orong": "./icons/song-covers/angge-angge-orong-orong.jpg",
  "Cucak Rowo": "./icons/song-covers/cucak-rowo.jpg",
  "Kelingan Mantan": "./icons/song-covers/kelingan-mantan.jpg",
  "Tresno Tekan Mati (New Version - Remastered 2023)": "./icons/song-covers/tresno-tekan-mati-new-version-remastered-2023.jpg",
  "Ngertenono Ati (NDX A.K.A. Version)": "./icons/song-covers/ngertenono-ati-ndx-a-k-a-version.jpg",
  "Tewas Tertimbun Masa Lalu (TTM)": "./icons/song-covers/tewas-tertimbun-masa-lalu-ttm.jpg",
  "Ditinggal Rabi": "./icons/song-covers/ditinggal-rabi.jpg",
  "Kimcil Kepolen": "./icons/song-covers/kimcil-kepolen.jpg",
  "Piwales Tresno": "./icons/song-covers/piwales-tresno.jpg",
  "Cintamu Tak Terbatas Waktu": "./icons/song-covers/cintamu-tak-terbatas-waktu.jpg",
  "Kangen Mantan": "./icons/song-covers/kangen-mantan.jpg",
  "Aku Bukan Bonekamu": "./icons/song-covers/aku-bukan-bonekamu.jpg",
  "MOYA": "./icons/song-covers/moya.jpg",
  "Never Let Go": "./icons/song-covers/never-let-go.jpg",
  "Saucin": "./icons/song-covers/saucin.jpg",
  "Moonwalkin'": "./icons/song-covers/moonwalkin.jpg",
  "Vanilla Days": "./icons/song-covers/vanilla-days.jpg",
  "RUN IT UP": "./icons/song-covers/run-it-up.jpg",
  "Summer Eyes": "./icons/song-covers/summer-eyes.jpg",
  "Masterpiece": "./icons/song-covers/masterpiece.jpg",
};
const spotifySongs = spotifyPlaylists.flatMap((playlist, playlistIndex) => playlist.tracks.map(([title, artist]) => ({
  title, artist, cover: spotifyCoverFiles[title] || playlist.cover,
  file: spotifyLocalFiles[title] ? `./music/${spotifyLocalFiles[title]}` : null,
  playlistIndex
})));
const spotifyAudio = new Audio();
spotifyAudio.preload = 'metadata';
const spotifyState = { currentSong: 1, playing: false, currentPage: 'home', activeTab: 'Home', islandExpanded: false };
let spotifyViewRefresh = null;

function updateDynamicIsland() {
  const island = $('#island');
  if (!island) return;
  const track = spotifySongs[spotifyState.currentSong];
  const isPlaying = spotifyState.playing && !!track;
  island.dataset.active = isPlaying ? 'true' : 'false';
  island.dataset.expanded = isPlaying && spotifyState.islandExpanded ? 'true' : 'false';
  island.setAttribute('aria-label', isPlaying ? `Sedang diputar: ${track.title}, ${track.artist}` : 'Dynamic Island');
  if (!isPlaying) {
    spotifyState.islandExpanded = false;
    island.onclick = null;
    island.onkeydown = null;
    island.innerHTML = '';
    return;
  }

  const progress = spotifyAudio.duration ? Math.min(100, spotifyAudio.currentTime / spotifyAudio.duration * 100) : 0;
  if (spotifyState.islandExpanded) {
    island.innerHTML = `<div class="di-expanded" data-di-panel>
      <img class="di-cover" src="${esc(track.cover)}" alt="">
      <div class="di-track"><b>${esc(track.title)}</b><small>${esc(track.artist)}</small>
        <div class="di-progress"><span style="width:${progress}%"></span></div></div>
      <button class="di-play" data-di-play aria-label="Jeda musik">Ⅱ</button>
    </div>`;
    island.querySelector('[data-di-play]').onclick = e => { e.stopPropagation(); toggleSpotifyPlayback(); };
  } else {
    island.innerHTML = `<div class="di-compact"><img src="${esc(track.cover)}" alt=""><span class="di-title">${esc(track.title)}</span><span class="di-wave" aria-hidden="true"><i></i><i></i><i></i><i></i></span></div>`;
  }
  island.onclick = e => {
    if (e.target.closest('[data-di-play]')) return;
    spotifyState.islandExpanded = !spotifyState.islandExpanded;
    updateDynamicIsland();
  };
  island.onkeydown = e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); island.click(); }
  };
}

function toggleSpotifyPlayback() {
  if (!spotifySongs[spotifyState.currentSong]?.file) {
    toast('File audio lagu belum ada di folder music/.');
    return;
  }
  if (spotifyAudio.paused) {
    spotifyAudio.play().then(() => {
      spotifyState.playing = true;
      updateDynamicIsland();
      if (openId === 'spotify' && spotifyViewRefresh) spotifyViewRefresh();
    }).catch(() => toast('Lagu gagal diputar. Cek file MP3-nya.'));
  } else {
    spotifyAudio.pause();
    spotifyState.playing = false;
    updateDynamicIsland();
    if (openId === 'spotify' && spotifyViewRefresh) spotifyViewRefresh();
  }
}

function selectSpotifySong(index, autoplay = false) {
  spotifyState.currentSong = (index + spotifySongs.length) % spotifySongs.length;
  spotifyState.playing = false;
  const file = spotifySongs[spotifyState.currentSong].file;
  if (file) { spotifyAudio.src = file; spotifyAudio.load(); }
  else spotifyAudio.removeAttribute('src');
  updateDynamicIsland();
  if (autoplay) toggleSpotifyPlayback();
}

spotifyAudio.ontimeupdate = () => {
  const progress = spotifyAudio.duration ? spotifyAudio.currentTime / spotifyAudio.duration * 100 : 0;
  $$('.sp-mini-line span').forEach(el => { el.style.width = `${progress}%`; });
  const islandProgress = $('#island .di-progress span');
  if (islandProgress) islandProgress.style.width = `${progress}%`;
};
spotifyAudio.onended = () => selectSpotifySong(spotifyState.currentSong + 1, true);
/* ---------- Placeholder untuk app yang belum diisi ---------- */
function renderPlaceholder(v, def) {
  v.innerHTML = `<div class="app-body"><div class="ph"><div class="big">${def.icon}</div><b>${esc(def.name)}</b>
    <span>Belum ada isi. Tambahkan fungsi RENDER.${def.id} di script.js.</span></div></div>`;
}
// ---------- Spotify ----------
RENDER.spotify = (v) => {
  let currentSong = spotifyState.currentSong;
  let playing = spotifyState.playing;
  let currentPage = spotifyState.currentPage;
  let activeTab = spotifyState.activeTab;
  let selectedPlaylist = 0;
  const $sp = (selector) => v.querySelector(selector);
  const song = () => spotifySongs[currentSong];
  const playButton = () => playing ? 'Ⅱ' : '▶';
  const playlistStart = (index) => spotifyPlaylists.slice(0, index).reduce((n, p) => n + p.tracks.length, 0);
  const art = (playlist, cls = '') => `<img class="sp-art ${cls}" src="${esc(playlist.cover)}" alt="${esc(playlist.title)} cover">`;
  const songArt = (s) => `<img class="sp-art" src="${esc(s.cover)}" alt="${esc(s.title)} cover">`;

  const miniPlayer = () => {
    const s = song();
    const progress = spotifyAudio.duration ? Math.min(100, spotifyAudio.currentTime / spotifyAudio.duration * 100) : 0;
    return `<div class="sp-mini">${songArt(s)}<div class="sp-mini-info"><b>${esc(s.title)}</b><small>${esc(s.artist)}</small></div>
      <button class="sp-mini-play" aria-label="Putar atau jeda">${playButton()}</button><div class="sp-mini-line"><span style="width:${progress}%"></span></div></div>`;
  };

  const navigation = () => `<div class="sp-nav">
    <button data-tab="Home" class="${activeTab === 'Home' ? 'active' : ''}"><span class="sp-nav-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 10.5 12 3.7l8.5 6.8v9a1 1 0 0 1-1 1h-5.2v-6.2H9.7v6.2H4.5a1 1 0 0 1-1-1z"/></svg></span><small>Home</small></button>
    <button data-tab="Search" class="${activeTab === 'Search' ? 'active' : ''}"><span class="sp-nav-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="7.2"/><path d="m16.2 16.2 4.3 4.3"/></svg></span><small>Search</small></button>
    <button data-tab="Your Library" class="${activeTab === 'Your Library' ? 'active' : ''}"><span class="sp-nav-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4v16M10 6v14M15 4v16M20 7v13"/></svg></span><small>Your Library</small></button>
  </div>`;
  const renderHome = () => {
    currentPage = 'home';
    spotifyState.currentPage = currentPage;
    v.innerHTML = `<div class="app-body spotify"><div class="sp-content"><h2>Good afternoon</h2>
      <div class="sp-shortcuts">${spotifyPlaylists.map((p, i) => `<button class="sp-shortcut" data-playlist="${i}">${art(p)}<b>${esc(p.title)}</b></button>`).join('')}</div>
      <h2 class="sp-section-title">Made for Sal</h2><div class="sp-albums">${spotifyPlaylists.map((p, i) => `<button class="sp-album" data-playlist="${i}">${art(p)}<b>${esc(p.title)}</b><small>${esc(p.artist)} · ${p.tracks.length} lagu</small></button>`).join('')}</div>
      </div>${miniPlayer()}${navigation()}</div>`;
    v.querySelectorAll('[data-playlist]').forEach(card => card.onclick = () => { selectedPlaylist = Number(card.dataset.playlist); renderAlbum(); });
    bindCommon();
  };

  const renderAlbum = () => {
    currentPage = 'album';
    spotifyState.currentPage = currentPage;
    const playlist = spotifyPlaylists[selectedPlaylist];
    v.innerHTML = `<div class="app-body spotify"><div class="sp-playlist-header">
      <button class="sp-back" aria-label="Kembali">‹</button><div class="sp-big-cover">${art(playlist)}</div>
      <div class="sp-playlist-copy"><small>PLAYLIST</small><h2>${esc(playlist.title)}</h2><p>${esc(playlist.artist)}</p><small>${playlist.tracks.length} lagu</small></div>
      <button class="sp-big-play" aria-label="Putar playlist">${playButton()}</button></div>
      <div class="sp-track-list">${playlist.tracks.map(([title, artist], i) => { const globalIndex = playlistStart(selectedPlaylist) + i; return `<button class="sp-track" data-song="${globalIndex}">${songArt(spotifySongs[globalIndex])}<div><b>${esc(title)}</b><small>${esc(artist)}</small></div><span>${globalIndex === currentSong && playing ? '♫' : '•••'}</span></button>`; }).join('')}</div>
      ${miniPlayer()}${navigation()}</div>`;
    $sp('.sp-back').onclick = renderHome;
    $sp('.sp-big-play').onclick = () => { currentSong = playlistStart(selectedPlaylist); loadSong(true); };
    v.querySelectorAll('.sp-track').forEach(track => track.onclick = () => { currentSong = Number(track.dataset.song); loadSong(true); });
    bindCommon();
  };

  const togglePlay = () => toggleSpotifyPlayback();
  const loadSong = (autoplay = false) => {
    selectSpotifySong(currentSong, autoplay);
    currentSong = spotifyState.currentSong;
    playing = spotifyState.playing;
    refresh();
  };
  const refresh = () => {
    currentSong = spotifyState.currentSong;
    playing = spotifyState.playing;
    currentPage = spotifyState.currentPage;
    activeTab = spotifyState.activeTab;
    if (currentPage === 'album') renderAlbum();
    else if (currentPage === 'Search' || currentPage === 'Your Library') renderOtherTab(currentPage);
    else renderHome();
  };
  spotifyViewRefresh = refresh;
  const bindCommon = () => {
    const miniPlay = $sp('.sp-mini-play');
    if (miniPlay) miniPlay.onclick = togglePlay;
    v.querySelectorAll('[data-tab]').forEach(tab => tab.onclick = () => {
      activeTab = tab.dataset.tab;
      spotifyState.activeTab = activeTab;
      if (activeTab === 'Home') { spotifyState.currentPage = 'home'; renderHome(); }
      else renderOtherTab(activeTab);
    });
  };
  const renderOtherTab = (tab) => {
    currentPage = tab;
    spotifyState.currentPage = currentPage;
    const isSearch = tab === 'Search';
    const results = spotifyPlaylists.map((p, i) => `<button class="sp-track" data-playlist="${i}">${art(p)}<div><b>${esc(p.title)}</b><small>${esc(p.artist)} · ${p.tracks.length} lagu</small></div><span>›</span></button>`).join('');
    v.innerHTML = `<div class="app-body spotify"><div class="sp-content ${isSearch ? 'sp-search-page' : ''}">
      <h2>${isSearch ? 'Search' : 'Your Library'}</h2>
      ${isSearch ? `<label class="sp-search-wrap"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="7.2"/><path d="m16.2 16.2 4.3 4.3"/></svg><input class="sp-search" type="search" autocomplete="off" placeholder="What do you want to listen to?"></label>
        <p class="sp-search-hint">Cari lagu apa saja — judul, artis, atau album.</p><p class="sp-search-empty" hidden>Tidak ada hasil yang cocok.</p><div class="sp-library-list sp-search-results" hidden>${results}</div>`
      : `<h3>Your playlists</h3><div class="sp-library-list">${results}</div>`}
      </div>${miniPlayer()}${navigation()}</div>`;
    v.querySelectorAll('[data-playlist]').forEach(card => card.onclick = () => { selectedPlaylist = Number(card.dataset.playlist); renderAlbum(); });
    const search = $sp('.sp-search');
    if (search) search.oninput = () => {
      const query = search.value.trim().toLowerCase();
      const list = $sp('.sp-search-results');
      const hint = $sp('.sp-search-hint');
      const empty = $sp('.sp-search-empty');
      let visible = 0;
      v.querySelectorAll('.sp-search-results [data-playlist]').forEach(card => {
        card.hidden = !!query && !card.textContent.toLowerCase().includes(query);
        if (!card.hidden) visible++;
      });
      list.hidden = !query;
      hint.hidden = !!query;
      empty.hidden = !query || visible > 0;
    };
    bindCommon();
  };
  refresh();
  updateDynamicIsland();
};
/* ---------- Notes ---------- */
RENDER.notes = (v, def, deep) => {
  const list = () => {
    v.innerHTML = `<div class="app-body" style="--accent:#d49a00">
      <div class="nav"><span></span><span class="ttl"></span><span></span></div>
      <div class="scroll"><div class="large">Catatan</div><div class="search">🔍 Cari</div>
      <div class="group">${STORY.notes.map(n =>
        `<div class="row" data-id="${n.id}"><b>${esc(n.title)}</b><small>${esc(n.date)} · ${esc(n.text.split('\n')[0])}</small></div>`).join('')}</div></div></div>`;
    $$('.row', v).forEach(r => r.onclick = () => detail(r.dataset.id));
  };
  const detail = id => {
    const n = STORY.notes.find(x => x.id === id); if (!n) return list();
    v.innerHTML = `<div class="app-body" style="--accent:#d49a00">
      <div class="nav"><button id="bk">‹ Catatan</button><span></span><span></span></div>
      <div class="scroll"><div class="note-date">${esc(n.date)}</div><div class="note-body"><h2>${esc(n.title)}</h2>${esc(n.text)}</div></div></div>`;
    $('#bk', v).onclick = list;
    S.noteRead[id] = 1; save();
    fire('open:note:' + id);
  };
  deep ? detail(deep) : list();
};

/* ---------- Messages ---------- */
RENDER.messages = (v, def, deep) => {
  const list = () => {
    v.innerHTML = `<div class="app-body msgs">
      <div class="nav"><button>Edit</button><span class="ttl"></span><span>✏️</span></div>
      <div class="scroll"><div class="large">Pesan</div>
      ${STORY.threads.map(t => {
        const last = t.messages[t.messages.length - 1];
        const un = t.unread && !S.msgRead[t.id];
        return `<div class="m-row" data-id="${t.id}">${un ? '<i class="udot"></i>' : ''}<div class="avatar">${esc(t.name[0])}</div>
          <div class="m-info"><b>${esc(t.name)}<small>${esc(t.time)}</small></b><span>${esc(last ? last.text : '')}</span></div></div>`;
      }).join('')}</div></div>`;
    $$('.m-row', v).forEach(r => r.onclick = () => thread(r.dataset.id));
  };

  const thread = id => {
    const th = STORY.threads.find(t => t.id === id); if (!th) return list();
    const tok = v._tok;
    const alive = () => v._tok === tok && v.isConnected;
    v.innerHTML = `<div class="app-body msgs">
      <div class="msg-head"><button class="back" id="bk">‹</button><div class="avatar">${esc(th.name[0])}</div>${esc(th.name)}</div>
      <div class="bubbles"><div class="m-stamp"><b>iMessage</b><br>${esc(th.time)}</div></div><div class="choices"></div>
      <div class="msg-input"><div class="fake">iMessage</div></div></div>`;
    $('#bk', v).onclick = () => { v._tok++; list(); };
    const box = $('.bubbles', v), cbox = $('.choices', v);
    const add = m => {
      $$('.deliv', box).forEach(d => d.remove());   // label "Terkirim" hanya di bubble keluar terakhir
      box.insertAdjacentHTML('beforeend', `<div class="bub ${m.from}">${esc(m.text)}</div>` + (m.from === 'out' ? '<div class="deliv">Terkirim</div>' : ''));
      box.scrollTop = box.scrollHeight;
    };

    // Tampilkan pesan berurutan; animate=false -> langsung semua
    const seq = (items, animate, done) => {
      let i = 0;
      const step = () => {
        if (!alive()) return;
        if (i >= items.length) return done && done();
        const m = items[i++];
        if (!animate || m.from === 'out' || !m.delay) { add(m); return step(); }
        box.insertAdjacentHTML('beforeend', '<div class="bub in typing"><i></i><i></i><i></i></div>');
        box.scrollTop = box.scrollHeight;
        setTimeout(() => {
          if (!alive()) return;
          const t = $('.typing', box); if (t) t.remove();
          add(m); sfx.key(); vibrate(10); step();
        }, m.delay);
      };
      step();
    };

    const showChoices = () => {
      if (!th.choices || S.chosen[th.id] !== undefined) return;
      cbox.innerHTML = th.choices.map((c, i) => `<button data-i="${i}">${esc(c.text)}</button>`).join('');
      $$('button', cbox).forEach(b => b.onclick = () => {
        const c = th.choices[+b.dataset.i];
        S.chosen[th.id] = +b.dataset.i; save(); cbox.innerHTML = '';
        add({ from: 'out', text: c.text });
        seq(c.reply.map(t => ({ from: 'in', text: t, delay: 1000 })), true);
      });
    };

    const first = !S.msgRead[th.id];
    seq(th.messages, first, () => {
      if (S.chosen[th.id] !== undefined) {
        const c = th.choices[S.chosen[th.id]];
        add({ from: 'out', text: c.text });
        c.reply.forEach(t => add({ from: 'in', text: t }));
      } else showChoices();
    });
    S.msgRead[th.id] = 1; save();
    fire('open:thread:' + id);
  };
  deep ? thread(deep) : list();
};

/* ---------- Safari ---------- */
RENDER.safari = (v, def, deep) => {
  const SF = STORY.safari;
  v.innerHTML = `<div class="app-body safari"><div class="sf-view scroll"></div>
    <div class="sf-bar"><button id="sf-home" aria-label="Beranda">⌂</button>
    <input id="sf-url" type="text" placeholder="Cari atau masukkan nama situs" autocomplete="off" autocapitalize="off" spellcheck="false"></div></div>`;
  const body = $('.sf-view', v), input = $('#sf-url', v);
  const norm = u => u.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/+$/, '');

  const unlock = n => {
    if (!S.cps.includes(n)) {
      S.cps.push(n); save();
      toast(`Checkpoint ${S.cps.length}/7 tersimpan`);
    }
    // Efek cerita dapat berjalan lagi saat checkpoint dibuka ulang.
    fire('checkpoint:' + n);
  };
  const bindLinks = () => $$('[data-go]', body).forEach(a => a.onclick = () => go(a.dataset.go));

  const start = () => {
    input.value = '';
    const cps = [1, 2, 3, 4, 5, 6, 7].map(n => {
      const key = Object.keys(SF.pages).find(k => SF.pages[k].cp === n);
      const p = key && SF.pages[key];
      return S.cps.includes(n)
        ? `<div class="cp-item open" data-go="${key}"><span>✓ Checkpoint ${n}</span><span>${esc(p.code || '')}</span></div>`
        : `<div class="cp-item locked"><span>🔒 Checkpoint ${n}</span><span>—</span></div>`;
    }).join('');
    body.innerHTML = `<div class="sf-start"><h3>Favorit</h3><div class="fav-grid">${SF.favorites.map(f =>
      `<button class="fav" data-go="${f.url}"><i>${f.icon}</i>${esc(f.name)}</button>`).join('')}</div>
      <h3>Checkpoint (${S.cps.length}/7)</h3><div class="cp-list">${cps}</div></div>`;
    bindLinks();
  };
  const page = (u, p) => {
    input.value = u;
    body.innerHTML = `<div class="web"><h1>${esc(p.title)}</h1>${p.html}` +
      (p.cp ? `<div class="cp-box">Checkpoint ${p.cp} · Kode: <b>${esc(p.code || '-')}</b></div>` : '') + `</div>`;
    body.scrollTop = 0; bindLinks();
    updateStatusBarTime();
    if (p.cp) unlock(p.cp);
  };
  const go = raw => {
    const u = norm(raw);
    if (!u) return start();
    const p = SF.pages[u];
    if (p) return page(u, p);
    input.value = raw;
    body.innerHTML = `<div class="web"><h1>Tidak dapat membuka halaman</h1><p>Safari tidak dapat membuka halaman karena alamat tidak valid atau tidak ditemukan.</p></div>`;
  };

  $('#sf-home', v).onclick = start;
  input.addEventListener('keydown', e => { if (e.key === 'Enter') { input.blur(); go(input.value); } });
  deep ? go(deep) : start();
};

/* ---------- Helper: tab bar bawah & viewer layar penuh ---------- */
function tabApp(v, tabs, accent, startId) {
  const show = id => {
    const t = tabs.find(x => x.id === id) || tabs[0];
    v.innerHTML = `<div class="app-body" style="--accent:${accent}"><div class="tab-content"></div>
      <div class="tabbar">${tabs.map(x => `<button data-t="${x.id}" class="${x.id === t.id ? 'on' : ''}"><i>${x.icon}</i>${esc(x.label)}</button>`).join('')}</div></div>`;
    $$('.tabbar button', v).forEach(b => b.onclick = () => show(b.dataset.t));
    t.render($('.tab-content', v), show);
  };
  show(startId);
}
/* Viewer: panel di atas isi app, ada tombol kembali */
function viewer(host, html, backLabel) {
  const el = document.createElement('div');
  el.className = 'viewer';
  el.innerHTML = `<div class="nav"><button class="vb">‹ ${esc(backLabel || 'Kembali')}</button><span></span><span></span></div><div class="scroll">${html}</div>`;
  $('.vb', el).onclick = () => el.remove();
  host.closest('.app-body').appendChild(el);
  return el;
}

/* ---------- Foto ---------- */
RENDER.photos = (v) => {
  const tabs = [{ id: 'lib', label: 'Koleksi', icon: '🖼️', render: (box) => {
    let mode = 'all';
    const draw = () => {
      const P = STORY.photos;
      let groups;
      if (mode === 'all') groups = [['', P]];
      else {
        const map = new Map();
        P.forEach(p => { const k = mode === 'years' ? String(p.y) : `${p.m} ${p.y}`; (map.get(k) || map.set(k, []).get(k)).push(p); });
        groups = [...map.entries()];
      }
      box.innerHTML = `<div class="nav"><button>Pilih</button><span></span><span></span></div>
        <div class="scroll"><div class="large">Koleksi</div>
        <div class="seg">${[['years', 'Tahun'], ['months', 'Bulan'], ['all', 'Semua']].map(([k, l]) => `<button data-m="${k}" class="${k === mode ? 'on' : ''}">${l}</button>`).join('')}</div>
        ${groups.map(([h, arr]) => `${h ? `<div class="ph-h">${esc(h)}</div>` : ''}<div class="pgrid">${arr.map(p =>
          `<div class="pt" data-id="${p.id}" style="background:${p.bg}">${p.img ? `<img src="${esc(p.img)}" alt="">` : p.e}</div>`).join('')}</div>`).join('')}
        </div>`;
      $$('.seg button', box).forEach(b => b.onclick = () => { mode = b.dataset.m; draw(); });
      $$('.pt', box).forEach(t => t.onclick = () => {
        const p = P.find(x => x.id === t.dataset.id);
        viewer(box, `<div class="pbig" style="background:${p.bg}">${p.img ? `<img src="${esc(p.img)}" alt="">` : p.e}</div>
          <div class="note-date">${esc(p.m)} ${p.y}</div><div class="note-body" style="padding-top:0">${esc(p.cap)}</div>`, 'Koleksi');
        fire('open:photo:' + p.id);
      });
    };
    draw();
  } }, { id: 'alb', label: 'Album', icon: '📚', render: (box) => {
    box.innerHTML = `<div class="nav"><span></span><span></span><span></span></div><div class="scroll"><div class="large">Album</div>
      <div class="group"><div class="row"><b>Semua Foto</b><small>${STORY.photos.length} item</small></div>
      <div class="row"><b>Baru Dihapus</b><small>0 item</small></div></div></div>`;
  } }];
  tabApp(v, tabs, '#0a84ff', 'lib');
};

/* ---------- Kalender ---------- */
RENDER.calendar = (v) => {
  const C = STORY.calendar;
  let sel = C.today;
  const draw = () => {
    const cells = [];
    for (let i = 0; i < C.startDay; i++) cells.push('<span></span>');
    for (let d = 1; d <= C.days; d++) {
      const ev = C.events[d];
      cells.push(`<button class="cd${d === C.today ? ' today' : ''}${d === sel ? ' sel' : ''}" data-d="${d}">${d}${ev ? '<i></i>' : ''}</button>`);
    }
    const evs = C.events[sel] || [];
    v.innerHTML = `<div class="app-body" style="--accent:#ff3b30">
      <div class="nav"><button>‹ ${C.year}</button><span></span><span>🔍</span></div>
      <div class="scroll"><div class="large" style="color:#ff3b30">${esc(C.month)}</div>
      <div class="cal-h">${['M', 'S', 'S', 'R', 'K', 'J', 'S'].map(x => `<span>${x}</span>`).join('')}</div>
      <div class="cal-g">${cells.join('')}</div>
      <div class="group" style="margin-top:18px">${evs.length ? evs.map(e => `<div class="row"><b>${esc(e)}</b></div>`).join('') : '<div class="row"><small>Tidak ada acara</small></div>'}</div></div></div>`;
    $$('.cd', v).forEach(b => b.onclick = () => { sel = +b.dataset.d; draw(); fire('open:day:' + sel); });
  };
  draw();
};

/* ---------- Instagram ---------- */
RENDER.instagram = (v) => {
  const I = STORY.instagram;
  const main = () => {
    v.innerHTML = `<div class="app-body ig">
      <div class="nav"><b style="color:#000">${esc(I.user)} ⌄</b><span></span><span>➕ ☰</span></div>
      <div class="scroll">
        <div class="ig-top"><div class='img:./media/pp.jpg'></div>
          <div class="ig-stats"><div><b>${I.posts.length}</b>Postingan</div><div><b>${I.followers}</b>Pengikut</div><div><b>${I.following}</b>Mengikuti</div></div></div>
        <div class="ig-bio"><b>${esc(I.name)}</b><br>${esc(I.bio)}</div>
        <div class="ig-btns"><button>Edit profil</button><button>Bagikan profil</button></div>
        <div class="ig-grid">${I.posts.map(p => `<div class="pt" data-id="${p.id}" style="background:${p.bg}">${p.img ? `<img src="${esc(p.img)}" alt="">` : p.e}</div>`).join('')}</div>
      </div></div>`;
    $$('.pt', v).forEach(t => t.onclick = () => {
      const p = I.posts.find(x => x.id === t.dataset.id);
      viewer($('.scroll', v), `<div class="ig-post"><div class="ig-ph"><div class="ig-av sm">👤</div><b>${esc(I.user)}</b></div>
        <div class="pbig" style="background:${p.bg}">${p.img ? `<img src="${esc(p.img)}" alt="">` : p.e}</div>
        <div class="ig-act">🤍 💬 ✈️</div><div class="ig-body"><b>${p.likes} suka</b><br><b>${esc(I.user)}</b> ${esc(p.cap)}
        ${p.comments.map(c => `<br><b>${esc(c.u)}</b> ${esc(c.t)}`).join('')}</div></div>`, 'Postingan');
      fire('open:post:' + p.id);
    });
  };
  main();
};

/* ---------- Peta ---------- */
RENDER.maps = (v) => {
  const M = STORY.maps;
  v.innerHTML = `<div class="app-body" style="--accent:#0a84ff">
    <div class="map-bg"></div>
    <div class="map-sheet">
      <div class="search" style="margin:4px 0 12px">🔍 Cari di Peta</div>
      <div class="chips"><span>🏠 ${esc(M.home)}</span><span>💼 ${esc(M.work)}</span><span>➕ Tambah</span></div>
      <div class="ph-h">Terbaru</div>
      <div class="group" style="margin:0">${M.recents.map(r => `<div class="row" data-id="${r.id}"><b>${esc(r.name)}</b><small>${esc(r.dist)}</small></div>`).join('')}</div>
    </div></div>`;
  $$('.row', v).forEach(r => r.onclick = () => {
    const p = M.recents.find(x => x.id === r.dataset.id);
    viewer($('.map-sheet', v), `<div class="large">${esc(p.name)}</div><div class="note-body" style="padding-top:0">${esc(p.dist)}\n\n${esc(p.note)}</div>`, 'Peta');
    fire('open:place:' + p.id);
  });
};

/* ---------- File ---------- */
RENDER.files = (v) => {
  const F = STORY.files;
  const openFile = (host, id) => {
    const f = F.items[id];
    viewer(host, `<div class="large" style="font-size:22px">${esc(f.name)}</div><div class="note-date">${esc(f.size)} · ${esc(f.date)}</div><div class="note-body">${esc(f.text)}</div>`, 'File');
    fire('open:file:' + id);
  };
  const fileRows = ids => ids.map(id => `<div class="row" data-f="${id}"><b>📄 ${esc(F.items[id].name)}</b><small>${esc(F.items[id].date)} · ${esc(F.items[id].size)}</small></div>`).join('');
  const bind = box => $$('[data-f]', box).forEach(r => r.onclick = () => openFile(box, r.dataset.f));
  tabApp(v, [
    { id: 'rec', label: 'Terbaru', icon: '🕘', render: box => {
      box.innerHTML = `<div class="nav"><span></span><span></span><span></span></div><div class="scroll"><div class="large">Terbaru</div><div class="group">${fileRows(F.recents)}</div></div>`; bind(box); } },
    { id: 'shr', label: 'Dibagikan', icon: '👥', render: box => {
      box.innerHTML = `<div class="nav"><span></span><span></span><span></span></div><div class="scroll"><div class="large">Dibagikan</div><div class="ph"><small>Belum ada yang dibagikan</small></div></div>`; } },
    { id: 'brw', label: 'Jelajahi', icon: '📁', render: box => {
      const root = () => {
        box.innerHTML = `<div class="nav"><span></span><span></span><span>Edit</span></div><div class="scroll"><div class="large">Jelajahi</div><div class="search">🔍 Cari</div>
          <div class="ph-h" style="padding:0 20px">Lokasi</div><div class="group">${Object.keys(F.locations).map(k => `<div class="row" data-l="${esc(k)}"><b>📁 ${esc(k)}</b></div>`).join('')}</div></div>`;
        $$('[data-l]', box).forEach(r => r.onclick = () => {
          const ids = F.locations[r.dataset.l];
          box.innerHTML = `<div class="nav"><button id="fb">‹ Jelajahi</button><span class="ttl">${esc(r.dataset.l)}</span><span></span></div><div class="scroll"><div class="group">${fileRows(ids) || ''}</div></div>`;
          $('#fb', box).onclick = root; bind(box);
        });
      };
      root(); } }
  ], '#0a84ff', 'brw');
};

/* ---------- Gmail ---------- */
RENDER.gmail = (v) => {
  const G = STORY.gmail;
  const read = {}; // status dibaca disimpan di S.msgRead dengan prefix 'mail:'
  const list = () => {
    v.innerHTML = `<div class="app-body" style="--accent:#d93025">
      <div class="nav"><span>☰</span><span class="ttl">Gmail</span><span></span></div>
      <div class="scroll"><div class="search">🔍 Telusuri email</div><div class="ph-h" style="padding:0 20px">Utama</div>
      <div class="msgs">${G.map(m => {
        const un = m.unread && !S.msgRead['mail:' + m.id];
        return `<div class="m-row" data-id="${m.id}"><div class="avatar" style="background:#d93025">${esc(m.from[0])}</div>
          <div class="m-info"><b style="${un ? '' : 'font-weight:500'}">${esc(m.from)}<small>${esc(m.time)}</small></b><span style="${un ? 'color:#000;font-weight:600' : ''}">${esc(m.subj)}</span></div></div>`;
      }).join('')}</div></div></div>`;
    $$('.m-row', v).forEach(r => r.onclick = () => mail(r.dataset.id));
  };
  const mail = id => {
    const m = G.find(x => x.id === id);
    v.innerHTML = `<div class="app-body" style="--accent:#d93025"><div class="nav"><button id="gb">‹</button><span></span><span>🗑️ ⋯</span></div>
      <div class="scroll"><div class="note-body"><h2>${esc(m.subj)}</h2><b>${esc(m.from)}</b> · ${esc(m.time)}\n\n${esc(m.body)}</div></div></div>`;
    $('#gb', v).onclick = list;
    S.msgRead['mail:' + id] = 1; save();
    fire('open:mail:' + id);
  };
  list();
};

/* ---------- Telepon ---------- */
RENDER.phone = (v) => {
  const P = STORY.phone;
  tabApp(v, [
    { id: 'rec', label: 'Terbaru', icon: '🕘', render: box => {
      box.innerHTML = `<div class="nav"><span>Edit</span><span></span><span></span></div><div class="scroll"><div class="large">Terbaru</div>
        <div class="group">${P.recents.map(r => `<div class="row"><b style="${r.missed ? 'color:#ff3b30' : ''}">${esc(r.name)}</b><small>${esc(r.kind)} · ${esc(r.time)}</small></div>`).join('')}</div></div>`; } },
    { id: 'con', label: 'Kontak', icon: '👤', render: box => {
      box.innerHTML = `<div class="nav"><span></span><span></span><span>➕</span></div><div class="scroll"><div class="large">Kontak</div><div class="search">🔍 Cari</div>
        <div class="group">${P.contacts.map(c => `<div class="row"><b>${esc(c)}</b></div>`).join('')}</div></div>`; } },
    { id: 'key', label: 'Keypad', icon: '⌗', render: box => {
      let num = '';
      const draw = () => {
        box.innerHTML = `<div class="dial"><div class="dnum">${esc(num) || '&nbsp;'}</div>
          <div class="dgrid">${[1,2,3,4,5,6,7,8,9,'*',0,'#'].map(k => `<button class="key" data-k="${k}" style="background:#e5e5ea;color:#000">${k}<small>${LETTERS[k] || ''}</small></button>`).join('')}</div>
          <button class="dcall">📞</button></div>`;
        $$('.dgrid .key', box).forEach(b => b.onclick = () => { if (num.length < 15) { num += b.dataset.k; sfx.key(); draw(); } });
        $('.dcall', box).onclick = () => {
          const a = P.dial[num];
          if (a) runAction(a); else toast('Tidak ada sinyal');
          num = ''; draw();
        };
        $('.dnum', box).onclick = () => { num = num.slice(0, -1); draw(); };  // ketuk angka = hapus 1 digit
      };
      draw(); } },
    { id: 'vm', label: 'Pesan Suara', icon: '📼', render: box => {
      box.innerHTML = `<div class="nav"><span></span><span></span><span></span></div><div class="scroll"><div class="large">Pesan Suara</div>
        <div class="group">${P.voicemail.map(m => `<div class="row"><b>${esc(m.from)}</b><small>${esc(m.time)} · ${esc(m.dur)}</small><div style="margin-top:6px;font-size:14px">${esc(m.text)}</div></div>`).join('')}</div></div>`; } }
  ], '#0a84ff', 'key');
};

/* ---------- Pengaturan ---------- */
RENDER.settings = (v) => {
  v.innerHTML = `<div class="app-body"><div class="nav"><span></span><span></span><span></span></div><div class="scroll"><div class="large">Pengaturan</div>
    <div class="search">🔍 Cari</div>
    <div class="group"><div class="row" style="display:flex;gap:12px;align-items:center"><div class="avatar">P</div><div><b>fai</b><small>Akun Apple, iCloud, Media &amp; Pembelian</small></div></div></div>
    ${STORY.settings.map(g => `<div class="group">${g.map(r => `<div class="row set"><span class="si" style="background:${r.c}">${r.i}</span><b>${esc(r.t)}</b>
      ${'toggle' in r ? `<span class="tg${r.toggle ? ' on' : ''}"><i></i></span>` : `<small>${esc(r.v || '')} ›</small>`}</div>`).join('')}</div>`).join('')}
    </div></div>`;
  $$('.tg', v).forEach(t => t.onclick = () => t.classList.toggle('on'));
};

/* =====================================================================
   PANGGILAN FACETIME
   ===================================================================== */
const call = { active: false, declines: 0, ring: null, timer: null, sec: 0, timeouts: [] };
const facetimeRingtone = new Audio('./sounds/facetime.mp3');
facetimeRingtone.loop = true;
facetimeRingtone.volume = 0.85;

function setCallMode(mode) {
  $('#call-ring').classList.toggle('hidden', mode !== 'ring');
  $('#call-live').classList.toggle('hidden', mode !== 'live');
}
function ringFallback() { sfx.ring(); vibrate([400, 200, 400]); }
function playCallRing() {
  vibrate([400, 200, 400]);
  try {
    facetimeRingtone.currentTime = 0;
    facetimeRingtone.play().catch(() => {
      if (!call.active) return;
      ringFallback();
      call.ring = setInterval(ringFallback, 2200);
    });
  } catch (e) {
    ringFallback();
    call.ring = setInterval(ringFallback, 2200);
  }
}

function startCall() {
  if (call.active) return;
  call.active = true;
  updateStatusBarTime();
  $('#call-name').textContent = STORY.call.caller;
  $('#call-sub').textContent = STORY.call.sub;
  $('#call-cap').textContent = '';
  setCallMode('ring');
  $('#call').classList.add('active');
  $('#banner').classList.remove('show');
  syncChrome();
  playCallRing();
}
function stopRing() {
  clearInterval(call.ring); call.ring = null;
  facetimeRingtone.pause();
  facetimeRingtone.currentTime = 0;
}
function hideCall() {
  $('#call').classList.remove('active');
  call.active = false;
  updateStatusBarTime();
  syncChrome();
}
function declineCall() {
  stopRing(); hideCall();
  call.declines++;
  if (call.declines < 3) setTimeout(startCall, 8000);   // menelepon lagi (maks. 3x)
}
function acceptCall() {
  stopRing(); vibrate(20);
  setCallMode('live');
  call.sec = 0;
  $('#call-sub').textContent = '00:00';
  call.timer = setInterval(() => {
    call.sec++;
    const m = String(Math.floor(call.sec / 60)).padStart(2, '0'), s = String(call.sec % 60).padStart(2, '0');
    $('#call-sub').textContent = `${m}:${s}`;
    if (call.sec >= STORY.call.duration) endCall();
  }, 1000);
  STORY.call.script.forEach(l => call.timeouts.push(setTimeout(() => {
    $('#call-cap').textContent = l.text; vibrate(25);
  }, l.t * 1000)));
}
function endCall() {
  clearInterval(call.timer); call.timeouts.forEach(clearTimeout); call.timeouts = [];
  $('#call-sub').textContent = 'Panggilan berakhir';
  $('#call-cap').textContent = '';
  setTimeout(() => { hideCall(); fire('call:end'); }, 1200);
}
function initCall() {
  $('#c-decline').onclick = declineCall;
  $('#c-accept').onclick = acceptCall;
  $('#c-end').onclick = endCall;
  $$('[data-toggle]').forEach(b => b.onclick = () => b.classList.toggle('on'));
}

/* =====================================================================
   NOTIFIKASI, TOAST, TRIGGER
   ===================================================================== */
let bannerTimer, bannerAction = null;
function banner(o) {
  $('#bn-icon').textContent = o.icon || '🔔';
  $('#bn-title').textContent = o.title || '';
  $('#bn-body').textContent = o.body || '';
  bannerAction = o.action || null;
  $('#banner').classList.add('show');
  sfx.notif(); vibrate([40, 30, 40]);
  clearTimeout(bannerTimer);
  bannerTimer = setTimeout(() => $('#banner').classList.remove('show'), 5000);
}
function initBanner() {
  $('#banner').onclick = () => {
    $('#banner').classList.remove('show');
    if (bannerAction) bannerAction();
  };
}
let toastTimer;
function toast(text) {
  const t = $('#toast'); t.textContent = text; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

function runAction(a) {
  if (a.type === 'call') return startCall();
  if (a.type === 'toast') return toast(a.text);
  if (a.type === 'banner') {
    let action = null;
    if (a.open) {
      const [app, deep] = a.open.split(':');
      action = () => { if (!call.active && (current === 'home' || openId)) openApp(app, null, deep); };
    }
    banner({ icon: a.icon, title: a.title, body: a.body, action });
  }
}
/* Setiap trigger hanya jalan sekali (tersimpan di S.fired) */
function fire(ev) {
  STORY.triggers.filter(t => t.on === ev && (t.repeatable || !S.fired[t.id])).forEach(t => {
    if (!t.repeatable) { S.fired[t.id] = 1; save(); }
    setTimeout(() => runAction(t.do), t.delay || 0);
  });
}

/* =====================================================================
   INIT
   ===================================================================== */
initTitle();
initLock();
initPass();
initCall();
initBanner();
onSwipeUp($('#homebar'), goHome, 30);
$('#homebar').addEventListener('click', goHome);   // klik juga bisa di desktop
syncChrome();
updateStatusBarTime();
setInterval(updateStatusBarTime, 15000);

/* Scale HP agar selalu muat di jendela (hanya desktop; di HP layar penuh) */
function fitPhone() {
  if (window.matchMedia('(max-width:500px)').matches) { phone.style.removeProperty('--s'); return; }
  const s = Math.min((innerHeight - 32) / 844, (innerWidth - 32) / 390, 1.25);
  phone.style.setProperty('--s', Math.max(s, 0.3).toFixed(3));
}
fitPhone();
addEventListener('resize', fitPhone);


