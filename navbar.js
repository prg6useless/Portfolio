$(document).ready(function () {
  // Function to update the active class in the navbar
  function updateActiveSection() {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    // Handle the "Home" link as a separate case
    var homeSectionBottom = $("#home").offset().top + $("#home").outerHeight();
    if (scrollTop >= 0 && scrollTop < homeSectionBottom) {
      return "home";
    }

    var activeSectionId = null;
    $("h1.page-section").each(function () {
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
        activeSectionId = $(this).attr("id");
      }
    });

    return activeSectionId;
  }

  function setActiveLink(linkId) {
    $(".navbar .active").removeClass("active");
    $(".navbar .link[href='#" + linkId + "']").addClass("active");
  }

  // Update the active section on page load
  var initialActiveSectionId = updateActiveSection();
  if (initialActiveSectionId) {
    setActiveLink(initialActiveSectionId);
  }

  // Update the active section when scrolling
  $(window).scroll(function () {
    var activeSectionId = updateActiveSection();
    if (activeSectionId) {
      setActiveLink(activeSectionId);
    }
  });
});
