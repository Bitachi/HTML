$(function(){
  $(".hobby").hover(
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
      $(this).find(".hobby-text").addClass("active");

    },
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
      $(this).find(".hobby-text").removeClass("active");
    }
  );
  $(".skill").hover(
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
      $(this).find(".skill-text").slideDown(300);

    },
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
      $(this).find(".skill-text").slideUp(300);
    }
  );
  $(".work").hover(
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
      $(this).find(".work-text").slideDown(300);

    },
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
      $(this).find(".work-text").slideUp(300);
    }
  );
  $(".header-btn").click(function(){
    var id = $(this).attr("href");
    var position = $(id).offset().top;
    if(id !== "#top"){
      position -= 65;
      $("html, body").animate({
        "scrollTop" : position
      }, 300);
    }else{
      $("html, body").animate({
        "scrollTop" : position
      }, 300);
    }

  });



});
