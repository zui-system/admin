# ZUI ADMIN — panduan pasang (admin.zuisystem.com)

Satu aplikasi admin untuk semua aplikasi Zui: ZUI ERP (dulu bernama Zui System), ZUI KONTRAKTOR, ZUI JURNAL, ZUI TO-DO dan ZUI FINANCE sekarang, aplikasi baru nanti.

## Isi folder

| File | Fungsi |
|---|---|
| `index.html` | Aplikasinya |
| `config.js` | Daftar aplikasi Zui + kunci Firebase masing-masing. Aplikasi baru cukup ditambah satu blok di sini |
| `sw.js`, `manifest.webmanifest`, `icon-*.png` | Supaya bisa dipasang di HP/komputer |
| `CNAME` | Alamat `admin.zuisystem.com` untuk GitHub Pages |

## Pembaruan 22 Okt 2026: ZUI FINANCE tersambung (Zui Admin 1.5)

- **ZUI FINANCE** ditambahkan di `config.js` dengan pola baru `finance`. Finance **tidak diubah**: paket, harga, data dan alurnya tetap seperti yang sudah ada (lihat `zui-admin-kontrak.txt` di repo Finance).
  - Satu buku usaha (`workspaces/{id}`) = satu pelanggan. Percobaan Pro 14 hari sejak buku dibuat, lalu turun ke paket **Gratis** (tidak hanya-baca).
  - Paket Pro Rp 99.000/bulan atau Rp 990.000/tahun, Bisnis Rp 199.000/bulan atau Rp 1.990.000/tahun. Harga ada di `index.html` Finance (`PL`) dan `hargaAwal` di `config.js`; bila diubah, ubah keduanya. Menu **Harga → ZUI FINANCE** hanya menampilkan harga.
- **Antrean**: permintaan paket dari Finance (`planRequests`). **Aktifkan** menambah 30 hari (bulanan) atau 365 hari (tahunan) dari tanggal berakhir yang masih berlaku, lalu mencatat pemasukan. **Tolak** mengirim alasan ke lonceng pelanggan.
- **Pelanggan**: perpanjang +30/+365 hari, atur tanggal manual, Bisnis selamanya, atau turunkan ke Gratis.
- **Pesan**: chat dari ikon chat Finance (`chats`). Percakapan ditandai "baru" sampai dibalas.
- Admin tidak bisa membaca data pembukuan pelanggan.

### Langkah sekali untuk project akuntansi-zuisystem
1. Firebase Console project **akuntansi-zuisystem** → Firestore Database → Rules → tempel `firestore.rules` terbaru dari repo ZUI FINANCE → **Publish**. Isinya: `isAdmin()` kini mengizinkan `admin.zuisystem@gmail.com`, dan ada koleksi `adminPayments` untuk pemasukan.
2. Authentication → Sign-in method → pastikan **Google** aktif (sudah dipakai Finance).
3. Authentication → Settings → Authorized domains → tambahkan `admin.zuisystem.com`.
4. (Opsional) Safelist Client ID project **zuisystem** di Google sign-in project akuntansi-zuisystem (langkah 4 di bawah) supaya tidak perlu menekan **Sambungkan**.
5. Unggah ulang Zui Admin (file `index.html`, `config.js` berubah), lalu cek Pengaturan → Aplikasi tersambung: ZUI FINANCE **tersambung**.
6. Uji: di Finance (akun pemilik buku) → Pengaturan → Paket → Ajukan Pro → muncul di Antrean → Aktifkan → paket di Finance langsung berubah.

## Pembaruan 18 Okt 2026: ZUI TO-DO tersambung (Zui Admin 1.4)

- **ZUI TO-DO** ditambahkan di `config.js` dengan pola `standar` (sama dengan ZUI KONTRAKTOR dan ZUI JURNAL): percobaan 14 hari mulai 18 Okt 2026, tenggang 3 hari, lalu tugas hanya-baca. Tiap pengguna To-Do = satu "perusahaan" (ID = UID pengguna).
- Paket Starter / Pro / Bisnis dengan **harga awal khusus To-Do** (lebih murah dari Kontraktor): Rp 19.000 / 29.000 / 49.000 per bulan, Rp 95.000 / 145.000 / 245.000 per 6 bulan, Rp 190.000 / 290.000 / 490.000 per tahun; Ringgit RM 5 / 8 / 13 per bulan. Ubah di **Harga → ZUI TO-DO**, lalu simpan (QRIS, DuitNow, catatan, WhatsApp juga di sana).
- Fitur baru di Zui Admin: setiap aplikasi bisa punya harga awal sendiri lewat `hargaAwal` dan `hargaAwalMYR` di `config.js`.
- Antrean menerima permintaan bayar To-Do, Pesan menerima chat dari halaman **Kelola langganan** dan **Umpan balik → Chat dengan admin** di To-Do (termasuk foto bukti bayar).

