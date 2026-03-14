# OpenClaw Nextcloud Integration

[![GitHub license](https://img.shields.io/github/license/far-ux/openclaw-nextcloud-integration)](https://github.com/far-ux/openclaw-nextcloud-integration/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/far-ux/openclaw-nextcloud-integration)](https://github.com/far-ux/openclaw-nextcloud-integration/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/far-ux/openclaw-nextcloud-integration)](https://github.com/far-ux/openclaw-nextcloud-integration/issues)

Modul integrasi OpenClaw dengan Nextcloud untuk manajemen file, catatan, tugas, kalender, dan kontak.

## 🚀 Fitur

- 📂 **Manajemen File**: Upload, download, hapus, dan cari file di Nextcloud
- 📝 **Manajemen Catatan**: Buat, edit, dan kelola catatan Nextcloud
- ✅ **Manajemen Tugas**: Kelola tugas dan todo list melalui CalDAV
- 📅 **Manajemen Kalender**: Buat dan kelola acara kalender
- 👤 **Manajemen Kontak**: Kelola buku alamat dan kontak melalui CardDAV

## 📋 Prasyarat

- Node.js 20+
- Instance Nextcloud yang berjalan
- Akun Nextcloud dengan izin yang cukup

## 🚀 Quick Start

### Instalasi

```bash
# Kloning repositori
git clone https://github.com/far-ux/openclaw-nextcloud-integration.git
cd openclaw-nextcloud-integration

# Instal dependensi
npm install
```

### Konfigurasi

Buat file `.env` di direktori proyek:

```bash
NEXTCLOUD_URL=https://cloud.example.com
NEXTCLOUD_USER=your_username
NEXTCLOUD_TOKEN=your_app_password_or_login_password
```

> 💡 **Tips**: Gunakan App Password dari pengaturan keamanan Nextcloud untuk keamanan yang lebih baik.

### Menjalankan

```bash
# Lihat daftar file
npm run start -- files list

# Buat catatan baru
npm run start -- notes create --title "Catatan Test" --content "Ini adalah catatan test"
```

## 📚 Dokumentasi

- [Arsitektur Sistem](docs/architecture.md)
- [Runbook Setup](docs/runbook.md)
- [Konfigurasi](docs/configuration.md)
- [Contoh Penggunaan](examples/usage-examples.js)

## 🛠️ Menggunakan sebagai Modul OpenClaw

Salin modul skill ke direktori agen OpenClaw Anda:

```bash
mkdir -p ~/.openclaw/agents/atmo/skills/nextcloud
cp -r * ~/.openclaw/agents/atmo/skills/nextcloud/
```

Kemudian gunakan modul di skrip OpenClaw:

```javascript
const nextcloud = require('/root/.openclaw/agents/atmo/skills/nextcloud/index.js');

// Contoh: Lihat daftar file
async function listFiles() {
  const result = await nextcloud.files.list();
  console.log(result.data);
}
```

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detailnya.

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat Pull Request atau Issue untuk perbaikan atau fitur baru.

## 📞 Dukungan

Jika Anda membutuhkan dukungan, silakan buat issue di repositori ini atau hubungi tim OpenClaw.