'use strict';

$(document).ready(function() {
  let $block = null;
  
  $('[data-row]').click(function() {
    if ($block) {
      $(this).append($block);
      $block = null;
    } else {
      $block = $(this).children().last().detach();
    }
  })
})