### Langkah sekali untuk project zui-todo
1. Firebase Console project **zui-todo** → Firestore Database → Rules → tempel `firestore.rules` dari paket ZUI TO-DO 26.01 → **Publish**.
2. Authentication → Sign-in method → pastikan **Google** aktif.
3. Authentication → Settings → Authorized domains → tambahkan `admin.zuisystem.com` (dan domain To-Do, mis. `todo.zuisystem.com`).
4. (Opsional) Safelist Client ID project **zuisystem** di Google sign-in project zui-todo (langkah 4 di bawah) supaya tidak perlu menekan **Sambungkan**.
5. Unggah ulang Zui Admin (file `index.html`, `config.js`, `sw.js` berubah), lalu cek Pengaturan → Aplikasi tersambung: ZUI TO-DO **tersambung**.

## Pembaruan 17 Okt 2026: ZUI JURNAL tersambung

- Nama "Zui System" di Zui Admin diganti menjadi **ZUI ERP**, dengan alamat `https://erp.zuisystem.com`. Project Firebase tetap `zuisystem`.
- **ZUI JURNAL** ditambahkan dengan pola `standar` (sama dengan ZUI KONTRAKTOR): percobaan 14 hari mulai 17 Okt 2026, tenggang 3 hari, lalu hanya-baca. Tiap pengguna Jurnal = satu "perusahaan" (ID = UID pengguna).
- Paket Starter / Pro / Bisnis. Harga awalnya sama dengan bawaan ZUI KONTRAKTOR. **Atur harga ZUI JURNAL sendiri di Harga → ZUI JURNAL**, lalu simpan. Pengguna Jurnal melihat harga Rupiah + QRIS atau Ringgit + DuitNow sesuai pilihan mereka di halaman Langganan.
- Pembagian fitur per paket diatur di `index.html` ZUI JURNAL (variabel `FEAT` dan `PKF`).

### Langkah sekali untuk project jurnal-9f607
1. Firebase Console project **jurnal-9f607** → Firestore Database → Rules → tempel `firestore.rules` dari paket ZUI JURNAL → **Publish**. Fungsi `superAdmin()` di dalamnya dipakai Zui Admin.
2. Authentication → Sign-in method → aktifkan **Google** (dipakai Zui Admin untuk masuk ke project ini).
3. Authentication → Settings → Authorized domains → tambahkan `admin.zuisystem.com`.
4. (Opsional) Safelist Client ID project **zuisystem** di Google sign-in project jurnal-9f607, seperti langkah 4 di bawah, supaya tidak perlu menekan **Sambungkan**.
5. Unggah ulang Zui Admin (file `config.js` berubah), lalu cek Pengaturan → Aplikasi tersambung: ZUI JURNAL **tersambung**.

## Firestore Rules

- **Pembaruan 16 Okt 2026**: ZUI ERP kini punya DuitNow QR untuk pelanggan Ringgit. Terbitkan ulang `firestore.rules` dari paket ZUI ERP terbaru (kolom `duitnow`, `catatanMY`). Zui Admin lama di `zuisystem.com/admin/` sudah dihapus.

- **ZUI ERP**: tidak perlu diubah. Fungsi `sa()` sudah mengizinkan `admin.zuisystem@gmail.com`.
- **ZUI KONTRAKTOR**: pakai `firestore.rules` dari ZUI KONTRAKTOR versi 13 (chat Langganan dan mata uang di permintaan bayar). Salin seluruh isinya ke Firebase Console project **kontraktor-zui** → Firestore Database → Rules → Publish. Fungsi `superAdmin()` tetap dipakai Zui Admin.

Zui Admin lama dan halaman "Admin langganan" di ZUI KONTRAKTOR tetap jalan berdampingan selama uji coba.

## Langkah pasang

