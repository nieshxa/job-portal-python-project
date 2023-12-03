function validate() {
  var hnum = $("#hnum").val();

  if (hnum === "" || isNaN(Date.parse(hnum))) {
    $(".hnum_msg").addClass("active");
    $("#hnum").css({
      "border-color": "var(--red)",
      animation: "shake 0.5s",
    });
  } else {
    $(".hnum_msg").removeClass("active");
    $("#hnum").css({
      "border-color": "",
      animation: "",
    });
  }

  var street = $("#street").val();

  if (street === "" || isNaN(Date.parse(street))) {
    $(".street_msg").addClass("active");
    $("#street").css({
      "border-color": "var(--red)",
      animation: "shake 0.5s",
    });
  } else {
    $(".street_msg").removeClass("active");
    $("#street").css({
      "border-color": "",
      animation: "",
    });
  }

  var brngy = $("#brngy").val();

  if (brngy === "" || isNaN(Date.parse(brngy))) {
    $(".brngy_msg").addClass("active");
    $("#brngy").css({
      "border-color": "var(--red)",
      animation: "shake 0.5s",
    });
  } else {
    $(".brngy_msg").removeClass("active");
    $("#brngy").css({
      "border-color": "",
      animation: "",
    });
  }

  var city = $("#city").val();

  if (city === "" || isNaN(Date.parse(city))) {
    $(".city_msg").addClass("active");
    $("#city").css({
      "border-color": "var(--red)",
      animation: "shake 0.5s",
    });
  } else {
    $(".city_msg").removeClass("active");
    $("#city").css({
      "border-color": "",
      animation: "",
    });
  }

  var province = $("#province").val();

  if (province === "" || isNaN(Date.parse(province))) {
    $(".province_msg").addClass("active");
    $("#province").css({
      "border-color": "var(--red)",
      animation: "shake 0.5s",
    });
  } else {
    $(".province_msg").removeClass("active");
    $("#province").css({
      "border-color": "",
      animation: "",
    });
  }

  if ($(".selected-option").text().trim() === "Select Civil Status") {
    $(".status_msg").addClass("active");
    $(".custom-select").css({
      "border-color": "var(--red)",
      animation: "shake 0.5s",
    });
  } else {
    $(".status_msg").removeClass("active");
    $(".custom-select").css({
      "border-color": "",
      animation: "",
    });
  }
}

$(document).ready(function () {
  $("#province").on("keyup", function () {
    var province = $("#province").val();

    if (province === "") {
      $(".province_msg").addClass("active");
      $("#province").css({
        "border-color": "var(--red)",
        animation: "shake 0.5s",
      });
    } else {
      $(".province_msg").removeClass("active");
      $("#province").css({
        "border-color": "",
        animation: "",
      });
    }
  });
  $("#city").on("keyup", function () {
    var city = $("#city").val();

    if (city === "") {
      $(".city_msg").addClass("active");
      $("#city").css({
        "border-color": "var(--red)",
        animation: "shake 0.5s",
      });
    } else {
      $(".city_msg").removeClass("active");
      $("#city").css({
        "border-color": "",
        animation: "",
      });
    }
  });
  $("#brngy").on("keyup", function () {
    var brngy = $("#brngy").val();

    if (brngy === "") {
      $(".brngy_msg").addClass("active");
      $("#brngy").css({
        "border-color": "var(--red)",
        animation: "shake 0.5s",
      });
    } else {
      $(".brngy_msg").removeClass("active");
      $("#brngy").css({
        "border-color": "",
        animation: "",
      });
    }
  });
  $("#street").on("keyup", function () {
    var street = $("#street").val();

    if (street === "") {
      $(".street_msg").addClass("active");
      $("#street").css({
        "border-color": "var(--red)",
        animation: "shake 0.5s",
      });
    } else {
      $(".street_msg").removeClass("active");
      $("#street").css({
        "border-color": "",
        animation: "",
      });
    }
  });
  $("#hnum").on("keyup", function () {
    var hnum = $("#hnum").val();

    if (hnum === "") {
      $(".hnum_msg").addClass("active");
      $("#hnum").css({
        "border-color": "var(--red)",
        animation: "shake 0.5s",
      });
    } else {
      $(".hnum_msg").removeClass("active");
      $("#hnum").css({
        "border-color": "",
        animation: "",
      });
    }
  });
});
