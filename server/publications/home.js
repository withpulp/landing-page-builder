Meteor.publish('home', function() {
  return Home.find();
});
