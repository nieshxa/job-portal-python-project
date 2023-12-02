function togglePasswordVisibility(inputId, eyeIconId) {
  var passwordInput = $("#" + inputId);
  var eyeIcon = $("#" + eyeIconId);

  if (passwordInput.attr("type") === "password") {
    passwordInput.attr("type", "text");
    eyeIcon.attr("icon", "fluent:eye-16-filled");
  } else {
    passwordInput.attr("type", "password");
    eyeIcon.attr("icon", "fluent:eye-off-16-filled");
  }
}

$("#password-eye").click(function () {
  togglePasswordVisibility("password", "password-eye");
});

$("#cpassword-eye").click(function () {
  togglePasswordVisibility("cpassword", "cpassword-eye");
});
