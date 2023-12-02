$(document).ready(function () {
  $(".ddown_opt").click(function () {
    var selectedValue = $(this).text();
    $("#job_pref").val(selectedValue);
    $(".ddown_options").toggle();
  });

  $(".ddown").click(function () {
    $(".ddown_options").toggle();
  });
  $(document.body).click(function (event) {
    if (!$(event.target).closest(".ddown_options, .ddown").length) {
      $(".ddown_options").hide();
    }
  });
});
function displayFileName() {
  const input = document.getElementById("resume");
  const label = document.querySelector(".file_click");
  const small = label.querySelector("small");

  if (input.files.length > 0) {
    const fileName = input.files[0].name;
    small.textContent = fileName;
  } else {
    small.textContent = "DOC, DOCx, PDF, RTF";
  }
}
