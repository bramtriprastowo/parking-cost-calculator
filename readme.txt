Pada sistem parkir ini ada 2 link untuk melakukan get dan post :
1. GET /api/v1/ -> untuk mengambil data
2. POST /api/v1 -> untuk menginput data


Pada saat mengambil data menggunakan GET, dapat melakukan filter dengan memasukkan query berikut:
idVehicle -> untuk menentukan jenis kendaraan yang dipilih (diisi 1 untuk mobil atau 2 untuk motor)
startPrice -> harga minimum
endPrice -> harga maksimum
startEntryTime -> waktu masuk minimum / paling lama
endEntryTime -> waktu maksimum / paling baru


Untuk menginput data menggunakan POST, dapat menggunakan json dengan format berikut:
{
    "idVehicle": 1,
    "entryTime": "2022-11-29T12:34:32.000Z",
    "exitTime": "2022-11-30T12:34:37.000Z"
}
idVehicle diisi dengan 1 untuk mobil atau 2 untuk motor.
Format timestamp yang dipakai adalah "YYYY-MM-DDTHH:mm:ss.000Z"


Untuk unit test menggunakan jest dan screenshot testing terdapat pada link berikut : https://prnt.sc/TmdEja9qlS0Z

Untuk tampilannya belum ada, karena mengalami kendala dalam membuat file EJS.

Terima kasih.
