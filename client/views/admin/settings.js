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

Template['settings'].events({
  'click .export.button': function(e) {
    console.log('exporting subscriptions to csv');

    var file = 'subscriptions.csv';
    Meteor.call('exportSubscription', function(err, fileContent) {
      if (fileContent) {
        var blob = new Blob([fileContent], {
                     type: 'text/plain;charset=utf-8'
                   }); saveAs(blob, file);
      }
    });
  }
});
