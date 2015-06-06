function initializeLocationMap() {
    var Latlng = new google.maps.LatLng(41.177875,-8.597916);
    var markerImg = "images/map.svg";
      
    // Create an array of styles.
    var styles = [
        {
            stylers: [
                { hue: "#2dbfc2" },
                { saturation: -50 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
      
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


     //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}

google.maps.event.addDomListener(window, 'load', initializeLocationMap);

$(document).ready(function () {
    var height =
    $(document).on("scroll", onScroll);
    
    $(document).foundation();
    
    //smoothscroll
    $('.top-bar-section a[href^="#"]').on('click', function (e) {
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
