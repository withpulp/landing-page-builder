Template.settings.rendered = function() {
  $('#overlay').change(function(){
      if(this.checked) {
        $('.overlay-settings').fadeIn('fast');
      } else {
      $('.overlay-settings').fadeOut('fast');
      }
  });
}
