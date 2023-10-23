$(".slider").click(function () {
  $(".innerFirst").not($(this).next()).slideUp(1000);
  $(this).next().slideToggle(1000);
});

$("#header .content .openNav").click(function () {
  $("#leftMenu").animate({ width: "250px" }, 50);
  $("#header .content").animate({ marginLeft: "250px" }, 50);
});
$(".closebtn").click(function () {
  $("#leftMenu").animate({ width: "0px" }, 50);
  $("#header .content").animate({ marginLeft: "0px" }, 50);
});

$("#leftMenu a[href^='#']").click(function (e) {
  let aHref = e.target.getAttribute("href");
  let sectionOffset = $(aHref).offset().top;
  $("html,body").animate({ scrollTop: sectionOffset }, "slow");
});
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let countDownDate = new Date("jan 1, 2024 15:37:25").getTime();

function count() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((distance % (1000 * 60)) / 1000);
  days.innerHTML = day + " D";
  hours.innerHTML = hour + " H";
  minutes.innerHTML = minute + " M";
  seconds.innerHTML = second + " S";
  if (distance < 0) {
    clearInterval(count);
  }
  setTimeout(count, 1000);
}

count();

$("textarea").keyup(function () {
  let myLength = $(this).val().length;
  $("#chars").text(100 - myLength);
  if (myLength >= 100) {
    $("#chars").text("your available character finished");
    $("#chars2").remove();
  }
});
