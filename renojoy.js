// Define the function to perform the AJAX request
function performAjaxRequest() {
  var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://restdb.io/account/databases/integratedproject-9aca/api",
      "method": "GET",
      "headers": {
          "content-type": "application/json",
          "x-apikey": "65b8a6643d3b7f7e97c26564",
          "cache-control": "no-cache"
      }
  };

  $.ajax(settings).done(function (response) {
      console.log(response);
  });
}

// Attach the function to the click event of the login button
$(document).ready(function () {
  $("#container-login100-form-btn").click(function () {
      performAjaxRequest();
  });
});
