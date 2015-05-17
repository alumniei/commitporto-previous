function initializeLocationMap() {
    var Latlng = new google.maps.LatLng(41.177875,-8.597916);
    var markerImg = "images/map.svg";
      
    var mapOptions = {
      zoom: 16,
      center: Latlng,
      scrollwheel: false
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: Latlng,
        map: map,
        icon: markerImg
    });
}

google.maps.event.addDomListener(window, 'load', initializeLocationMap);

$(document).ready(function () {
    var height =
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();

    if (scrollPos > $('#header-end').offset().top) {
        $('.top-bar').show();
    } else {
        $('.top-bar').hide();
    }
}
