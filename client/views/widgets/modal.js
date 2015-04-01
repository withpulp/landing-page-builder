Template.modal.rendered = function() {
  var time = 30000;
  setTimeout( function(){
    $('.ui.modal').modal('show');
  }, time);
};
