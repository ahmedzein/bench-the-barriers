(function(w){
  function getChildrenHeights(elementName) {
    var newHeight = 0;
    $(elementName).children().each(function(index, element){
        newHeight = newHeight + element.offsetHeight;
    })
    return newHeight;
  }

  $(document).ready(function () {
    $("#nav-trigger span").click(function () {

      if ($("nav#nav-mobile ul").hasClass("expanded")) {

        $("nav#nav-mobile ul").removeClass("expanded");
        $("nav#nav-mobile ul").css('height', '0px');
      } else {
        $("nav#nav-mobile ul").addClass("expanded")
        $("nav#nav-mobile ul").css('height', getChildrenHeights('nav#nav-mobile ul') + 'px');
      }
    });

  $('.overlay').css('height', window.innerHeight);
  });
}(window))
