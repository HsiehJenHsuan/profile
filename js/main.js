//scroll smooth : https://css-tricks.com/snippets/jquery/smooth-scrolling
$(function() {
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
});

setTimeout(function() {
  $('#title').fitText(1, { minFontSize: '20px', maxFontSize: '90px' });
}, 100);

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
  focusOffset:10
});


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

$(document).ready(function() {
  $('.portfolio-link').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });
});