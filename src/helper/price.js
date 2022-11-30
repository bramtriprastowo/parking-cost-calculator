//Fungsi untuk menghitung biaya
const calculatePrice = (idVehicle, roundedTime) => {
    //Membuat variabel dan nilai awal untuk penghitungan
  let priceHour = 0;
  let priceDay = 0;
  let totalPrice = 0;

  //Menentukan harga berdasarkan tipe kendaraan
  if (idVehicle === 1) {
    priceHour = 5000;
    priceDay = 80000;
  } else if (idVehicle === 2) {
    priceHour = 2000;
    priceDay = 40000;
  }

  //Menghitung harga parkir apabila waktu parkir melebihi satu hari
  let timeDay = Math.floor(roundedTime / (60 * 60 * 24));
  if (timeDay >= 1) {
    totalPrice += timeDay * priceDay;
    roundedTime -= timeDay * 60 * 60 * 24;
  }

  //Menghitung harga parkir per jam
  let timeHour = Math.floor(roundedTime / (60 * 60));
  if (timeHour >= 1) {
    totalPrice += timeHour * priceHour;
    roundedTime -= timeHour * 60 * 60;
  }

  //Menghitung harga parkir dengan pembulatan menit (jika melebihi satu menit maka dihitung satu jam)
  if (roundedTime > 60) {
    totalPrice += priceHour;
  }

  // Mengembalikan nilai harga parkir
  return totalPrice;
};

module.exports = calculatePrice;
