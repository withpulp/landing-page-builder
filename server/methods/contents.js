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

    var formData = _.extend(_.pick(attributes, 'name', 'email'), {
      c: 'JSON_CALLBACK',
      u: '800bfb6e2a03c12de30b3eff1',
      id: '9a5ebe0d08'
    });

    var submit = $.ajax({
      type: 'POST',
      url: '//damir.us11.list-manage.com/subscribe/post-json',
      data: formData,
      cache: false,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      error: function(err) {
        console.log('Could not connect to the registration server. Please try again later.');
      },
      success: function(data) {
        if (data.result != 'success') {
          console.log(data.msg);
        } else {
          console.log(data.msg);
        }
      }
    });

    return submit;
  }
});
