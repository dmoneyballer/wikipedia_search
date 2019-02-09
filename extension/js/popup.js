$('#alert').hide()
// to close the alert
$("#alert").click(() => {
    $('#alert').hide()
});
setTimeout(function() {
  $('#urlCopyButton').click(function search() {
    var searchWord = document.querySelector('#searchWord').value;
    console.log(searchWord);
    var results = [];


    $.ajax({
              crossDomain: true,
              header: 'Access-Control-Allow-Origin',
              url:`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&maxlag=5&search=${searchWord}&callback=?`,
              type: 'GET',
              dataType: 'json',
              beforeSend: function(xhr){xhr.setRequestHeader('https://en.wikipedia.org', 'https://en.wikipedia.org');},
              success: (data) => {
                  $("#output").html("");
                var i =0;
                for (var i = 0; i < data[1].length; i++) {
                  $("#output").append(`<li><a href= "${data[3][i]  } ">${data[1][i] + " " + data[2][i]}<a></li>`);
                }
                console.log(data);
              },
              error: (err) =>{
                console.log(err.responseJSON);
              }


          })

  })
  $("#searchWord").keypress(function (e) {
      if(e.which ==13){
        $("#urlCopyButton").click();
      }
    })

}, 310)
