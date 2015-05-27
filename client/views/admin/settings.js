Template.settings.rendered = function () {
  if ($('.newsletter.toggle').is(':checked')) {
    Session.set('newsletterChecked', true);
    Session.set('newsletter', true);
  } else {
    Session.set('newsletterChecked', false);
    Session.set('newsletter', false);
  }

  if ($('.overlay.toggle').is(':checked')) {
    Session.set('overlayChecked', true);
  } else {
    Session.set('overlayChecked', false);
  }
};

Template.settings.events({
  'change .newsletter.toggle': function() {
    if ($('.newsletter.toggle').is(':checked')) {
      Session.set('newsletterChecked', true);
      Session.set('newsletter', true);
    } else {
      Session.set('newsletterChecked', false);
      Session.set('newsletter', false);
    }
  },
  'change .overlay.toggle': function() {
    if ($('.overlay.toggle').is(':checked')) {
      Session.set('overlayChecked', true);
    } else {
      Session.set('overlayChecked', false);
    }
  }
});
