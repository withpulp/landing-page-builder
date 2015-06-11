Meteor.publish('subscriptions', function() {
  return Subscriptions.find();
});
