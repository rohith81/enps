$(document).ready(function () {
  var headerHeight = $("header").height();
  $(".container-fluid").css("margin-top", headerHeight + "px");

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

  $('[data-toggle="tooltip"]').tooltip();
  // Account statement

  $("#schedule-all-schemes, #generate-all-schemes").change(function () {
    if ($(this).prop("checked")) {
      $(this).parent().parent().next().hide();
    } else {
      $(this).parent().parent().next().show();
    }
  });

  // Add nominee
  $("#add-nominee").click(function () {
    $(".add-nominee ").hide();
    $(".total-no-nominees-screen").show();
  });
  $("#addNomineeOTPSuccessfulOk").click(function () {
    $(".total-no-nominees-screen").hide();
    if ($(window).width() > 768){
      $(".nominee-details").css("display", "flex");
    }
    else {
      $(".nominee-details").css("display", "block");
      
    }
  });
  $("#cancel-nominee").click(function () {
    $(".total-no-nominees-screen").hide();
    $(".add-nominee").show();
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

  $(".progress_bar").each(function () {
    var $bar = $(this).find(".bar");
    var $val = $(this).find("span");
    var perc = parseInt($val.text(), 10);
    $({ p: 0 }).animate(
      { p: perc },
      {
        duration: 3000,
        easing: "swing",
        step: function (p) {
          $bar.css({
            transform: "rotate(" + (45 + p * 1.8) + "deg)", // 100%=180° so: ° = % * 1.8
            // 45 is to add the needed rotation to have the green borders at the bottom
          });
          $val.text(p | 0);
        },
      }
    );
  });

  $(".goal_progress_total").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
  });

  $(".recommended_schemes_all, .learn_invest_all").owlCarousel({
    items: 3,
    dots: false,
    nav: true,
    loop: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: false,
      },
      600: {
        items: 2,
        nav: true,
        loop: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
  $(".knowledge_center_all").owlCarousel({
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
        items: 2,
        nav: true,
        loop: false,
      },
      600: {
        items: 3,
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
  $(".ftp_dashboard .ftp_learn_invest_all").owlCarousel({
    items: 4,
    dots: false,
    nav: true,
    loop: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: false,
      },
      600: {
        items: 3,
        nav: true,
        loop: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
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

  // popup functionality
  $(".mobile .schemes").click(function () {
    $(".folio-model").show();
    $("body").css("overflow", "hidden");
    $(".header_top").addClass("active");
    $("header").css({ "margin-top": "32px", transition: "none" });
  });
  $(".mobile .folio-close").click(function () {
    $(".folio-model").hide();
    $("body").css("overflow", "auto");
    $(".header_top").removeClass("active");
    $("header").css({ "margin-top": "0" });
  });
  $(".filter-icon").click(function () {
    $("body").css("overflow", "hidden");
    $(".header_top").addClass("active");
    $("header").css({ "margin-top": "32px", transition: "none" });
  });
  $(" .filter-main-modal .close").click(function () {
    $("body").css("overflow", "auto");
    $(".header_top").removeClass("active");
    $("header").css({ "margin-top": "0" });
  });
  $(".mat_fund,.portfolio-carousel").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    margin: 10,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
      600: {
        items: 1,
        nav: false,
        loop: true,
      },
      1000: {
        items: 1,
        nav: false,
        loop: true,
      },
    },
  });

  if ($(window).width() < 1300) {
    $(".header_toggle").click(function (e) {
      e.preventDefault();
      $(".dashboard_left_total").toggleClass("active");
      $("body").toggleClass("active");
    });

    $(".dashboard_left_transparent").click(function (e) {
      // if (!$(e.target).hasClass("dashboard_left")) {
      $(".dashboard_left_total").removeClass("active");
      $("body").removeClass("active");
      // }
    });
  }
  $("input[name='payment-details-radio-buttons']").on("click", function () {
    x = $(this).val();
    if (x == "net-banking") {
      $(".payment-details-net-banking").show();
      $(".payment-details-neft").hide();
    } else if (x == "NEFT") {
      $(".payment-details-net-banking").hide();
      $(".payment-details-neft").show();
    } else {
    }
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

  // Collapsible Menu Functionality

  $(".desktop_menu_collapse").click(function (e) {
    e.preventDefault();
    console.log("sfsfsf");
    $(".dashboard_left_total").toggleClass(
      "col-md-2 dashboard_left_total_active col-md-1"
    );
    $(".dashboard_right_total").toggleClass(
      "col-md-10 col-md-11 dashboard_right_total_active"
    );
  });

  // Constract Functionality
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

  //   Select Icon Change Functionality

  $(".transactnow_inputs select").each(function () {
    x = this.value;
    if (x == 0) {
      $(this).css("color", "#8a8f94");
      $(this).parent().find(".transactnow_selects_inactive").show();
      $(this).parent().find(".transactnow_selects_active").hide();
      $(this).parent().find(".transactnow_selects_arrow_grey").hide();
    } else {
      $(this).css("color", "#141619");
      $(this).parent().find(".transactnow_selects_inactive").hide();
      $(this).parent().find(".transactnow_selects_active").show();
      $(this).parent().find(".transactnow_selects_arrow_grey").show();
    }
  });
  $(".transactnow_inputs select").on("change", function () {
    x = this.value;
    if (x == 0) {
      $(this).css("color", "#8a8f94");
      $(this).parent().find(".transactnow_selects_inactive").show();
      $(this).parent().find(".transactnow_selects_active").hide();
      $(this).parent().find(".transactnow_selects_arrow_grey").hide();
    } else {
      $(this).css("color", "#141619");
      $(this).parent().find(".transactnow_selects_inactive").hide();
      $(this).parent().find(".transactnow_selects_active").show();
      $(this).parent().find(".transactnow_selects_arrow_grey").show();
    }
  });

  $(".highlight_icon").on("keyup blur", function () {
    if (!$(this).val()) {
      $(this).parent().find(".transactnow_inputs_inactive").show();
      $(this).parent().find(".transactnow_inputs_active").hide();
    } else {
      $(this).parent().find(".transactnow_inputs_active").show();
      $(this).parent().find(".transactnow_inputs_inactive").hide();
    }
  });
  $(".change_highlight_icon").on("keyup blur", function () {
    if (!$(this).val()) {
      $(this).parent().parent().find(".transactnow_inputs_inactive").show();
      $(this).parent().parent().find(".transactnow_inputs_active").hide();
    } else {
      $(this).parent().parent().find(".transactnow_inputs_active").show();
      $(this).parent().parent().find(".transactnow_inputs_inactive").hide();
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

  $(
    ".switch_page_value .switch_value_select select, .redemption_page_value .switch_value_select select"
  ).change(function () {
    x = this.value;
    if (x == 1) {
      $(".switch_value_units p").html(
        "Minimum Switch Units: <span>515.331</span>"
      );
    } else {
      $(".switch_value_units p").html(
        "Minimum Switch Amount: <span>₹ 5000</span>"
      );
    }
  });

  $('.switch_value_right input[type="checkbox"]').click(function () {
    if ($(this).prop("checked") == true) {
      $(".switch_value_units p").html(
        "Total Applicable Units : <span>715.331</span>"
      );
    } else if ($(this).prop("checked") == false) {
      $(".switch_value_units p").html(
        "Minimum Switch Amount: <span>₹ 5000</span>"
      );
    }
  });
  $('#add-bank').click(function () {
    $('#add-bank').hide();
    $('.add-another-account').show();
})
  $('#add-bank-cancel').click(function () {
    $('#add-bank').show();
    $('.add-another-account').hide();
  })
  $('#add-bank-save').click(function () {
    $('#add-bank').show();
    $('.add-another-account').hide();
    $('.bank-details-account-details.new').show();
  })
  $('#done-neft').click(function () {
    $('.neft-hidden-payment').show();
  })
  $('#neft-info-okay').click(function () {
    $('.neft-hidden-payment').show();
    $('#neft-not-done-info').modal('hide')
  })
 
  $('.additional-purchase-payment-page input[type="radio"]').click(function () {
    if ($('#additionalnetbanking').prop("checked") == true) {
      $('.additional-purchase-payment-page .transactnow_btn_save').attr('href','additional-purchase-confirmation.html')
    } 
    if ($('#additionalNEFT').prop("checked") == true) {
      $('.additional-purchase-payment-page .transactnow_btn_save').attr('href','purchase-confirmation-neft.html')
    } 
    
  });
  $('#not-done-neft').click(function () {
    $('#neft-not-done-info').modal('show')
  })
  $(".systematic .nav-tabs li a").click(function () {
    x = $(this).attr("data-id");
    if (x == "sip") {
      $(".systematic-investments-heading").text("Systematic Investment Plan");
    } else if (x == "swp") {
      $(".systematic-investments-heading").text("Systematic Withdrawal Plan");
    }
    else if (x == "physical-sip") {
      $(".systematic-investments-heading").text("Physical Systematic Investment Plan");
    }
    else {
      $(".systematic-investments-heading").text("Systematic Transfer Plan");
    }
  });

  $(".adn_pur_schemesadded_no a").click(function (e) {
    e.preventDefault();
    $(".adn_pur_schemesadded .investing-through").toggle();
    $(this).next().toggleClass("active");
  });

  $("#changeEmailId img").click(function () {
    $(this).parent().hide();
    $(".change_email_id").show();
  });
  $("#changePhoneNumber img").click(function () {
    $(this).parent().hide();
    $(".change_number").show();
  });

  $(".change_email_id a.back, #emailChangeSuccessfulOk").click(function () {
    $("#changeEmailId").show();
    $(".change_email_id").hide();
  });
  $(".change_number a.back, #changePhoneNumberOTPSuccessfulOk").click(function (e) {
    e.preventDefault();
    $("#changePhoneNumber").show();
    $(".change_number").hide();
  });

  $("#sip-cancel-proceed-btn").click(function () {
    var r = confirm("SIP will be cancelled from 09/12/2020 onwards. \nDo you still want to Cancel Registration?");
    if (r == true) {
      // console.log("You pressed OK!");
      window.location.href = "systematic-investment-successful.html";
    } else {
      // console.log("You pressed Cancel!");
    }
  });
  $("#swp-cancel-proceed-btn").click(function () {
    var r = confirm("SWP will be cancelled from 09/12/2020 onwards. \nDo you still want to Cancel Registration?");
    if (r == true) {
      // console.log("You pressed OK!");
      window.location.href = "systematic-investment-successful.html";
    } else {
      // console.log("You pressed Cancel!");
    }
  });
  $("#stp-cancel-proceed-btn").click(function () {
    var r = confirm("STP will be cancelled from 09/12/2020 onwards. \nDo you still want to Cancel Registration?");
    if (r == true) {
      // console.log("You pressed OK!");
      window.location.href = "systematic-investment-successful.html";
    } else {
      // console.log("You pressed Cancel!");
    }
  });

  // Hide/Show Password
  $(".password_eye").click(function (e) {
    e.preventDefault();
    var x = $(this).parent().find("input");
    if (x.attr("type") === "password") {
      x.attr("type", "text");
      $(this).find("img").attr("src", "../images/eye.png");
    } else {
      $(this).find("img").attr("src", "../images/eye-show.png");
      x.attr("type", "password");
    }
  });

  $(".favouriteTransactionBtn").click(function(e){
    e.preventDefault();
    var r = confirm("Do you wish to make this as your favourite transaction?");
    if (r == true) {
      // console.log("You pressed OK!");
      window.location.href = "my-transaction.html";
    } else {
      // console.log("You pressed Cancel!");
    }
  })



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
// DatePicker
$(document).ready(function () {
  $(".recommended_schemes_popover").click(function (e) {
    e.preventDefault();
    $(this).popover("toggle");
  });

  $(
    "#dob, #stpEnrollmentFrom, #stpEnrollmentTo, #swpDate, #swpPeriodFrom, #swpPeriodTo, #statementFromDate, #statementToDate, #sipPauseEndDate, #sipPauseStartDate"
  ).datepicker({
    format: "dd-mm-yyyy",
  });
});
