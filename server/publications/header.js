Meteor.publish('header', function() {
  return Header.find();
});
