const express = require('express');
const path = require('path');
const multer = require('multer');
const app = express();
const port = 3000;

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files adminLTE (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'admin.lte', 'login-form-18')));


// Routes for various pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html')); 
});

app.get('/beranda', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html')); 
});

app.get('/daftar', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'daftar.html'));  
});

app.get('/konsultasi', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'konsultasi.html'));  
});

app.get('/process', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'process.html')); 
});

app.get('/timmedis', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'timmedis.html'));  
});

app.get('/medis', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'pegawai.html')); 
});

app.get('/poliklinik', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'poliklinik.html')); 
});
  
app.get('/informasi', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'informasi.html')); 
});

// Route to handle form submission (Registration)
app.post('/daftar', (req, res) => {
  const { nama, tempat_lahir, tanggal_lahir, kelurahan, gender, nik, telpon, riwayat_penyakit } = req.body;
  
  console.log('Data Registrasi:', req.body); // Check if the form data is correctly logged

  // Setelah data valid, arahkan ke halaman /process
  res.redirect('/process');
});

app.post('/timmedis', upload.single('dokumen'), (req, res) => {
  const { nama, tempat_lahir, tanggal_lahir, gender, nik, telpon } = req.body;
  const dokumen = req.file;

  console.log('Nama:', nama);
  console.log('Tempat Lahir:', tempat_lahir);
  console.log('Tanggal Lahir:', tanggal_lahir);
  console.log('Gender:', gender);
  console.log('NIK:', nik);
  console.log('Telpon:', telpon);
  console.log('Dokumen:', dokumen ? dokumen.filename : 'No document uploaded'); 

  res.redirect('/process');
});

//adminLTE
app.get('/akun', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.lte', 'login-form-18', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
