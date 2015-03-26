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