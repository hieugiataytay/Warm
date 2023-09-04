$(document).ready(function() {
  // hiệu ứng keydate
    var windowHeight = $(window).height();
    var animationsTriggered = false; // Biến để kiểm tra hiệu ứng đã được kích hoạt
  
    $(window).on('scroll', function() {
      if (!animationsTriggered) {
        var scrollPosition = $(window).scrollTop();
  
        $('#section-keydate').each(function() {
          var offset = $(this).offset().top;
  
          if (scrollPosition + windowHeight >= offset) {
            animationsTriggered = true; // Đánh dấu hiệu ứng đã được kích hoạt
            animateCounter($(this).find('.keydate-grant .keydate-number'));
            animateCounter2($(this).find('.keydate-loan .keydate-number'));
            animateCounter3($(this).find('.keydate-years span'));
            animateCounter4($(this).find('.number-project'));
          }
        });
      }
    });
  
    function animateCounter($counterElement) {
      var targetValue = 20;
      var duration = 2000;
      var currentValue = 0;
        
      function updateCounter() {
        $counterElement.text(currentValue);
      }
  
      $({ value: currentValue }).animate({ value: targetValue }, {
        duration: duration,
        easing: 'swing',
        step: function() {
          currentValue = Math.ceil(this.value);
          updateCounter();
        },
        complete: function() {
          currentValue = targetValue;
          updateCounter();
        }
      });
    }

    function animateCounter2($counterElement) {
      var targetValue = 200;
      var duration = 2000;
      var currentValue = 0;
        
      function updateCounter() {
        $counterElement.text(currentValue);
      }
  
      $({ value: currentValue }).animate({ value: targetValue }, {
        duration: duration,
        easing: 'swing',
        step: function() {
          currentValue = Math.ceil(this.value);
          updateCounter();
        },
        complete: function() {
          currentValue = targetValue;
          updateCounter();
        }
      });
    }

    function animateCounter3($counterElement) {
      var targetValue = 9;
      var duration = 2000;
      var currentValue = 0;
        
      function updateCounter() {
        $counterElement.text(currentValue);
      }
  
      $({ value: currentValue }).animate({ value: targetValue }, {
        duration: duration,
        easing: 'swing',
        step: function() {
          currentValue = Math.ceil(this.value);
          updateCounter();
        },
        complete: function() {
          currentValue = targetValue;
          updateCounter();
        }
      });
    }

    function animateCounter4($counterElement) {
      var targetValue = 8;
      var duration = 2000;
      var currentValue = 0;
        
      function updateCounter() {
        $counterElement.text(currentValue);
      }
  
      $({ value: currentValue }).animate({ value: targetValue }, {
        duration: duration,
        easing: 'swing',
        step: function() {
          currentValue = Math.ceil(this.value);
          updateCounter();
        },
        complete: function() {
          currentValue = targetValue;
          updateCounter();
        }
      });
    }



    // topbar
    $(".language-box").hide();
    $(".change-language span").click(function(){
      $(".language-box").toggle();
    });



});


$(document).ready(function() {
  const divs = $(".opportunity-box"); // Chọn tất cả các thẻ div
  const loadMoreBtn = $("#loadMoreBtn");
  const itemsPerPage = 3; // Số thẻ div hiển thị trên mỗi lần nhấn "Load More"
  let currentIndex = 3; // Vị trí bắt đầu

  // Ẩn các thẻ div ban đầu nếu có nhiều hơn số lượng hiển thị trên mỗi lần
  divs.slice(itemsPerPage).hide();

  loadMoreBtn.click(function() {
      // Hiển thị thêm số thẻ div tương ứng với itemsPerPage với hiệu ứng fadeIn
      divs.slice(currentIndex, currentIndex + itemsPerPage).fadeIn();
      currentIndex += itemsPerPage;

      // Ẩn nút "Load More" nếu đã hiển thị hết tất cả các thẻ div
      if (currentIndex >= divs.length) {
          loadMoreBtn.hide();
      }
  });
});