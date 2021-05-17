$(document).ready(function () {
  var headerHeight = $("header").height();
  $(".container-fluid").css("margin-top", headerHeight + "px");
  // $('.sub_menu').css('width', $('header').width());

  /*Go to top*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#myBtn").fadeIn("slow");
    } else {
      $("#myBtn").fadeOut("slow");
    }
  });
  $("#myBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  $(".banner_slider .owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoplaySpeed: 2000,
  });

  $('[data-toggle="tooltip"]').tooltip({
    trigger: "hover",
  });

  // Mobile Quick Links Slider

  if ($(window).width() < 600) {
    $('[data-toggle="tooltip"]').tooltip("disable");

    $(".quicklinks .owl-carousel").owlCarousel({
      items: 2,
      dots: true,
      nav: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      autoplaySpeed: 2000,
    });
  }

  // Mobile Footer Links

  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".svg-inline--fa")
      .addClass("fa-minus")
      .removeClass("fa-plus");
  });
  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".svg-inline--fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".svg-inline--fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });

  // Password or Pan Functionality

  $('#password input[type="radio"]').click(function () {
    if ($(this).attr("id") == "passwordRadio") {
      $(".password_pan_box .forgot_password, .password_eye").show();
      $(".password_pan_box input").attr("type", "password");
      $(".password_pan_box input").val("");
      $(".password_pan_box input").attr("placeholder", "Enter Password");
      $(".captcha").show();
    } else {
      $(".password_pan_box .forgot_password, .password_eye").hide();
      $(".password_pan_box input").attr("type", "text");
      $(".password_pan_box input").val("");
      $(".password_pan_box input").attr("placeholder", "Enter PAN");
      $(".password_pan_box").css("height", "75px");
      $(".captcha").hide();
    }
  });

  // Login Flow

  $("#transact button.signInbtn").click(function (e) {
    e.preventDefault();
    $("#transact").hide();
    $("#password").show();
  });

  $(".account_locked a").click(function (e) {
    e.preventDefault();
    $("#transact").hide();
    $("#accountLocked").show();
  });

  $("#accountLocked a").click(function (e) {
    e.preventDefault();
    $("#accountLocked").hide();
    $("#accountlocked_otp").show();
  });

  $("#accountlocked_otp a").click(function (e) {
    e.preventDefault();
    $("#accountlocked_otp").hide();
    $("#unlocksuccess").show();
  });

  $(".forgot_password").click(function (e) {
    e.preventDefault();
    $("#password").hide();
    $("#forgotPassword").show();
  });

  $("#forgotPassword a").click(function (e) {
    e.preventDefault();
    $("#forgotPassword").hide();
    $("#forgotpassword_otp").show();
  });

  $("#forgotpassword_otp a").click(function (e) {
    e.preventDefault();
    $("#forgotpassword_otp").hide();
    $("#newPassword").show();
  });

  $("#newPassword .submit_btn").click(function (e) {
    e.preventDefault();
    $("#newPassword").hide();
    $("#newPasswordsuccess").show();
  });

  $("#selectFolio button").click(function (e) {
    e.preventDefault();
    $("#password").hide();
    $("#login_otp").show();
    $("#selectFolio").modal("hide");
  });

  $("#accountLocked .folio_provided img").click(function (e) {
    e.preventDefault();
    $("#transact").show();
    $("#accountLocked").hide();
  });

  $("#accountlocked_otp .folio_provided img").click(function (e) {
    e.preventDefault();
    $("#accountLocked").show();
    $("#accountlocked_otp").hide();
  });

  $("#forgotpassword_otp .folio_provided img").click(function (e) {
    e.preventDefault();
    $("#forgotPassword").show();
    $("#forgotpassword_otp").hide();
  });

  $("#forgotPassword .folio_provided img").click(function (e) {
    e.preventDefault();
    $("#password").show();
    $("#forgotPassword").hide();
  });

  $("#unlocksuccess .folio_provided img").click(function (e) {
    e.preventDefault();
    $("#accountlocked_otp").show();
    $("#unlocksuccess").hide();
  });

  $("#newPassword .folio_provided img").click(function (e) {
    e.preventDefault();
    $("#forgotpassword_otp").show();
    $("#newPassword").hide();
  });

  $("#newPasswordsuccess .folio_provided img").click(function (e) {
    e.preventDefault();
    $("#newPassword").show();
    $("#newPasswordsuccess").hide();
  });

  $("#password .folio_provided img").click(function (e) {
    e.preventDefault();
    $("#transact").show();
    $("#password").hide();
  });

  $(
    "#login_otp .folio_provided img, #registration_otp .folio_provided img"
  ).click(function (e) {
    e.preventDefault();
    $("#password").show();
    $("#login_otp").hide();
    $("#registration_otp").hide();
  });

  // Dropdown Functionality

  $(".dropdown_menu").hover(
    function () {
      $(".sub_menu").css("width", $("header").width());
      $("." + $(this).find("a").attr("data-id") + "_sub_menu").show();
      var menuOffset = $(
        "." + $(this).find("a").attr("data-id") + "_sub_menu"
      ).offset().left;
      $("." + $(this).find("a").attr("data-id") + "_sub_menu").css(
        "left",
        -menuOffset
      );
    },
    function () {
      var menuOffset = $(
        "." + $(this).find("a").attr("data-id") + "_sub_menu"
      ).offset().left;
      $("." + $(this).find("a").attr("data-id") + "_sub_menu").css(
        "left",
        -menuOffset
      );
      $("." + $(this).find("a").attr("data-id") + "_sub_menu").hide();
    }
  );

  if ($(window).width() > 1000 && $(window).width() < 1300) {
    $(".dropdown_menu a[data-id]").click(function (e) {
      e.preventDefault();
    });
  }

  // Hide/Show Password
  $(".password_eye").click(function (e) {
    e.preventDefault();
    var x = $(this).parent().find("input");
    if (x.attr("type") === "password") {
      x.attr("type", "text");
      $(this).find("img").attr("src", "images/eye.png");
    } else {
      $(this).find("img").attr("src", "images/eye-show.png");
      x.attr("type", "password");
    }
  });

  // Font Resize Functionality
  var fontResize = 0;
  $(document).on("click", "#increase.active", function (e) {
    e.preventDefault();
    $(this).removeClass("active");
    $("*")
      .children()
      .each(function () {
        var size = parseInt($(this).css("font-size"));
        if (fontResize == 0) {
          size = size + 1 + "px";
        } else if (fontResize == -1) {
          size = size + 2 + "px";
        } else {
        }
        $(this).css({
          "font-size": size,
        });
      });
    $("#decrease").addClass("active");
    fontResize = 1;
    console.log(fontResize);
  });

  $(document).on("click", "#reset.active", function (e) {
    e.preventDefault();
    $("*")
      .children()
      .each(function () {
        var size = parseInt($(this).css("font-size"));
        if (fontResize > 0) {
          size = size - 1 + "px";
        } else if (fontResize < 0) {
          size = size + 1 + "px";
        } else {
        }
        $(this).css({
          "font-size": size,
        });
      });
    $("#increase").addClass("active");
    $("#decrease").addClass("active");
    fontResize = 0;
    console.log(fontResize);
  });

  $(document).on("click", "#decrease.active", function (e) {
    e.preventDefault();
    $(this).removeClass("active");
    $("*")
      .children()
      .each(function () {
        var size = parseInt($(this).css("font-size"));
        if (fontResize == 0) {
          size = size - 1 + "px";
        } else if (fontResize == 1) {
          size = size - 2 + "px";
        } else {
        }
        $(this).css({
          "font-size": size,
        });
      });
    $("#increase").addClass("active");
    fontResize = -1;
    console.log(fontResize);
  });

  // Font Resize Functionality
  // Constrast Functionality
  var constrast = 0;
  $(document).on("click", ".header_top_fontBackground a", function (e) {
    e.preventDefault();
    if ($(this).hasClass("blackContrast")) {
      // $("*")
      //   .children()
      //   .each(function () {
      //     $(this).css({
      //       "background-color": "#000",
      //       color: "#fff",
      //     });
      //   });
      $("body").addClass("darkmode");
      constrast = 1;
    } else if ($(this).hasClass("whiteContrast")) {
      // $("*")
      //   .children()
      //   .each(function () {
      //     $(this).css({
      //       "background-color": "",
      //       color: "",
      //     });
      //   });
      // let links = document.getElementsByTagName("link");
      // for (let i = 0; i < links.length; i++) {
      //   if (links[i].getAttribute("rel") == "stylesheet") {
      //     let href = links[i].getAttribute("href").split("?")[0];
      //     let newHref = href + "?version=" + new Date().getMilliseconds();
      //     links[i].setAttribute("href", newHref);
      //   }
      // }
      $("body").removeClass("darkmode");
    } else {
    }
  });

  $(".ftp_modal_right a").click(function () {
    alert(
      "You have opted for paperless transaction mode. Please note that in this mode, the signature(s) will be captured from the KRA form submitted during the KYC process. All the non-commercial transaction(s) will be processed in physical mode only. The folio number so allotted will be in freezed mode and transactions will be available only when the KYC details are validated. Kindly proceed to fill up the online form and make online payment against the selected scheme. A confirmation email will be sent to your registered email address within 5 business days."
    );
  });

  $(".highlight_icon").on("keyup blur", function () {
    if (!$(this).val()) {
      $(this).parent().find(".quickpurchase_inputs_inactive").show();
      $(this).parent().find(".quickpurchase_inputs_active").hide();
    } else {
      $(this).parent().find(".quickpurchase_inputs_active").show();
      $(this).parent().find(".quickpurchase_inputs_inactive").hide();
    }
  });

  // Investing Through Functionality
  $("input[name='investingthrough']").on("click", function () {
    x = $(this).val();
    if (x == "arn") {
      $(".investingthroughdistributor").show();
      $(".investingthroughria").hide();
      $(".investingthroughdirect").hide();
    } else if (x == "ria") {
      $(".investingthroughdistributor").hide();
      $(".investingthroughria").show();
      $(".investingthroughdirect").hide();
    } else {
      $(".investingthroughria").hide();
      $(".investingthroughdistributor").hide();
      $(".investingthroughdirect").show();
    }
  });
  // EUIN Number Functionality
  $("input[name='euinNumber']").on("click", function () {
    x = $(this).val();
    if (x == "euinyes") {
      $(".enter-euin-number").show();
      $(".euin-declaration-info").hide();
    } else if (x == "euinno") {
      $(".enter-euin-number").hide();
      $(".euin-declaration-info").show();
    } else {
    }
  });

  $("input[name='investin']").on("click", function () {
    x = $(this).val();
    if (x == "existingscheme") {
      $(".additional_existing").show();
      $(".additional_new").hide();
    } else if (x == "newscheme") {
      $(".additional_existing").hide();
      $(".additional_new").show();
    } else {
    }
  });

  //   Select Icon Change Functionality

  $(".quickpurchase_inputs select").each(function () {
    x = this.value;
    if (x == 0) {
      $(this).css("color", "#8a8f94");
      $(this).parent().find(".quickpurchase_selects_inactive").show();
      $(this).parent().find(".quickpurchase_selects_active").hide();
      $(this).parent().find(".quickpurchase_selects_arrow_grey").hide();
    } else {
      $(this).css("color", "#141619");
      $(this).parent().find(".quickpurchase_selects_inactive").hide();
      $(this).parent().find(".quickpurchase_selects_active").show();
      $(this).parent().find(".quickpurchase_selects_arrow_grey").show();
    }
  });
  $(".quickpurchase_inputs select").on("change", function () {
    x = this.value;
    if (x == 0) {
      $(this).css("color", "#8a8f94");
      $(this).parent().find(".quickpurchase_selects_inactive").show();
      $(this).parent().find(".quickpurchase_selects_active").hide();
      $(this).parent().find(".quickpurchase_selects_arrow_grey").hide();
    } else {
      $(this).css("color", "#141619");
      $(this).parent().find(".quickpurchase_selects_inactive").hide();
      $(this).parent().find(".quickpurchase_selects_active").show();
      $(this).parent().find(".quickpurchase_selects_arrow_grey").show();
    }
  });

  $(".adn_pur_schemesadded_no a").click(function (e) {
    e.preventDefault();
    $(".adn_pur_schemesadded .investing-through").toggle();
    $(this).next().toggleClass("active");
  });
  $("input[name='additionalPayment']").on("click", function () {
    if ($("#additionalnetbanking").prop("checked") == true) {
      $(".quick-additional-purchase-payment-page .quickpurchase_btn_save").attr(
        "href",
        "quick-additional-purchase-confirmation.html"
      );
    }
    if ($("#additionalNEFT").prop("checked") == true) {
      $(".quick-additional-purchase-payment-page .quickpurchase_btn_save").attr(
        "href",
        "quick-purchase-confirmation-neft.html"
      );
    }
  });
  $("#done-neft").click(function () {
    $(".neft-hidden-payment").show();
  });
  $("#neft-info-okay").click(function () {
    $(".neft-hidden-payment").show();
    $("#neft-not-done-info").modal("hide");
  });
  $("#not-done-neft").click(function () {
    $("#neft-not-done-info").modal("show");
  });
  $("input[name='perpetual-installments']").on("click", function () {
    x = $(this).val();
    if (x == "installments") {
      $(".enter-euin-number").show();
      $(".euin-declaration-info").hide();
      $(".perpetual_end_date").hide();
    } else if (x == "perpetual") {
      $(".enter-euin-number").hide();
      $(".euin-declaration-info").show();
      $(".perpetual_end_date").show();
    } else {
    }
  });
  $(".sip_goals").owlCarousel({
    items: 5,
    dots: false,
    nav: true,
    loop: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 3,
        nav: true,
        loop: false,
      },
      600: {
        items: 4,
        nav: true,
        loop: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  });

  $("input[name='goalsip']").on("click", function () {
    x = $(this).val();
    if (x == "goalsipyes") {
      $(".goal_sip_yes").show();
      $(".goal_sip_no").hide();
    } else if (x == "goalsipno") {
      $(".goal_sip_yes").hide();
      $(".goal_sip_no").show();
    } else {
    }
  });

  $("input[name='editContactDetails']").on("click", function () {
    x = $(this).val();
    if (x == "editMobileNo") {
      var SearcheditMobileNo = $("#editMobileNoInput");
      var MobilestrLength = SearcheditMobileNo.val().length;
      $("#editEmailIdInput").attr("disabled", true);
      SearcheditMobileNo.attr("disabled", false).focus();
      SearcheditMobileNo[0].setSelectionRange(MobilestrLength, MobilestrLength);
      $("#editEmailIdInputBtn").hide();
      $("#editMobileNoInputBtn").show();
    } else if (x == "editEmailId") {
      var SearcheditEmailId = $("#editEmailIdInput");
      var EmailstrLength = SearcheditEmailId.val().length;
      $("#editMobileNoInput").attr("disabled", true);
      SearcheditEmailId.attr("disabled", false).focus();
      SearcheditEmailId[0].setSelectionRange(EmailstrLength, EmailstrLength);
      $("#editMobileNoInputBtn").hide();
      $("#editEmailIdInputBtn").show();
    } else {
    }
  });
});

// Preloader Functionality

$(window).on("load", function () {
  $("#status").fadeOut();
  $(".preloader").delay(1000).fadeOut();

  // if browser is Internet Explorer 
  var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) 
    {
        alert('This website is best viewed in  Firefox 47+, Chrome 55+, Safari 5.0+, Edge 12+ at 1366 X 768 pixels resolution.');
    }
    else {}
});
$(document).ready(function () {
  $("#confirmSIPEndDate").datepicker({
    format: "dd-mm-yyyy",
  });
});
