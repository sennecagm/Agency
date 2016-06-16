// calling the plugins and having it to fad in and out on
// right and left for all links in the header

$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-left-lg',
  linkElement: 'header a',
  inDuration:1000,
  outDuration: 500
});


// nav bar will stick to the top of the page when scrolliing.
$(".header").sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
});


$(".header").on("sticky-start", function () {
  $(".description").html("We build <stong>great</stong> app's");
});
$(".header").on("sticky-end", function () {
  $(".description").html("We build app's");
});



$(".work ").sticky({
  topSpacing:64,
  getWidthFrom: '.container',
  responsiveWidth: true
});
$(".work").on("sticky-start", function () {
  $(this).append("<a href='mailto:email@website.com' class='email-text'>Email&nbsp;us</a>");
});
$(".work").on('sticky-end', function () {
  $('.email-text').remove();
})
