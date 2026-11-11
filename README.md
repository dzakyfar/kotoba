# Kotoba

Kotoba adalah aplikasi belajar kosakata Minna no Nihongo Bab 1–50 dengan FSRS-6 lokal.

## Pasang di Android
1. Buka URL GitHub Pages Kotoba di Chrome.
2. Buka menu Chrome (⋮).
3. Pilih **Pasang aplikasi** atau **Tambahkan ke layar utama**.
4. Buka Kotoba dari ikon di layar utama.

## Pembaruan
Perbarui file di repository ini. Ikon dan alamat aplikasi tetap sama. Service worker menggunakan nama cache berversi agar file baru menggantikan cache lama saat Chrome memeriksa pembaruan.

## Penyimpanan
Progres, jadwal FSRS, pengaturan, dan riwayat review disimpan di perangkat melalui penyimpanan situs. Tidak ada akun atau sinkronisasi cloud. Jangan hapus data situs tanpa mengekspor cadangan JSON terlebih dahulu.

## Berkas aplikasi
- `index.html`: pembuka aplikasi dan pemuat berkas terkompresi.
- `payload/`: isi aplikasi Kotoba.
- `manifest.webmanifest`: pengaturan instalasi.
- `sw.js`: cache offline dan pembaruan.
- `icon-192.svg`, `icon-512.svg`: ikon aplikasi.

**Catatan:** repository ini bersifat publik karena menggunakan GitHub Pages gratis. Isi aplikasi dan kosakata dapat dilihat publik; progres belajar tidak ikut diunggah.

Deployment dipicu ulang setelah GitHub Pages diatur ke **GitHub Actions**.