Template.registerHelper('debug', function (optionalValue) {
  if (typeof console !== 'undefined' || typeof console.log !== 'undefined') {
    console.log('Current Context');
    console.log('====================');
    console.log(this);
    if (optionalValue) {
      console.log('Value');
      console.log('====================');
      console.log(optionalValue);
    }

    return '';
  }

  // For IE8
  alert(this);

  if (optionalValue) {
    alert(optionalValue);
  }

  return '';
});

Template.registerHelper('notAdmin', function() {
  return Session.get('notAdmin');
});

Template.registerHelper('toggleSettings', function() {
  return Session.get('toggleSettings') ? 'on' : 'off';
});

Template.registerHelper('newsletter', function() {
  return Session.get('newsletter');
});

Template.registerHelper('overlay', function() {
  return Session.get('overlay');
});

Template.registerHelper('overlayChecked', function() {
  return Session.get('overlayChecked');
});
