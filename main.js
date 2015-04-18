$( document ).ready(function() {
    setTimeout(function(){$("#btn-subscribe").removeClass("noshow")}, 1000)
    $("#btn-subscribe").click(function(){
        setTimeout(function(){$("#mce-EMAIL").addClass("subscribe")}, 400);
        setTimeout(function(){$("#mc-embedded-subscribe").addClass("subscribe")}, 400);
        $("#btn-subscribe").addClass("noshow");
    });
    
    $("#mc-embedded-subscribe").click(function(){
        $("#mce-EMAIL").removeClass("subscribe");
        $("#mc-embedded-subscribe").removeClass("subscribe");
    });
});

function initializeLocationMap() {
  var Latlng = new google.maps.LatLng(41.177875,-8.597916);
  var markerImg = "images/map-marker.png";
  var mapOptions = {
    zoom: 16,
    center: Latlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: Latlng,
      map: map,
      icon: markerImg
  });
}

google.maps.event.addDomListener(window, 'load', initializeLocationMap);
