Template.modal.rendered = function() {
  var overlayTimeoutValue = _.uniq(Contents.find({}, {
    sort: {overlayTimeout: 1}, fields: {overlayTimeout: true}
  }).fetch().map(function(x) {
    return x.overlayTimeout;
    }), true);
    console.log(overlayTimeoutValue);

  if (overlayTimeoutValue[0] === 0) {
    var time = 500;
    console.log('0');
    setTimeout( function(){
      $('.ui.modal').modal('show');
    }, time);
  }

  else if (overlayTimeoutValue[0] === 1) {
    var time = 2000;
    console.log('1');
    setTimeout( function(){
      $('.ui.modal').modal('show');
    }, time);
  }

  else if (overlayTimeoutValue[0] === 2) {
    var time = 5000;
    console.log('2');
    setTimeout( function(){
      $('.ui.modal').modal('show');
    }, time);
  }

  setTimeout( function(){
    $('.ui.modal').modal('show');
  }, time);
};
