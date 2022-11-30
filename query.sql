-- Membuat database
CREATE DATABASE kedatech;

-- Membuat tabel yang diperlukan (tabel Vehicle dibuat terlebih dahulu karena merupakan parent table)
CREATE TABLE vehicle(
    id SERIAL PRIMARY KEY,
    vehicle_type VARCHAR NOT NULL
);

CREATE TABLE parking(
    id SERIAL PRIMARY KEY,
    id_vehicle INT NOT NULL,
    entry_time TIMESTAMP NOT NULL,
    exit_time TIMESTAMP NOT NULL,
    price INT NOT NULL,
    FOREIGN KEY (id_vehicle) REFERENCES vehicle(id)
);

-- Memasukkan data ke tabel vehicle
INSERT INTO vehicle(vehicle_type)
VALUES ('mobil'),('motor');


--Contoh input di tabel parking
INSERT INTO parking(id_vehicle, entry_time, exit_time, price)
VALUES(2, '1999-01-08T04:05:06.000Z', '1999-01-08T04:05:45.000Z', 20000);

--Query untuk get data
SELECT parking.id, vehicle.vehicle_type, parking.entry_time, parking.exit_time, price 
FROM parking 
JOIN vehicle ON parking.id_vehicle=vehicle.id 
ORDER BY id ASC;