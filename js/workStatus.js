$(document).ready(function () {
  $("#experienced").change(function () {
    if ($(this).prop("checked")) {
      $('label[for="experienced"]').addClass("active");
      $('label[for="fresher"]').removeClass("active");
    } else {
      $('label[for="experienced"]').removeClass("active");
    }
  });

  $("#fresher").change(function () {
    if ($(this).prop("checked")) {
      $('label[for="fresher"]').addClass("active");
      $('label[for="experienced"]').removeClass("active");
    } else {
      $('label[for="fresher"]').removeClass("active");
    }
  });
});
