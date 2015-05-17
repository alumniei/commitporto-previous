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
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
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
    $('.top-bar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.top-bar ul li a').removeClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.parent().removeClass("active");
        }
    });
}
