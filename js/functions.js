window.onload = function() {
  (function($){
    
    var lightningB = function() {
      $("body").removeClass("strike");
      $("img").animate({opacity: 0}, 800);
    }
    var lightningA = function() {
      $("body").addClass("strike");
      setTimeout(lightningB, 300);
      $("img").addClass("visible");
    }
    setTimeout(lightningA, 2000);
    
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var howMany = getRandomInt(4,80);
    var howManyS = getRandomInt(50,300);
    
    for (var i = 0; i <= howMany; i++) {
      $(".space").append("<span class='planet' style='left: "+getRandomInt(2,800)+"px; top:"+getRandomInt(2,800)+"px'></span>");
    }
    for (var i = 0; i <= howManyS; i++) {
      $(".space").append("<span class='star' style='left: "+getRandomInt(8,780)+"px; top:"+getRandomInt(8,780)+"px'></span>");
    }
    
    $('.randomElement').each(function(){
      $(this).css({'top' : getRandomInt(-100,600), 'left' : getRandomInt(-100,600)});
    });
    
    var site = $("#app"),
        db = {
                "posts": [
                  { "id": 1, "title": "jsondb is awesome"},
                  { "id": 2, "title": "some title goes here", "content": "<p>some paragraph</p><h2>an h2</h2>"}
                ],
                "meta": [
                  {"sitename": "test js app", "description": "some fucking amazing description goes here"}
                ]
              };
    for ( var i = 0; i < db.meta.length; i++ ) {
      var sitename = db.meta[i].sitename,
          siteDescription = db.meta[i].description;
      $('title').text(sitename);
    }
    
    site.append("<p class='site-nav'></p>");
    site.append("<div class='app-content'></div>");
        
    function addNode(type, classname, content) {
      var nodeType = type,
          nodeClass = classname,
          nodeContent = content;
      
      if (nodeType == "div") {
        $("#app").append("<"+nodeType+" class='"+nodeClass+"'>"+nodeContent+"</"+nodeType+">");
      }
      else if (nodeType == "p") {
        $("#app").append("<"+nodeType+" class='"+nodeClass+"'>"+nodeContent+"</"+nodeType+">");
      }
      else if (nodeType == "h1") {
        $("#app").append("<"+nodeType+" class='"+nodeClass+"'>"+nodeContent+"</"+nodeType+">");
      }
    }
    
    addNode("p", "penis", "cucu");
    
    for ( var i = 0; i < db.posts.length; i++ ) {
      var entryId = db.posts[i].id,
          entryTitle = db.posts[i].title;
      $("<span id='id"+entryId+"'>"+entryTitle+"</span>").appendTo(".site-nav");
    }
    
    $(document).on("click", ".site-nav span", function(){
      var idToF = $(this).attr("id").replace('id','');
      $(".app-content", site).empty();
      for ( var i = 0; i < db.posts.length; i++ ) {
        var entryId = db.posts[i].id,
            entryTitle = db.posts[i].title,
            entryContent = db.posts[i].content;
        if (entryId == idToF) {
          $(".app-content", site).append("<p>Id 2 found - "+entryTitle+"</p>");
          $(".app-content", site).append(entryContent);
          //window.location.hash = '#pid'+entryId;
        }
      }
    });
   
    
    
    
  })(jQuery);
}



document.addEventListener("DOMContentLoaded", function(event) {
  function is_touch_device() {
    return (('ontouchstart' in window)
        || (navigator.MaxTouchPoints > 0)
        || (navigator.msMaxTouchPoints > 0));
    }
  var pHtml = document.getElementsByTagName( 'html' )[0];
  if (!is_touch_device()) {
    pHtml.setAttribute( 'class', 'no-touch' );
  }
  else {
    pHtml.setAttribute( 'class', 'touch' );
  }

});
