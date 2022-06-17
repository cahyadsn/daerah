-- KONVERSI DARI DB wilayah KE DB daerah
-- created by CAHYA DSN <cahyadsn@gmail.com>  2022-06-17

-- [1] CREATE dan INSERT tabel `wilayah` dari repo https://github.com/cahyadsn/wilayah/blob/master/wilayah.sql
-- [2] Jalankan query berikut:

DROP TABLE IF EXISTS provinsi;
CREATE TABLE IF NOT EXISTS provinsi (
  id_prov char(2) NOT NULL,
  nama tinytext NOT NULL,
  PRIMARY KEY (id_prov)
);

-- TRUNCATE TABLE provinsi;
INSERT INTO provinsi(id_prov,nama)
SELECT 
    kode AS id_prov,
    nama
FROM wilayah
WHERE LENGTH(kode)=2
ORDER BY kode;

DROP TABLE IF EXISTS kabupaten;
CREATE TABLE IF NOT EXISTS kabupaten (
  id_kab char(4) NOT NULL,
  id_prov char(2) NOT NULL,
  nama tinytext NOT NULL,
  id_jenis int(11) NOT NULL,
  PRIMARY KEY (id_kab)
);

-- TRUNCATE TABLE kabupaten;
INSERT INTO kabupaten (id_kab, id_prov, nama, id_jenis)
SELECT 
    REPLACE(kode,'.','') AS id_kab, 
    LEFT(kode,2) AS id_prov, 
    nama, 
    IF(SUBSTR(kode,4,1)='7',2,1) AS id_jenis
FROM wilayah
WHERE LENGTH(kode)=5
ORDER BY kode;

DROP TABLE IF EXISTS kecamatan;
CREATE TABLE IF NOT EXISTS kecamatan (
  id_kec char(6) NOT NULL,
  id_kab char(4) NOT NULL,
  nama tinytext NOT NULL,
  PRIMARY KEY (id_kec)
);

-- TRUNCATE TABLE kecamatan;
INSERT INTO kecamatan (id_kec, id_kab, nama)
SELECT 
    REPLACE(kode,'.','') AS id_kec, 
    REPLACE(LEFT(kode,5),'.','') AS id_kab, 
    nama
FROM wilayah
WHERE LENGTH(kode)=8
ORDER BY kode;

DROP TABLE IF EXISTS kelurahan;
CREATE TABLE IF NOT EXISTS kelurahan (
  id_kel char(10) NOT NULL,
  id_kec char(6) DEFAULT NULL,
  nama tinytext,
  id_jenis int(11) NOT NULL,
  PRIMARY KEY (id_kel)
);

-- TRUNCATE TABLE kelurahan;
INSERT INTO kelurahan (id_kel, id_kec, nama, id_jenis)
SELECT 
    REPLACE(kode,'.','') AS id_kel, 
    REPLACE(LEFT(kode,8),'.','') AS id_kec, 
    nama, 
    IF(SUBSTR(kode,10,1)='2',3,4) AS id_jenis
FROM wilayah
WHERE LENGTH(kode)=13
ORDER BY kode;
