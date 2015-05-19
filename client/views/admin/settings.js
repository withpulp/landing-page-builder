Template.settings.rendered = function () {
  if ($('.overlay.toggle').is(':checked')) {
    Session.set('overlayChecked', true);
  } else {
    Session.set('overlayChecked', false);
  }
};

Template.settings.events({
  'change .overlay.toggle': function() {
    if ($('.overlay.toggle').is(':checked')) {
      Session.set('overlayChecked', true);
    } else {
      Session.set('overlayChecked', false);
    }
  }
});
