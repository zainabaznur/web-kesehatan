document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const namaPasien = document.getElementById('namaPasien').value;
      const tempatLahir = document.getElementById('tempatLahir').value;
      const tanggalLahir = document.getElementById('tanggalLahir').value;
      const kelurahan = document.getElementById('kelurahan').value;
      const gender = document.getElementById('gender').value;
      const nik = document.getElementById('nik').value;
      const telpon = document.getElementById('telpon').value;
      const riwayatPenyakit = document.getElementById('riwayatPenyakit').value;
  
      if (!namaPasien || !tempatLahir || !tanggalLahir || !kelurahan || !nik || !telpon) {
        alert('Mohon lengkapi semua data!');
        return;
      }
  
      // Membuat query string dengan data dari form
      const queryString = new URLSearchParams({
        namaPasien, tempatLahir, tanggalLahir, kelurahan, gender, nik, telpon, riwayatPenyakit
      }).toString();
  
      // Arahkan ke process.html dengan data query string
      window.location.href = `/process?${queryString}`;
    });
  });
  