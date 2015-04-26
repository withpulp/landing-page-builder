Template.modal.rendered = function() {
  var time = _.uniq(Contents.find({}, {
    sort: {overlayTimeout: 1}, fields: {overlayTimeout: true}
  }).fetch().map(function(x) {
    return x.overlayTimeout;
    }), true);
    console.log(time);

  setTimeout( function(){
    $('.ui.modal').modal('show');
  }, time);
};
