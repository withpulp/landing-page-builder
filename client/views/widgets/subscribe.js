Template['subscribe'].events({
  'submit .subscribe.form': function(e, tpl) {
		e.preventDefault();

		console.log('mailchimp form submitted');
	}
});
