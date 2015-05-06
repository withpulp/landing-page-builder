Template.settings.rendered = function () {
  tpl.$('input[name="overlay"]').on('click', function () {
     if ($(this).prop('checked')) {
         $('.overlay-settings').fadeIn();
     } else {
         $('.overlay-settings').hide();
     }
});
};
