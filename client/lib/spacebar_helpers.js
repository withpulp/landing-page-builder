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

Template.registerHelper('session', function(input) {
  return Session.get(input);
});

Template.registerHelper('noContent', function() {
  return Session.get('noContent');
});
