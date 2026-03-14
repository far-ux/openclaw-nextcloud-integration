// Contoh penggunaan modul OpenClaw Nextcloud Integration

const nextcloud = require('../index.js');

async function runExamples() {
  console.log('=== Contoh Penggunaan OpenClaw Nextcloud Integration ===\n');

  // 1. Lihat daftar file
  console.log('1. Daftar File di Nextcloud:');
  const files = await nextcloud.files.list();
  if (files.status === 'success') {
    files.data.forEach(file => {
      console.log(`   - ${file.name} ${file.isDir ? '(📂)' : '(📄)'}`);
    });
  }

  // 2. Buat catatan baru
  console.log('\n2. Buat Catatan Baru:');
  const newNote = await nextcloud.notes.create(
    'Catatan Test dari OpenClaw',
    'Ini adalah catatan yang dibuat menggunakan modul OpenClaw Nextcloud'
  );
  if (newNote.status === 'success') {
    console.log(`   ✅ Berhasil membuat catatan dengan ID: ${newNote.data.id}`);
  }

  console.log('\n=== Selesai ===');
}

runExamples().catch(console.error);