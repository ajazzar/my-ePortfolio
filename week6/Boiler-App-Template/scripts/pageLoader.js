function resizeGraph() {
  if ($(window).width() < 700) {
    $('#GraphCanvas').css({
      width: $(window).width() - 50
    });
    $('#AdviceCanvas').css({
      width: $(window).width() - 50
    });
  }
}

// Attach event handler for window resizing event
$(window).resize(function() {
  resizeGraph();
});

/*Runs the function to display the user information, history,
 * graph or suggestions, every time their div is shown
 */
$(document).on('pageshow', function() {
  if ($('.ui-page-active').attr('id') == 'pageUserInfo') {
    showUserForm();
  } else if ($('.ui-page-active').attr('id') == 'pageRecords') {
    loadUserInformation();
    listRecords();
  } else if ($('.ui-page-active').attr('id') == 'pageAdvice') {
    advicePage();
    resizeGraph();
  } else if ($('.ui-page-active').attr('id') == 'pageGraph') {
    drawGraph();
    resizeGraph();
  }
});
function loadUserInformation() {
  try {
      var user = JSON.parse(localStorage.getItem('user'));
  } catch (e) {


      console.log(e);
  }
  if (user != null) {
      $('#divUserSection').empty();
      var today = new Date();

      $('#divUserSection').append(
          "Manufacturer: " +
          user.Manufacturer +
          ' | Date: ' +
          user.DateOfPurchase +
          ' | Boiler: ' +
          user.BoilerID +
          ' | Pressure: ' +
          user.MaxPressure +
          ' | Temperature: ' +
          user.MaxTemperature
      );
      $('#divUserSection').append(
          "<br><a href='#pageUserInfo' data-mini='true' data-role='button' data-icon='edit' data-iconpos='left' data-inline='true' >Edit Profile</a><hr>"
      );
      $('#divUserSection [data-role="button"]').button(); 
  }
}