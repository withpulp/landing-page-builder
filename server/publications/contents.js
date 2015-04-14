Meteor.publish('contents', function() {
  return Contents.find();
});
