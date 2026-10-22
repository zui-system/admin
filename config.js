/* Pengaturan ZUI ADMIN (admin.zuisystem.com)
   Satu aplikasi admin untuk semua aplikasi Zui. Setiap aplikasi = satu blok di daftar "apps".

   jenis:
     "zuisystem" = pola ZUI ERP (dulu Zui System): perusahaan/{id}.langganan, bantuan, sistem/bayar
     "standar"   = pola ZUI KONTRAKTOR, ZUI JURNAL dan ZUI TO-DO: companies/{id} plan/until/free, subreqs, zconfig/pay
     "finance"   = pola ZUI FINANCE: workspaces/{id}/billing/plan, planRequests, chats (lihat zui-admin-kontrak.txt di repo Finance)
   Aplikasi Zui baru sebaiknya memakai pola "standar" agar cukup menambah satu blok di bawah.

   Aplikasi PERTAMA di daftar dipakai untuk tombol "Masuk dengan Google". */
window.ZUI_ADMIN = {
  adminEmail: "admin.zuisystem@gmail.com",

  apps: [
    {
      id: "sys",
      nama: "ZUI ERP",
      jenis: "zuisystem",
      warna: "#2FA8D8",
      url: "https://erp.zuisystem.com",
      firebase: {
        apiKey: "AIzaSyAR-TIaq1VH0OOD2XGx_IhedaH7mwKpW30",
        authDomain: "zuisystem.firebaseapp.com",
        projectId: "zuisystem",
        storageBucket: "zuisystem.firebasestorage.app",
        messagingSenderId: "55666230248",
        appId: "1:55666230248:web:783df0dc060a1d7ce3da5d"
      }
    },
    {
      id: "kon",
      nama: "ZUI KONTRAKTOR",
      jenis: "standar",
      warna: "#F2B01E",
      url: "https://kontraktor.zuisystem.com",
      // samakan dengan aturan percobaan di firestore.rules aplikasinya
      percobaanHari: 14,
      tenggangHari: 3,
      mulaiPercobaan: "2026-10-15",
      firebase: {
        apiKey: "AIzaSyCmDBwFbquqMpdadgukA7Ti1Kq3E_loLgM",
        authDomain: "kontraktor-zui.firebaseapp.com",
        projectId: "kontraktor-zui",
        storageBucket: "kontraktor-zui.firebasestorage.app",
        messagingSenderId: "520179011046",
        appId: "1:520179011046:web:aa8a77761c008138e91a27"
      }
    },
    {
      id: "jur",
      nama: "ZUI JURNAL",
      jenis: "standar",
      warna: "#5BB4D2",
      url: "https://jurnal.zuisystem.com",
      // samakan dengan SUBC di index.html dan firestore.rules ZUI JURNAL
      percobaanHari: 14,
      tenggangHari: 3,
      mulaiPercobaan: "2026-10-17",
      firebase: {
        apiKey: "AIzaSyDRH3IeFVmwsYvw0qVMj0DGVut9g50p4s0",
        authDomain: "jurnal-9f607.firebaseapp.com",
        projectId: "jurnal-9f607",
        storageBucket: "jurnal-9f607.firebasestorage.app",
        messagingSenderId: "717493302320",
        appId: "1:717493302320:web:6d1189f8bd7956e9e269f5"
      }
    },
    {
      id: "tdo",
      nama: "ZUI TO-DO",
      jenis: "standar",
      warna: "#6C8CFF",
      url: "https://todo.zuisystem.com",
      // samakan dengan SUBC di index.html dan firestore.rules ZUI TO-DO
      percobaanHari: 14,
      tenggangHari: 3,
      mulaiPercobaan: "2026-10-18",
      // harga awal (dipakai sampai Anda menyimpan harga di menu Harga). Harus sama dengan DEFP/DEFPM di index.html ZUI TO-DO
      hargaAwal:    { starter: { 1: 19000, 6: 95000, 12: 190000 }, pro: { 1: 29000, 6: 145000, 12: 290000 }, business: { 1: 49000, 6: 245000, 12: 490000 } },
      hargaAwalMYR: { starter: { 1: 5, 6: 25, 12: 50 }, pro: { 1: 8, 6: 40, 12: 80 }, business: { 1: 13, 6: 65, 12: 130 } },
      firebase: {
        apiKey: "AIzaSyBgI_elQYC1ubDVtaxTEBiGUxCHc7-xjlQ",
        authDomain: "zui-todo.firebaseapp.com",
        projectId: "zui-todo",
        storageBucket: "zui-todo.firebasestorage.app",
        messagingSenderId: "661168023257",
        appId: "1:661168023257:web:07a176ea382c8b9fb6c0c8"
      }
    },
    {
      id: "fin",
      nama: "ZUI FINANCE",
      jenis: "finance",
      warna: "#2BB673",
      url: "https://finance.zuisystem.com",
      // samakan dengan index.html ZUI FINANCE (planInfo: 14 hari percobaan Pro sejak buku dibuat, lalu paket Gratis)
      percobaanHari: 14,
      // harga Rupiah per paket: 1 = bulanan (30 hari), 12 = tahunan (365 hari). Harus sama dengan PL di index.html ZUI FINANCE
      hargaAwal: { pro: { 1: 99000, 12: 990000 }, bisnis: { 1: 199000, 12: 1990000 } },
      firebase: {
        apiKey: "AIzaSyA2sNMzxL0OHMSISirTJ-odR6xzGyY7SIc",
        authDomain: "akuntansi-zuisystem.firebaseapp.com",
        projectId: "akuntansi-zuisystem",
        storageBucket: "akuntansi-zuisystem.firebasestorage.app",
        messagingSenderId: "185991014669",
        appId: "1:185991014669:web:02e913399e410e6c27a844"
      }
    }

    /* Contoh aplikasi baru (pola standar):
    ,{
      id: "xyz",
      nama: "ZUI XYZ",
      jenis: "standar",
      warna: "#7A86F0",
      url: "https://xyz.zuisystem.com",
      percobaanHari: 14, tenggangHari: 3, mulaiPercobaan: "2026-11-01",
      firebase: { apiKey: "...", authDomain: "...", projectId: "...", storageBucket: "...", messagingSenderId: "...", appId: "..." }
    }
    */
  ]
};
