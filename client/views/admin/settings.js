Template.settings.rendered = function () {
  $('.ui.checkbox').checkbox();
};

// Template.settings.helpers({
  // if($('.ui.checkbox').hasClass('checked')) {
    // console.log("die");
    //PlayersList.update(selectedPlayer, {$inc: {score: 5} });
  // }
// });

Template.settings.viewmodel({
  on: 'false'
});
