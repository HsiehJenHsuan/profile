$(function() {

  /* scrollDepth */
  $.scrollDepth();

  /* text-fit */
  setTimeout(function() {
    $('#title').fitText(1, { minFontSize: '20px', maxFontSize: '90px' });
  }, 100);

  /* smoth scrolling */
  //scroll smooth : https://css-tricks.com/snippets/jquery/smooth-scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  /* scroll-watch*/
  $('.scrollwatch').scrollWatch(function (focus) {
      //console.log(focus);
      //console.log(focus.section.id);
      $('#navbar > a').removeClass('active');
      $('#navbar > a[href=#'+focus.section.id+']').addClass('active');
      if(focus.section.id=='hide-menu'){
        $('#navbar').hide("normal");
      }
      else if(focus.section.id!='hide-menu'&&focus.section.id!='scroll-top'){
        $('#navbar').addClass('bgblack');
        $('#navbar').show("normal");
      }
      else if(focus.section.id=='scroll-top'){
        $('#navbar').show("normal");
        $('#navbar').removeClass('bgblack');
        $('#navbar > a[href=#top]').addClass('active');
      }
    },{
      resolutionMode:'focus-line',
      debugFocusLine:0,
      focusRatio:0,
      focusOffset:0
  });

  /*radar chart*/
  // Get context with jQuery - using jQuery's .get() method.
  var ctx = $("#trait-chart").get(0).getContext("2d");
  // This will get the first returned node in the jQuery collection.
  var myNewChart = new Chart(ctx);
  var data = {
      labels: ["責任心", "一不作二不休", "天然搞笑", "善良", "運氣值", "好奇心"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [9, 10, 6, 8, 2, 7]
          }
      ]
  };
  var options = {
    pointLabelFontColor: "#555",
    pointLabelFontSize : 15

  };

  myNewChart.Radar(data, options);

  /* skill bar animate */
  $(window).scroll(function () {

    //console.log($(window).width());
    //console.log($('#skill').offset().top);
    var offsetTop = 700;
    //console.log($(window).scrollTop() + offsetTop);
    if ($(window).scrollTop() + offsetTop  > $('#skill').offset().top){
      $(".toeic").addClass('ani-toeic');
      $(".skill-html").addClass('ani-html');
      $(".skill-css").addClass('ani-css');
      $(".skill-js").addClass('ani-js');
      $(".skill-php").addClass('ani-php');
      $(".skill-obj-c").addClass('ani-obj-c');
      $(".skill-java").addClass('ani-java');
    }
  });

  /*nivo slider stop*/
  $(window).load(function() {
      $('#slider-doodleit').nivoSlider();
      $('#slider-doodleit').data('nivoslider').stop();

      $('#slider-kaoture').nivoSlider();
      $('#slider-kaoture').data('nivoslider').stop();

      $('#slider-linemart').nivoSlider();
      $('#slider-linemart').data('nivoslider').stop();

      $('#slider-jq').nivoSlider();
      $('#slider-jq').data('nivoslider').stop();

      $('#slider-Hacc').nivoSlider();
      $('#slider-Hacc').data('nivoslider').stop();

    });

  /* magnific popup */
  $('.portfolio-link').magnificPopup({
      type:'inline',
      midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });
  $('#portfolio-slide-doodleit').magnificPopup({
    type:'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    callbacks: {
      open: function() {
        $('#slider-doodleit').data('nivoslider').start();
          
      },
      close: function() {
        $('#slider-doodleit').data('nivoslider').stop();
      }
    }
  });
  $('#portfolio-slide-kaoture').magnificPopup({
    type:'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    callbacks: {
      open: function() {
        $('#slider-kaoture').data('nivoslider').start();
          
      },
      close: function() {
        $('#slider-kaoture').data('nivoslider').stop();
      }
    }
  });
  $('#portfolio-slide-linemart').magnificPopup({
    type:'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    callbacks: {
      open: function() {
        $('#slider-linemart').data('nivoslider').start();
          
      },
      close: function() {
        $('#slider-linemart').data('nivoslider').stop();
      }
    }
  });
  $('#portfolio-slide-jq').magnificPopup({
    type:'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    callbacks: {
      open: function() {
        $('#slider-jq').data('nivoslider').start();
          
      },
      close: function() {
        $('#slider-jq').data('nivoslider').stop();
      }
    }
  });
  $('#portfolio-slide-Hacc').magnificPopup({
    type:'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    callbacks: {
      open: function() {
        $('#slider-Hacc').data('nivoslider').start();
          
      },
      close: function() {
        $('#slider-Hacc').data('nivoslider').stop();
      }
    }
  });

});