# Konfigurasi OpenClaw Nextcloud Integration

## 📋 Variabel Lingkungan

| Variabel | Keterangan | Contoh | Wajib |
|----------|------------|--------|-------|
| `NEXTCLOUD_URL` | URL dasar instance Nextcloud | `https://cloud.example.com` | ✅ |
| `NEXTCLOUD_USER` | Username akun Nextcloud | `admin` | ✅ |
| `NEXTCLOUD_TOKEN` | App Password atau password login | `your-app-password-123` | ✅ |

## 🎛️ Konfigurasi Lanjutan

### Mengubah Konfigurasi Secara Dinamis
Anda bisa mengubah konfigurasi saat menjalankan skrip:

```bash
# Menggunakan URL yang berbeda
NEXTCLOUD_URL=https://cloud.custom.com node scripts/nextcloud.js files list

# Menggunakan username yang berbeda
NEXTCLOUD_USER=user2 node scripts/nextcloud.js files list
```