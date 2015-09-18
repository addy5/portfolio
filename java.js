$(document).ready(function(){

    var bannerGreeting = $('.bannerGreeting');
    // TYPE GREETING:
    var typeingSpeed = 150;
    var initialDelay = 650;

    setTimeout(function(){
      bannerGreeting.text("I");
    }, typeingSpeed*1+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT");
    }, typeingSpeed*2+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'");
    }, typeingSpeed*3+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S ");
    }, typeingSpeed*4+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S N");
    }, typeingSpeed*5+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NI");
    }, typeingSpeed*6+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NIC");
    }, typeingSpeed*7+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NICE ");
    }, typeingSpeed*8+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NICE T");
    }, typeingSpeed*9+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NICE TO");
    }, typeingSpeed*10+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NICE TO ");
    }, typeingSpeed*11+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NICE TO M");
    }, typeingSpeed*12+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NICE TO ME");
    }, typeingSpeed*13+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NICE TO MEE");
    }, typeingSpeed*14+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NICE TO MEET ");
    }, typeingSpeed*15+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NICE TO MEET Y");
    }, typeingSpeed*16+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NICE TO MEET YO");
    }, typeingSpeed*17+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NICE TO MEET YOU");
    }, typeingSpeed*18+initialDelay);
    setTimeout(function(){
      bannerGreeting.text("IT'S NICE TO MEET YOU!");
    }, typeingSpeed*19+initialDelay);

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

        $('.target').each(function() {
            if(scroll_pos + 60 >= $(this).position().top) {
                var id = $(this).attr('id');
                $('.navigationBar a').removeClass('active');
                $('.navigationBar a[href=#'+ id +']').addClass('active');
            } else if (scroll_pos <= 500){
                $('.navigationBar a').removeClass('active');
            }
        });
    }); //END WINDOW SCROLL LISTENER

    $('.navigationBar a').on('click', function(event) {
      $(this).parent().find('a').removeClass('active');
      $(this).addClass('active');
    });


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


    var submitMessage = $('.submitMessage');
    var guestName = $('.guestName');
    var guestEmail = $('.guestEmail');
    var guestMessage = $('.guestMessage');
    var messageConfirm = $('.messageConfirm');
    var backgroundModal = $('.backgroundModal');

    function hideConfirmation(){
      backgroundModal.fadeOut('slow');
      messageConfirm.fadeOut('slow');
      messageConfirm.val('');
      guestName.val('');
      guestEmail.val('');
      guestMessage.val('');
    }

    submitMessage.on('click', function(){
      var sendMssage = {
        name: guestName.val(),
        email: guestEmail.val(),
        message: guestMessage.val()
      };

      backgroundModal.fadeIn();
      messageConfirm.text("sending...");
      messageConfirm.fadeIn();

      $.ajax({
        method: 'post',
        url: 'https://messageaddy.herokuapp.com/messages/',
        data: JSON.stringify(sendMssage),
        contentType: 'application/json; charset=UTF-8',
        dataType : 'json',
        success: function(data){
            console.log(data);
            messageConfirm.text('Message Sent!');
            setTimeout(hideConfirmation,2500);

        }
      }); // END AJAX FUNCTION

    }); //END SEND GUEST MESSAGE LISTENER AND FUNCTION

});
