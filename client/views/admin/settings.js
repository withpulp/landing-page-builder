Template.settings.rendered = function () {
  $('.ui.checkbox').checkbox();
};

Template.settings.events({
    // var checkBox = $('.overlay').prop("checked");
    // console.log(checkBox);
})

// Template.settings.helpers({
  // if($('.ui.checkbox').hasClass('checked')) {
    // console.log("die");
    //PlayersList.update(selectedPlayer, {$inc: {score: 5} });
  // }
// });

// Template.settings.viewmodel({
  // on: 'false'
// });



// Template.settings.events({

// 'click .ui.toggle.checkbox': function(event, template) {
  // console.log("clicking works");
  // var x = $('input').is(":checked").val();
  // Session.set("statevalue", x);
  // console.log(Session.get("statevalue"));
 // }
// });
