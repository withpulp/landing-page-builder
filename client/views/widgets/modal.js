Template.modal.rendered = function() {
  var time = 10000;
  setTimeout( function(){
    $('.ui.modal').modal('show');
  }, time);
};
