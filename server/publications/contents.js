Meteor.publish('contents', function() {
  return Contents.find();
});

Meteor.publish('newsletter', function() {
  return Contents.find({}, {newsletter: 1});
});