### 1. Unggah ke GitHub Pages
1. Buat repo baru, misalnya `RHSystem/admin`.
2. Unggah semua file di folder ini (termasuk `CNAME`).
3. Repo → Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)` → Save.
4. Custom domain akan terisi `admin.zuisystem.com` dari file CNAME. Centang **Enforce HTTPS** setelah tersedia.

### 2. DNS di Rumahweb
Tambahkan record:
- Tipe: `CNAME`
- Nama/host: `admin`
- Nilai: `rhsystem.github.io`

Tunggu beberapa menit sampai beberapa jam.

### 3. Izinkan domain di KEDUA project Firebase
Lakukan di project **zuisystem** dan **kontraktor-zui**:
Firebase Console → Authentication → Settings → **Authorized domains** → Add domain → `admin.zuisystem.com`.

Tanpa langkah ini login Google ditolak dengan pesan "Domain ini belum diizinkan".

### 4. (Opsional) Login sekali untuk semua project
Saat masuk, Zui Admin login ke ZUI ERP lalu mencoba memakai login Google yang sama untuk ZUI KONTRAKTOR.
Bila project kontraktor menolaknya, Ringkasan menampilkan kartu **"ZUI KONTRAKTOR belum tersambung"**. Tekan **Sambungkan**, pilih akun admin. Ini cukup **sekali per perangkat**.

Supaya tidak perlu menekan Sambungkan sama sekali:
1. Buka Google Cloud Console project **zuisystem** → APIs & Services → Credentials → salin **Client ID** "Web client (auto created by Google Service)".
2. Firebase Console project **kontraktor-zui** → Authentication → Sign-in method → Google → **Safelist client IDs from external projects** → tempel Client ID tadi → Save.

### 5. Uji
1. Buka `https://admin.zuisystem.com`, masuk dengan Google (`admin.zuisystem@gmail.com`).
2. Pengaturan → Aplikasi tersambung: keduanya **tersambung**.
3. Pengaturan → Atur PIN, lalu Aktifkan notifikasi.
4. Dari akun pelanggan percobaan, kirim permintaan bayar di ZUI KONTRAKTOR dan pengajuan langganan di ZUI ERP. Keduanya harus muncul di **Antrean** dengan bunyi dan angka di lonceng.
5. Aktifkan satu, tolak satu. Cek di aplikasi pelanggan bahwa masa aktif berubah / alasan penolakan tampil.

## Isi aplikasi

- **Ringkasan**: pemasukan bulan ini dan 6 bulan terakhir (per aplikasi), jumlah pelanggan per status, daftar yang berakhir ≤ 7 hari.
- **Antrean**: semua permintaan bayar dari semua aplikasi. *Aktifkan* (tekan dua kali), *Tolak* dengan alasan. Untuk ZUI ERP ada *Periksa resit & chat* (pembacaan resit otomatis seperti Zui Admin lama).
- **Pelanggan**: saring per aplikasi dan status, cari nama/email. Buka satu untuk perpanjang (+1/+6/+12 bulan), atur tanggal manual, gratis selamanya, hentikan, atau kembali ke percobaan.
- **Pesan**: chat pelanggan ZUI ERP, ZUI KONTRAKTOR, ZUI JURNAL, ZUI TO-DO (termasuk foto bukti bayar) dan ZUI FINANCE. Dari chat Kontraktor bisa langsung Aktifkan/Tolak permintaan bayar perusahaan itu.
- **Harga**: harga dan cara bayar per aplikasi. ZUI KONTRAKTOR punya dua set: Rupiah + QRIS dan Ringgit + DuitNow (perusahaan bermata uang Ringgit melihat harga Ringgit).
- **Pengaturan**: status sambungan per project, notifikasi, PIN, tema, keluar.

### Catatan
- **Pemasukan** dihitung dari pembayaran yang diaktifkan lewat antrean. Angka utama dan grafik dalam Rupiah; Ringgit ditampilkan terpisah. Perpanjangan manual dari halaman pelanggan tidak tercatat sebagai pemasukan.
- **Gratis selamanya** di ZUI ERP disimpan sebagai paket "Gratis selamanya" sampai 31 Des 2099 (aturan ZUI ERP hanya mengenal paket + tanggal). Di ZUI KONTRAKTOR memakai tanda `free`.
- **Pemberitahuan** muncul selama Zui Admin terbuka, termasuk di tab latar belakang. Notifikasi saat aplikasi tertutup penuh butuh server (Cloud Functions, paket Blaze); belum dipakai karena masih di paket gratis Spark.
- **Batas sesi**: 30 hari untuk aplikasi terpasang, 1 hari di peramban biasa.

## Menambah aplikasi Zui baru

Pakai pola yang sama dengan ZUI KONTRAKTOR (`companies/{id}` dengan `plan`, `until`, `free`, `created_at`; koleksi `subreqs`; dokumen `zconfig/pay`; fungsi `superAdmin()` di rules). Lalu:
1. Tambah satu blok `jenis: "standar"` di `config.js` (contohnya ada di file itu).
2. Tambahkan `admin.zuisystem.com` ke Authorized domains project barunya.
3. (Opsional) Safelist Client ID seperti langkah 4.

## Setelah admin baru selesai diuji

1. **ZUI ERP**: hapus folder `admin/` dari situs zuisystem.com.
2. **ZUI KONTRAKTOR**: hapus halaman "Admin langganan" (menu `#zadmin`).
3. **JANGAN hapus** fungsi `sa()` di rules ZUI ERP maupun `superAdmin()` di rules ZUI KONTRAKTOR. Zui Admin baru bergantung pada keduanya.
