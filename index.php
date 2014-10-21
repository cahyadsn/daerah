<!doctype html>
<html>
	<head>
		<title>Data Daerah</title>
		<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    <script type="text/javascript" src="ajax_daerah.js"></script>
	</head>
	<body>
		<table>
			<tr>
			<td>Pilih Provinsi</td>
			<td>:</td>
			<td>
				<select name="prop" id="prop" onchange="ajaxkota(this.value)">
					<option value="">Pilih Provinsi</option>
					<?php 
					include 'koneksi.php';
					$query=$db->prepare("SELECT id_prov,nama FROM provinsi ORDER BY nama");
					$query->execute();
					while ($data=$query->fetchObject()){
					echo '<option value="'.$data->id_prov.'">'.$data->nama.'</option>';
					}
					?>
				<select>
			</td>
		</tr>
		<tr>
			<td>Pilih Kota/Kab</td>
			<td>:</td>
			<td>
				<select name="kota" id="kota" onchange="ajaxkec(this.value)">
					<option value="">Pilih Kota</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>Pilih Kec</td>
			<td>:</td>
			<td>
				<select name="kec" id="kec" onchange="ajaxkel(this.value)">
					<option value="">Pilih Kecamatan</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>Pilih Kelurahan/Desa</td>
			<td>:</td>
			<td>
				<select name="kel" id="kel" onchange="showCoordinate();">
					<option value="">Pilih Kelurahan/Desa</option>
				</select>
			</td>
		</tr>
		<tr>
		  <td>Latitude</td>
		  <td>:</td>
		  <td><input type='text' id='lat' readonly></td>
		</tr>
		<tr>
		  <td>Longitude</td>
		  <td>:</td>
		  <td><input type='text' id='lng' readonly></td>
		</tr>
		</table>
	</body>
</html>