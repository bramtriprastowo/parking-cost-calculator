Aplikasi Penghitungan Harga Parkir (PostgreSQL, Node.JS, Express.JS, EJS)

-- Query PostgreSQL 
Sebelum menggunakan aplikasi ini, diperlukan melakukan beberapa query di postgreSQL (karena tidak menggunakan ORM). Untuk daftar query yang diperlukan dapat dilihat pada file terlampir 'query.sql' .

--- API
Pada sistem parkir ini terdapat 2 link API:
1. GET /api/v1/ -> untuk mengambil data
2. POST /api/v1 -> untuk menginput data

Untuk contoh penggunaan API, saya lampirkan export Postman sebagai contoh di file 'Parking System API.postman_collection.json' . 

--Unit test 
Untuk unit test dilakukan menggunakan Jest, dengan menggunakan command di terminal 'npm run test' .
File test terlampir pada '/test/price.test.js'

--Halaman Tampilan
Halaman tampilan menggunakan EJS, terdapat 2 halaman :
1. "/" -> untuk halaman Home, berisi tabel daftar kendaraan yang terdaftar dalam sistem parkir. Pada halaman Home ini terdapat filter tipe kendaraan, range harga, dan range waktu masuk, yang akan tertampil dalam tabel.
2. "/add" -> untuk halaman Add, berisi form untuk melakukan input kendaraan yang akan didaftarkan ke dalam sistem parkir.

Untuk file EJS halaman tampilan terlampir pada direktori '/views'

Terima kasih.
