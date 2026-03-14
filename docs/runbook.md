# Runbook Setup OpenClaw Nextcloud Integration

## 📝 Langkah 1: Instalasi Dependensi

```bash
# Kloning repositori skill
cd ~/
git clone https://github.com/keithvassallomt/openclaw-nextcloud.git

# Masuk direktori
cd openclaw-nextcloud

# Instal dependensi
npm install
```

## 🛠️ Langkah 2: Konfigurasi

Buat file `.env` di direktori skill:

```bash
cat > .env << EOL
NEXTCLOUD_URL=https://cloud.example.com
NEXTCLOUD_USER=your_username
NEXTCLOUD_TOKEN=your_app_password_or_login_password
EOL
```

> 💡 **Tips**: Gunakan App Password dari pengaturan keamanan Nextcloud untuk keamanan yang lebih baik.

## 🧪 Langkah 3: Uji Coba Koneksi

```bash
# Lihat daftar file
node scripts/nextcloud.js files list

# Buat catatan baru
node scripts/nextcloud.js notes create --title "Catatan Test" --content "Ini adalah catatan test"
```

## 🚀 Langkah 4: Integrasi dengan OpenClaw Agent

Salin modul skill ke direktori agen OpenClaw Anda:

```bash
mkdir -p ~/.openclaw/agents/atmo/skills/nextcloud
cp -r * ~/.openclaw/agents/atmo/skills/nextcloud/
```