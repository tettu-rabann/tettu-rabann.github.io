$(function(){

  //--------------------移動イベント-----------------------

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
  $('.Reference-btn').click(function() {

      var h1 = $('#reference').offset().top;

      $('html, body').animate({scrollTop:h1});

  });

  //---------------------文章イベント------------------------

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

  //---------------------メニューイベント----------------------

  $('#menu-icon').click(function(){
    for (var i = 0; i < 5; i++) {
      console.log(i);
    }
    $('#menu-icon').parent().find("#menu-contents").animate({'marginRight':'400px','opacity':0.7},{'duration':400});
    $(".menu-sentence").delay(400).fadeIn(150);

  });

  $('#cross-icon').click(function(){
    $('#menu-icon').parent().find("#menu-contents").animate({'marginRight':'0px'},300);
    $('.menu-sentence').fadeOut(1000);
  });

//--------------------------趣味紹介------------------------------

$('.chukyo').click(function(){
  window.location.href = "https://twitter.com/soundnote8510";
});
$('.meijyo').click(function(){
  window.location.href = "https://twitter.com/meijo_keion";
});


})
