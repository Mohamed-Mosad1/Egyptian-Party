let isMenuOpen = false;
let toggleBtn = $("#header .content .openNav");
let toggleLinks = $("#leftMenu a");

$(".slider").click(function () {
  $(".innerFirst").not($(this).next()).slideUp(1000, "linear");
  $(this).next().slideToggle(1000, "linear");
});

toggleBtn.click(function (e) {
  if (isMenuOpen) {
    $("#leftMenu").animate({ width: "0px" }, 50);
    $("#header .content").animate({ marginLeft: "0px" }, 50);
    isMenuOpen = false;
  } else {
    $("#leftMenu").animate({ width: "250px" }, 50);
    $("#header .content").animate({ marginLeft: "250px" }, 50);
    isMenuOpen = true;
  }
  e.stopPropagation();
});

$(document).click(function (e) {
  if (!toggleBtn.is(e.target)) {
    $("#leftMenu").animate({ width: "0px" }, 50);
    $("#header .content").animate({ marginLeft: "0px" }, 50);
  }
  isMenuOpen = false;
});

$(".closebtn").click(function () {
  $("#leftMenu").animate({ width: "0px" }, 50);
  $("#header .content").animate({ marginLeft: "0px" }, 50);
  isMenuOpen = false;
});

$("#leftMenu a[href^='#']").click(function (e) {
  e.preventDefault();
  let aHref = e.target.getAttribute("href");
  let sectionOffset = $(aHref).offset().top;
  $("html, body").animate({ scrollTop: sectionOffset }, "slow");
  $("#leftMenu").animate({ width: "0px" }, 50);
  $("#header .content").animate({ marginLeft: "0px" }, 50);
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

$("textarea").keydown(function (e) {
  let myLength = $(this).val().length;
  if (myLength >= 100) {
    $("#chars").text("Your available characters have finished");
    $("#chars2").addClass("d-none");
    $(this).val($(this).val().substr(0, 100));
  } else {
    $("#chars").text(100 - myLength);
    $("#chars2").removeClass("d-none");
  }
});
