$(document).ready(function() {
    var url = "https://newsapi.org/v1/sources";
    var data = {language:"en", country:"us"};
    $.ajax({
        url: url,
        data: data,
        type: "GET",
        success: function(response) {
            console.log(response);
            console.log(response.sources[2]);
            var sources = response.sources;
            console.log(sources[2])
        }
    })
})