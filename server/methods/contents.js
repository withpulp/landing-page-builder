Meteor.methods({
  submitSubscription: function(attributes) {
    // get mailchimp fields from db
		// get input values from subscribe form
		// send data to mailchimp

    // check if name was entered
    if (!attributes.name) {
      throw new Meteor.Error('no-name-input', 'Please enter your full name');
    }
    // check if email was entered
    if (!attributes.email) {
      throw new Meteor.Error('no-email-input', 'Please enter your email');
    }

    var test = console.log('test');

    return test;
  }
});
