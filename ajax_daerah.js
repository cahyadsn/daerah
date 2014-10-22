var ajaxku=buatajax();
function ajaxkota(id){
  var url="select_daerah.php?prop="+id+"&sid="+Math.random();
  ajaxku.onreadystatechange=stateChanged;
  ajaxku.open("GET",url,true);
  ajaxku.send(null);
}

function ajaxkec(id){
  var url="select_daerah.php?kab="+id+"&sid="+Math.random();
  ajaxku.onreadystatechange=stateChangedKec;
  ajaxku.open("GET",url,true);
  ajaxku.send(null);
}

function ajaxkel(id){
  var url="select_daerah.php?kec="+id+"&sid="+Math.random();
  ajaxku.onreadystatechange=stateChangedKel;
  ajaxku.open("GET",url,true);
  ajaxku.send(null);
}

function buatajax(){
  if (window.XMLHttpRequest){
    return new XMLHttpRequest();
  }
  if (window.ActiveXObject){
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
  return null;
}
function stateChanged(){
  var data;
  if (ajaxku.readyState==4){
    data=ajaxku.responseText;
    if(data.length>=0){
      document.getElementById("kota").innerHTML = data
    }else{
      document.getElementById("kota").value = "<option selected>Pilih Kota/Kab</option>";
    }
  }
}

function stateChangedKec(){
  var data;
  if (ajaxku.readyState==4){
    data=ajaxku.responseText;
    if(data.length>=0){
      document.getElementById("kec").innerHTML = data
    }else{
      document.getElementById("kec").value = "<option selected>Pilih Kecamatan</option>";
    }
  }
}

function stateChangedKel(){
  var data;
  if (ajaxku.readyState==4){
    data=ajaxku.responseText;
    if(data.length>=0){
      document.getElementById("kel").innerHTML = data
    }else{
      document.getElementById("kel").value = "<option selected>Pilih Kelurahan/Desa</option>";
    }
  }
}

function showCoordinate(){
  var prop = document.getElementById("prop");
  var kab = document.getElementById("kota");
  var kec = document.getElementById("kec");
  var kel = document.getElementById("kel");
  var s = kel.options[kel.selectedIndex].text
          +', '
          +kec.options[kec.selectedIndex].text;
  var geocoder;
  geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': s}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var position=results[0].geometry.location;
      document.getElementById("lat").value=position.lat();
      document.getElementById("lng").value=position.lng();
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}