$(document).ready(function(){
  console.log('jquery');
    var navigationBar = $('.navigationBar');
    var scroll_pos = 0;
    var triangle = $('.triangle');

    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 500) {
          navigationBar.css('background-color','rgba(42,42,42,1)');
          triangle.css('display','inline-block');
        } else {
          navigationBar.css('background-color','rgba(0,0,0,0)');
          triangle.css('display','none');
        }
    });

    // $('#nav nav a').on('click', function(event) {
    //   $(this).parent().find('a').removeClass('active');
    //   $(this).addClass('active');
    // });

    // $(window).on('scroll', function() {
    //     $('.target').each(function() {
    //         if($(window).scrollTop() >= $(this).position().top) {
    //             var id = $(this).attr('id');
    //             $('#nav nav a').removeClass('active');
    //             $('#nav nav a[href=#'+ id +']').addClass('active');
    //         }
    //     });
    // });

  var projectSDF = $('.projectSDF');
  var imageSDF = $('.imageSDF');
  //SDF PROJECT MODAL:
  imageSDF.mouseenter(function(){
    projectSDF.fadeIn('fast');
  });
  projectSDF.mouseleave(function(){
    projectSDF.fadeOut('fast');
  });

  var projectHoldem = $('.projectHoldem');
  var imageHoldem = $('.imageHoldem');
  //SDF PROJECT MODAL:
  imageHoldem.mouseenter(function(){
    projectHoldem.fadeIn('fast');
  });
  projectHoldem.mouseleave(function(){
    projectHoldem.fadeOut('fast');
  });

  var projectSygns = $('.projectSygns');
  var imageSygns = $('.imageSygns');
  //SDF PROJECT MODAL:
  imageSygns.mouseenter(function(){
    projectSygns.fadeIn('fast');
  });
  projectSygns.mouseleave(function(){
    projectSygns.fadeOut('fast');
  });

  var projectTeachMe = $('.projectTeachMe');
  var imageTeachMe = $('.imageTeachMe');
  //SDF PROJECT MODAL:
  imageTeachMe.mouseenter(function(){
    projectTeachMe.fadeIn('fast');
  });
  projectTeachMe.mouseleave(function(){
    projectTeachMe.fadeOut('fast');
  });


});
