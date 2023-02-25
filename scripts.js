$(document).ready(function(){
	$(".nav").hide();
	$("#into_TF").hide();
	$("#journ_coll").hide();
	$("#photo").hide();
	$("#favs").hide();
	$("#more").hide();
	$("#noresult").hide();
  $("#menu").click(function(){
    $(".nav").toggle("0.5");
  });
  $("#top").click(function(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $("#into_TF_button").click(function(){
    $("#into_TF").toggle("0.1");
	$("#journ_coll").hide("0.1");
	$("#photo").hide("0.1");
	$("#favs").hide("0.1");
	$("#more").hide("0.1");
  });
  $("#journ_coll_button").click(function(){
    $("#journ_coll").toggle("0.1");
	$("#into_TF").hide("0.1");
	$("#photo").hide("0.1");
	$("#favs").hide("0.1");
	$("#more").hide("0.1");
  });
  $("#photo_button").click(function(){
    $("#photo").toggle("0.1");
	$("#into_TF").hide("0.1");
	$("#journ_coll").hide("0.1");
	$("#favs").hide("0.1");
	$("#more").hide("0.1");
  });
  $("#favs_button").click(function(){
    $("#favs").toggle("0.1");
	$("#into_TF").hide("0.1");
	$("#journ_coll").hide("0.1");
	$("#photo").hide("0.1");
	$("#more").hide("0.1");
  });
  $("#more_button").click(function(){
    $("#more").toggle("0.1");
	$("#into_TF").hide("0.1");
	$("#journ_coll").hide("0.1");
	$("#photo").hide("0.1");
	$("#favs").hide("0.1");
  });
  $('#filter').keyup(function() {
	  var filter = $(this).val().toLowerCase();
	  var result = false;
	  $("#noresult").show();
	  $('.body img').each(function(){
		  var alt = $(this).attr('alt').toLowerCase();
		  if(filter === '' || alt.indexOf(filter) > -1){
			  $(this).show("0.01");
			  $("#noresult").hide();
			  result = true;
		  }
		  else { $(this).hide("0.01");}
	  });
		
  });
  $(function () {
    var parent = $("#gen_image, #big_image");
    var divs = parent.children('a');
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});
  $('.image-link').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
});
  
});




