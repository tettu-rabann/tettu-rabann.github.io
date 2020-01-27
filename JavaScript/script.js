$(function(){
  $('.first-btn').click(function() {

      var h1 = $('#first').offset().top;

      $('html, body').animate({scrollTop:h1});

  });
  $('.own-btn').click(function() {

      var h1 = $('#own').offset().top;

      $('html, body').animate({scrollTop:h1});

  });
  $('.Hobby-btn').click(function() {

      var h1 = $('#hobby').offset().top;

      $('html, body').animate({scrollTop:h1});

  });
  $('.link-btn').click(function() {

      var h1 = $('#link').offset().top;

      $('html, body').animate({scrollTop:h1});

  });
  $('.title-btn').click(function() {

      var h1 = $('#title').offset().top;

      $('html, body').animate({scrollTop:h1});

  });

  $('.fadein-sentence1').click(function(){
    $('#Nowhobby').stop().fadeIn(1000);
    $('.fadeout-sentence1').stop().fadeIn(1);
    $('.fadein-sentence1').stop().fadeOut(1);

  });
  $('.fadeout-sentence1').click(function(){
    $('#Nowhobby').stop().fadeOut(1000);
    setTimeout(function(){
      $('.fadein-sentence1').stop().fadeIn(1);
      $('.fadeout-sentence1').stop().fadeOut(1);
    },1000);
  });

  $('.fadein-sentence2').click(function(){
    $('#Background').stop().fadeIn(1000);
    $('.fadeout-sentence2').stop().fadeIn(1);
    $('.fadein-sentence2').stop().fadeOut(1);

  });
  $('.fadeout-sentence2').click(function(){
    $('#Background').stop().fadeOut(1000);
    setTimeout(function(){
      $('.fadein-sentence2').stop().fadeIn(1);
      $('.fadeout-sentence2').stop().fadeOut(1);
    },1000);
  });


})
