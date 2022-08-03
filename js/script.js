$(".fa-bars").click(function () {
  $(this).css("display", "none");
  $(".fa-xmark").css("display", "block");
  $(".menu").css("display", "flex");
});
$(".fa-xmark").click(function () {
  $(this).css("display", "none");
  $(".fa-bars").css("display", "block");
  $(".menu").css("display", "none");
});

$(".pan-1").click(function () {
  $(".panel-1").css("display", "block");
  $(".panel-2").css("display", "none");
  $(".panel-3").css("display", "none");
});
$(".pan-2").click(function () {
  $(".panel-1").css("display", "none");
  $(".panel-2").css("display", "block");
  $(".panel-3").css("display", "none");
});
$(".pan-3").click(function () {
  $(".panel-1").css("display", "none");
  $(".panel-2").css("display", "none");
  $(".panel-3").css("display", "block");
});
