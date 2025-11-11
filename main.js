function cekNilai () {
  // mengambil value dari elemen input nilai
  // simpan ke dalam variabel bernama "nilai"
  let nilai = Number(document.getElementById('nilai').value)
  
  // menginisiasi variabel "hasil" isinya string kosong ""
  let hasil = ""
  
  // menentukan angka  A B C D berdasarkan isi variabel "nilai "
  // menggunakan percabangan if (jika)
  // dan membandingkan variabel "nilai"
  if (nilai >=88) {
    hasil ="Nilai A (sangat baik)"
  } else if (nilai >=75) {
    hasil = "nilai B (baik)"
  } else if (nilai >=74) {
    hasil = "nilai C (cukup)"
  } else if (nilai >=49) {
    hasil = "nilai D (kurang)"
  }
  
  // tampilkan isi variabel "hasil" ke elemen "hasil" di html 
  document.getElementById ('hasil').innerText = hasil
}