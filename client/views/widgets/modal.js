Template.modal.rendered = function() {
  var overlayTimeoutValue = _.uniq(Contents.find({}, {
    sort: {overlayTimeout: 1}, fields: {overlayTimeout: true}
  }).fetch().map(function(x) {
    return x.overlayTimeout;
    }), true);
    console.log(overlayTimeoutValue);

  if (overlayTimeoutValue === 0) {
    var time = 500;
    console.log('0');
  }

  else if (overlayTimeoutValue === 1) {
    var time = 2000;
    Session.set('overlayThirty', true)
    console.log('1');
  }

  else if (overlayTimeoutValue === 2) {
    var time = 5000;
    console.log('2');
    Session.set('overlaySixty', true)
  }

  setTimeout( function(){
    $('.ui.modal').modal('show');
  }, time);
};
