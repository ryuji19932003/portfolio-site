//ハンバーガーメニュー
jQuery("#js-drawer-icon").on("click", function () {
  $(this).toggleClass("is-open");
  $("#js-drawer").toggleClass("is-open");
});

//ドロワーメニューを押したときにドロワーメニューを非表示
jQuery("#js-drawer a[href^='#']").on("click", function () {
  jQuery("#js-drawer").removeClass("is-open");
  jQuery("#js-drawer-icon").removeClass("is-open");
});

//about-swiper
const aboutSwiper = new Swiper(".about-swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3.6, // 一度に表示する枚数
  speed: 6000, // ループの時間
  allowTouchMove: false,
  autoplay: {
    delay: 0, // 途切れなくループ
  },
  breakpoints: {
    // スライドの表示枚数：768px以上の場合
    400: {
      slidesPerView: 3.8,
    },
    600: {
      slidesPerView: 4.5,
    },
    700: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 5,
    },
    // スライドの表示枚数：1025px以上の場合
    1025: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
  },
});

//モーダル
jQuery("[id^='prize-item']").on("click", function () {
  const id = jQuery(this).attr("id");
  const num = id.replace("prize-item", "");
  const modalId = "prize-modal" + num;
  jQuery("#" + modalId)[0].showModal();

  jQuery(".prize-modal-close").on("click", function () {
    jQuery("#" + modalId)[0].close();
  });
});

//spot-swiper
const spotSwiper = new Swiper("#js-spot-swiper", {
  loop: true,
  loopedSlides: 7,
  loopAdditionalSlides: 3,

  navigation: {
    nextEl: "#js-spot-btn-next",
    prevEl: "#js-spot-btn-prev",
  },

  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,

  breakpoints: {
    768: {
      centeredSlides: false,
      spaceBetween: 32,
    },
  },
  on: {
    resize(swiper) {
      swiper.update();
    },
  },
});

//faq アコーディオン
jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();
  jQuery(this).next(".faq-box__a").slideToggle();
});

//送信時　バリデーションチェック
// 入力中
$("#form input, #form select, #form textarea").on("blur", function () {
  if (!this.checkValidity()) {
    $(this).addClass("is-error");
  } else {
    $(this).removeClass("is-error");
  }
});

// 送信ボタン押した時
$("#form-submit").on("click", function () {
  $("#form")
    .find("input, select, textarea")
    .each(function () {
      if (!this.checkValidity()) {
        $(this).toggleClass("is-error", !this.checkValidity());
      }
    });
});
//送信
$("#form").on("submit", function (e) {
  if (!this.checkValidity()) {
    e.preventDefault();
  } else alert("送信完了");
});

//スムーススクロール
jQuery("a[href^='#']").on("click", function (e) {
  e.preventDefault();
  const id = jQuery(this).attr("href");
  const target = jQuery("#" === id ? "html" : id);
  if (!target.length) return;
  const position = target.offset().top;
  const header = jQuery(".header").outerHeight();
  jQuery("html,body").animate(
    {
      scrollTop: position - header,
    },
    500,
  );
});

//ページトップボタン　表示・非表示
$(function () {
  const $pageTop = $("#js-page-top");
  $pageTop.hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else $pageTop.fadeOut();
  });
});
