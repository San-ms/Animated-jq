// alert ("Hello")

$("nav a").on("click", function (event) {
// detener que pase algo por default
event.preventDefault()

var href = $(this).attr("href")

window.history.pushState(null, href)

$("nav a").removeClass("active")

$(this).addClass("active")

$.ajax({
  url:href,
  success: function (data) {
    $("section").fadeOut(250, function () {




    $("section").fadeIn(250)  
    })
  }
})



})
