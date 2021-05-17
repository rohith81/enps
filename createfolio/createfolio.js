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

  $('[data-toggle="tooltip"]').tooltip({
    trigger: "hover",
  });

  // Mobile Quick Links Slider

  if ($(window).width() < 600) {
    $('[data-toggle="tooltip"]').tooltip("disable");
  }

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

  //   Select Icon Change Functionality

  $(".createfolio_inputs select").each(function () {
    x = this.value;
    if (x == 0) {
      $(this).css("color", "#8a8f94");
      $(this).parent().find(".createfolio_selects_inactive").show();
      $(this).parent().find(".createfolio_selects_active").hide();
      $(this).parent().find(".createfolio_selects_arrow_grey").hide();
    } else {
      $(this).css("color", "#141619");
      $(this).parent().find(".createfolio_selects_inactive").hide();
      $(this).parent().find(".createfolio_selects_active").show();
      $(this).parent().find(".createfolio_selects_arrow_grey").show();
    }
  });
  $(".createfolio_inputs select").on("change", function () {
    x = this.value;
    if (x == 0) {
      $(this).css("color", "#8a8f94");
      $(this).parent().find(".createfolio_selects_inactive").show();
      $(this).parent().find(".createfolio_selects_active").hide();
      $(this).parent().find(".createfolio_selects_arrow_grey").hide();
    } else {
      $(this).css("color", "#141619");
      $(this).parent().find(".createfolio_selects_inactive").hide();
      $(this).parent().find(".createfolio_selects_active").show();
      $(this).parent().find(".createfolio_selects_arrow_grey").show();
    }
  });

  $(".highlight_icon").on("keyup blur", function () {
    if (!$(this).val()) {
      $(this).parent().find(".createfolio_inputs_inactive").show();
      $(this).parent().find(".createfolio_inputs_active").hide();
    } else {
      $(this).parent().find(".createfolio_inputs_active").show();
      $(this).parent().find(".createfolio_inputs_inactive").hide();
    }
  });

  // Mode of Holding Functionality
  $("input[name='holdingmode']").on("click", function () {
    x = $(this).val();
    if (x == "single") {
      $("#survivor_mode").hide();
      $("#single_mode").show();
    } else if (x == "survivor") {
      $("#single_mode").hide();
      $("#survivor_mode").show();
    } else {
    }
  });

  // KYC Category Functionality
  $("input[name='kyccategory']").on("click", function () {
    x = $(this).val();
    if (x == "resident") {
      $(".nri_overseas_details").hide();
    } else if (x == "nre") {
      $(".nri_overseas_details").show();
    } else {
    }
  });
  $("input[name='payment-details-radio-buttons']").on("click", function () {
    x = $(this).val();
    if (x == "net-banking") {
      // $(".payment-details-net-banking").show();
      // $(".payment-details-neft").hide();
      $("#createfolio_payment_btn").attr("href", "confirmation.html");
    } else if (x == "NEFT") {
      // $(".payment-details-net-banking").hide();
      // $(".payment-details-neft").show();
      $("#createfolio_payment_btn").attr("href", "payment-details-neft.html");
    } else {
      $("#createfolio_payment_btn").attr("href", "confirmation.html");
    }
  });
  // Assign a Goal Functionality
  $("input[name='assignGoal']").on("click", function () {
    x = $(this).val();
    if (x == "frequencyMonthly") {
      $(".goal_sip_content").show();
      $(".goal_sip_heading .createfolio_radio.scheme_frequency").css({
        "margin-bottom": "20px",
        "border-bottom": "1px solid #eaedef",
        "padding-bottom": "10px",
      });
    } else if (x == "frequencyQuarterly") {
      $(".goal_sip_content").hide();
      $(".goal_sip_heading .createfolio_radio.scheme_frequency").css({
        "margin-bottom": "0",
        "border-bottom": "0",
        "padding-bottom": "0",
      });
    } else {
    }
  });

  // Same as First Holder Address Functionality
  $(".nominee_address_check input").on("click", function () {
    x = $(this).prop("checked");
    if (x == true) {
      $(".nominee_new_address, .add_nominee_btn").hide();
    } else if (x == false) {
      $(".nominee_new_address, .add_nominee_btn").show();
    } else {
    }
  });

  // I wish not to nominate Functionality
  $(".not_nominate_check input").on("click", function () {
    x = $(this).prop("checked");
    if (x == true) {
      $(
        ".nominee_new_address, .nominees_list, .add_nominee_btn, .nominee_details .createfolio_inputs, .nominee_address_check, .createfolio_nominees"
      ).hide();
    } else if (x == false) {
      $(
        ".nominee_details .createfolio_inputs, .nominee_address_check, .createfolio_nominees"
      ).show();
      $(".nominee_address_check input, input[id='nominee1']").prop(
        "checked",
        true
      );
    } else {
    }
  });

  // Number of Nominees Functionality
  $("input[name='nomineesno']").on("click", function () {
    x = $(this).val();
    if (x == "nominee2") {
      $(".nominees_list, .add_nominee_btn").show();
      $(".nominees_list_info2").hide();
    } else if (x == "nominee3") {
      $(".nominees_list, .nominees_list_info2").show();
      $(".add_nominee_btn").hide();
    } else {
      $(".add_nominee_btn, .nominees_list, .nominees_list_info2").hide();
    }
  });

  // Add down icon for collapse element which is open by default
  $("#survivor_mode .collapse.show").each(function () {
    var src = $(this).prev(".card-header").find("img").attr("src");
    $(this)
      .prev(".card-header")
      .find("img")
      .attr("src", src.replace("down", "up"));
  });
  // Toggle down up icon on show hide of collapse element
  $("#survivor_mode .collapse")
    .on("show.bs.collapse", function () {
      var src = $(this).prev(".card-header").find("img").attr("src");
      $(this)
        .prev(".card-header")
        .find("img")
        .attr("src", src.replace("down", "up"));
    })
    .on("hide.bs.collapse", function () {
      var src = $(this).prev(".card-header").find("img").attr("src");
      $(this)
        .prev(".card-header")
        .find("img")
        .attr("src", src.replace("up", "down"));
    });

  // Add to Cart Functionality
  $(".addtocart_btn a").click(function (e) {
    e.preventDefault();
    if ($(window).width() > 600) {
      $(".investment_cart").show();
    }
  });

  // Investing Through Functionality
  $("input[name='investingthrough']").on("click", function () {
    x = $(this).val();
    if (x == "arn") {
      $(".investment_label_mobile").hide();
      $(".investingthroughdistributor").show();
      $(".investingthroughria").hide();
      $(".investingthroughdirect").hide();
    } else if (x == "ria") {
      $(".investment_label_mobile").show();
      $(".investingthroughdistributor").hide();
      $(".investingthroughria").show();
      $(".investingthroughdirect").hide();
    } else {
      $(".investment_label_mobile").hide();
      $(".investingthroughria").hide();
      $(".investingthroughdistributor").hide();
      $(".investingthroughdirect").show();
    }
  });

  // EUIN No Functionality
  $("input[name='euinNumber']").on("click", function () {
    x = $(this).val();
    if (x == "euinyes") {
      $(".euin-input-div").show();
      $(".euin-declaration-info").hide();
    } else if (x == "euinno") {
      $(".euin-input-div").hide();
      $(".euin-declaration-info").show();
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

  // Investment Details Mobile Functionality
  $(".createfolio_btn_save_1").click(function (e) {
    e.preventDefault();
    $(".investment_mobile_part1, .createfolio_btn_save_1").hide();
    $(
      ".investment_scheme_details, .createfolio_btn_save_2, #mobile_heading_link"
    ).show();
    $("span.mobile_heading_span strong").text("2.2");
    $("#mobile_heading_link").addClass("investment_two");
    $("html, body").animate({ scrollTop: 200 }, 500);
  });
  $("body").on("click", ".investment_two", function (e) {
    e.preventDefault();
    $(".investment_mobile_part1, .createfolio_btn_save_1").show();
    $(".investment_scheme_details, .createfolio_btn_save_2").hide();
    $("span.mobile_heading_span strong").text("2.1");
    $("#mobile_heading_link").removeClass("investment_two");
    $("html, body").animate({ scrollTop: 200 }, 500);
  });
  $("body").on("click", ".createfolio_btn_save_2", function (e) {
    e.preventDefault();
    $(
      ".createfolio_btn_save_3, .investment_cart, .investment_scheme_details, .investment_label_mobile"
    ).show();
    $(
      ".createfolio_btn_save_2, .investment_scheme_details ul.nav.nav-tabs, .investment_mobile_part2, .investment_scheme_details > p, .investment_scheme_details > h4"
    ).hide();
    $("span.mobile_heading_span strong").text("2.3");
    $("#mobile_heading_link").removeClass("investment_two");
    $("#mobile_heading_link").addClass("investment_three");
    $("html, body").animate({ scrollTop: 200 }, 500);
  });
  $("body").on("click", ".investment_three", function (e) {
    e.preventDefault();
    $(
      ".createfolio_btn_save_3, .investment_cart, .investment_label_mobile"
    ).hide();
    $(
      ".createfolio_btn_save_2, .investment_scheme_details ul.nav.nav-tabs, .investment_mobile_part2, .investment_scheme_details > p, .investment_scheme_details > h4"
    ).show();
    $("span.mobile_heading_span strong").text("2.2");
    $("#mobile_heading_link").removeClass("investment_three");
    $("#mobile_heading_link").addClass("investment_two");
    $("html, body").animate({ scrollTop: 200 }, 500);
  });
  $("body").on("click", ".investment_cart_bottom a", function (e) {
    e.preventDefault();
    if ($(window).width() < 600) {
      $(
        ".createfolio_btn_save_3, .investment_cart, .investment_label_mobile"
      ).hide();
      $(
        ".createfolio_btn_save_2, .investment_scheme_details ul.nav.nav-tabs, .investment_mobile_part2, .investment_scheme_details > p, .investment_scheme_details > h4"
      ).show();
      $("span.mobile_heading_span strong").text("2.2");
      $("#mobile_heading_link").removeClass("investment_three");
      $("#mobile_heading_link").addClass("investment_two");
      $("html, body").animate({ scrollTop: 200 }, 500);
    }
  });

  $("#minorPopup a").click(function () {
    $("#minorName").show();
    $("#guardianPan label").text("PAN of the Guardian*");
    $("#guardianName label").text("Name of the Guardian*");
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

  $("#not-done-neft").click(function () {
    $("#neft-not-done-info").modal("show");
  });
  $("#done-neft").on("click", function () {
    $(".neft-hidden-payment").show();
  });
  $("#neft-info-okay").on("click", function () {
    $(".neft-hidden-payment").show();
    $("#neft-not-done-info").modal("hide");
  });
  $("input[name='perpetual-installments']").on("click", function () {
    x = $(this).val();
    if (x == "installments") {
      $(".ftp_sip_details .enter-euin-number").show();
      $(".ftp_sip_details .euin-declaration-info").hide();
      $(".ftp_sip_details .perpetual_end_date").hide();
    } else if (x == "perpetual") {
      $(".ftp_sip_details .enter-euin-number").hide();
      $(".ftp_sip_details .euin-declaration-info").show();
      $(".ftp_sip_details .perpetual_end_date").show();
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
  // DatePicker
  $(
    "#dob, #seconddob, #thirddob, #eitheronedob, #sipPeriodFrom, #sipPeriodTo, #sipdate"
  ).datepicker({
    format: "dd-mm-yyyy",
  });
});
