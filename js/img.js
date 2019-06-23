$(".img").wrap('<div class="alt-wrap"/>');
$(".img").each(function() {
  $(this).after('<p class="alt">' + $(this).attr('alt') + '</p>');
})


