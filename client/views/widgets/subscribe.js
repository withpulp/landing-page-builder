Template['subscribe'].events({
  'submit .subscribe.form': function(e, tpl) {
		e.preventDefault();

    var $form = tpl.$('.subscribe.form'),
        params = {
          name: tpl.$('input[name=name]').val(),
          email: tpl.$('input[name=email]').val()
        };

    /* @TODO: tie in mailchimp http post into method
    Meteor.call('submitSubscription', params, function(error) {
			if (error) {
				return console.log(error.reason);
			} else {
				console.log('method called ' + params);
			}
		});
    */

    Meteor.call('saveSubscription', params, function(error) {
      if (error) {
        FlashMessages.sendError(error.reason);
        return console.log(error.reason);
			} else {
        $form[0].reset();
        FlashMessages.sendSuccess('Subscription saved!');
			}
    });
	}
});
