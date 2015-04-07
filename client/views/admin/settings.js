Template.settings.rendered = function () {
  $('.ui.checkbox').checkbox();
};

// Template.settings.helpers({
  // if($('.ui.checkbox').hasClass('checked')) {
    // console.log("die");
    //PlayersList.update(selectedPlayer, {$inc: {score: 5} });
  // }
// });

// Template.settings.viewmodel({
  // on: 'false'
// });

Template.settings.events({
'click .checkbox': function(event, template) {
  console.log("clicking works");
  // var x = template.$('input').is(":checked").val();
  // Session.set("statevalue", x);
  // console.log(Session.get("statevalue"));
 }
});
