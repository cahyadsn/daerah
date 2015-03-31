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
    document.getElementById("kab_box").style.display='table-row';
    document.getElementById("kec_box").style.display='none';
    document.getElementById("kel_box").style.display='none';
    document.getElementById("lat_box").style.display='none';
    document.getElementById("lng_box").style.display='none';
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
    document.getElementById("kec_box").style.display='table-row';
    document.getElementById("kel_box").style.display='none';
    document.getElementById("lat_box").style.display='none';
    document.getElementById("lng_box").style.display='none';
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
    document.getElementById("kel_box").style.display='table-row';
    document.getElementById("lat_box").style.display='none';
    document.getElementById("lng_box").style.display='none';
  }
}

var map;
var geocoder;
var marker;
var markersArray = [];
function initialize() {
  geocoder = new google.maps.Geocoder();
  var myLatlng =new google.maps.LatLng(-6.176655999999999, 106.83058389999997);
  var mapOptions = {
    center: myLatlng,
    zoom: 14
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
  marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Jakarta'
  });  
  markersArray.push(marker);
  google.maps.event.addListener(marker,"click",function(){});  
}

function clearOverlays() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}

function showCoordinate(){
  var prop = document.getElementById("prop");
  var kab = document.getElementById("kota");
  var kec = document.getElementById("kec");
  var kel = document.getElementById("kel");
  var s = kel.options[kel.selectedIndex].text
          +', '
          +kec.options[kec.selectedIndex].text;
      s2= s
          +', '
          +kab.options[kab.selectedIndex].text
          +', '
          +prop.options[prop.selectedIndex].text;   
  geocoder.geocode( { 'address': s}, function(results, status) {
  document.getElementById("lat_box").style.display='table-row';
  document.getElementById("lng_box").style.display='table-row';
    if (status == google.maps.GeocoderStatus.OK) {
      clearOverlays();
      var position=results[0].geometry.location;
      document.getElementById("lat").value=position.lat();
      document.getElementById("lng").value=position.lng();
      map.setCenter(results[0].geometry.location);
      marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title:s2
      });
      markersArray.push(marker);
      google.maps.event.addListener(marker,"click",function(){});
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
google.maps.event.addDomListener(window, 'load', initialize);