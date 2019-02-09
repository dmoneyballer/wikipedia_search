$('#alert').hide()
$("#alert").click(() => {
    $('#alert').hide()
});
setTimeout(function() {
  $('#urlCopyButton').click(function search() {
    var searchWord = document.querySelector('#searchWord').value;
    var results = [];
    $.ajax({
              url:`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&maxlag=5&search=${searchWord}&callback=?`,
              type: 'GET',
              success: (response) => {
                const jsonStr = response.slice(5, -1);
                const data = JSON.parse(jsonStr)
                  $("#output").html("");
                var i =0;
                for (var i = 0; i < data[1].length; i++) {
                  $("#output").append(`<li><a target="_blank" href= "${data[3][i]  } ">${data[1][i]}</a> ${ data[2][i]}</li>`);
                }
              },
              error: (err) =>{
                console.log(err.responseJSON);
              }
          })
});
  $("#searchWord").keypress(function (e) {
      if(e.which ==13){
        $("#urlCopyButton").click();
      }
    })
}, 310)
