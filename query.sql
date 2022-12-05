-- Membuat database
CREATE DATABASE parking_system;

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