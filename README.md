daerah
======
> repo ini sudah deprecated, versi yang sudah sesuai dengan Kepmendagri No 100.1.1-6117 tahun 2022 ada di https://github.com/cahyadsn/wilayah 

)* karena adanya perbedaan struktur db/table antara repo wilayah [https://github.com/cahyadsn/wilayah] dengan struktur tabel di repo daerah ini, maka ditambahkan query untuk konversinya di file db_wilayah_to_db_daerah.sql (konversi dari data wilayah ke daerah)

Menampilkan data provinsi,kota/kabupaten,kecamatan dan desa/kelurahan menggunakan AjAX

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/cahyadsn/daerah.svg)](https://github.com/cahyadsn/daerah/issues)
[![GitHub forks](https://img.shields.io/github/forks/cahyadsn/daerah.svg)](https://github.com/cahyadsn/daerah/network)
[![GitHub stars](https://img.shields.io/github/stars/cahyadsn/daerah.svg)](https://github.com/cahyadsn/daerah/stargazers)

Database Data dan Kode Wilayah Administrasi Pemerintahan sesuai Permendagri No 58 Tahun 2021  dengan revisi berdasarkan Kepmendagrin No 050-145 Tahun 2022 

| id_prov | nama                      | kab  | kota | kec | kel  | desa | pulau |
|---------|---------------------------|-----:|-----:|-----|-----:|-----:|------:|
| 11      | Aceh*                     |   18 |    5 | 290 |    0 | 6497 |   363 |
| 12      | Sumatera Utara*           |   25 |    8 | 455 |  693 | 5417 |   229 |
| 13      | Sumatera Barat*           |   12 |    7 | 179 |  230 |  929 |   218 |
| 14      | Riau*                     |   10 |    2 | 172 |  271 | 1591 |   144 |
| 15      | Jambi*                    |    9 |    2 | 144 |  165 | 1399 |    14 |
| 16      | Sumatera Selatan*         |   13 |    4 | 241 |  395 | 2853 |    24 |
| 17      | Bengkulu*                 |    9 |    1 | 129 |  172 | 1341 |     9 |
| 18      | Lampung*                  |   13 |    2 | 229 |  205 | 2435 |   172 |
| 19      | Kepulauan Bangka Belitung*|    6 |    1 |  47 |   84 |  309 |   507 |
| 21      | Kepulauan Riau*           |    5 |    2 |  76 |  142 |  275 |  2025 |
| 31      | DKI Jakarta               |    1 |    5 |  44 |  267 |    0 |   113 |
| 32      | Jawa Barat                |   18 |    9 | 627 |  645 | 5312 |    30 |
| 33      | Jawa Tengah               |   29 |    6 | 576 |  753 | 7809 |    71 |
| 34      | DI Yogyakarta             |    4 |    1 |  78 |   46 |  392 |    33 |
| 35      | Jawa Timur                |   29 |    9 | 666 |  777 | 7724 |   504 |
| 36      | Banten*                   |    4 |    4 | 155 |  314 | 1238 |    81 |
| 51      | Bali                      |    8 |    1 |  57 |   80 |  636 |    34 |
| 52      | Nusa Tenggara Barat       |    8 |    2 | 117 |  145 | 1005 |   403 |
| 53      | Nusa Tenggara Timur*      |   21 |    1 | 315 |  327 | 3026 |   600 |
| 61      | Kalimantan Barat          |   12 |    2 | 174 |   99 | 2031 |   249 |
| 62      | Kalimantan Tengah*        |   13 |    1 | 136 |  139 | 1432 |    69 |
| 63      | Kalimantan Selatan*       |   11 |    2 | 156 |  144 | 1864 |   158 |
| 64      | Kalimantan Timur*         |    7 |    3 | 105 |  197 |  841 |   243 |
| 65      | Kalimantan Utara*         |    4 |    1 |  55 |   35 |  447 |   196 |
| 71      | Sulawesi Utara            |   11 |    4 | 171 |  332 | 1507 |   329 |
| 72      | Sulawesi Tengah           |   12 |    1 | 175 |  175 | 1842 |  1572 |
| 73      | Sulawesi Selatan*         |   21 |    3 | 311 |  793 | 2255 |   355 |
| 74      | Sulawesi Tenggara*        |   15 |    2 | 220 |  378 | 1908 |   590 |
| 75      | Gorontalo                 |    5 |    1 |  77 |   72 |  657 |   127 |
| 76      | Sulawesi Barat            |    6 |    0 |  69 |   73 |  575 |    69 |
| 81      | Maluku                    |    9 |    2 | 118 |   35 | 1198 |  1337 |
| 82      | Maluku Utara*             |    8 |    2 | 118 |  118 | 1063 |   837 |
| 91      | Papua*                    |   28 |    1 | 566 |  110 | 5411 |   547 |
| 92      | Papua Barat               |   12 |    1 | 218 |   95 | 1742 |  4514 |
|         | TOTAL*                    |  416 |   98 |7266 | 8506 |74961 | 16772 |

)* data mengalami perubahan dari data sebelumnya (data permendagri No 72 Tahun 2019/Kepmendagri No.146.1-4717 Tahun 2020)

) ** Jumlah pulau termasuk 6 pulau besar ( Sumatera, Jawa, Kalimantan, Sulawesi, Timor, dan Papua

link demo tidak tersedia, demo untuk __wilayah__ (https://github.com/cahyadsn/wilayah) bisa dilihat [di sini]

penambahan versi codeigniter memakai codeigniter 3.0 


## DONASI
untuk donasi via [paypal], atau bank syariah indonesia (BSI) 821 342 5550


[paypal]: https://paypal.me/cahyadwiana
[di sini]: http://wilayah.cahyadsn.com/v2.4/
