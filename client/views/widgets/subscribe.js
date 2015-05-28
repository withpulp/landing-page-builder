Template['subscribe'].events({
  'submit .subscribe.form': function(e, tpl) {
		e.preventDefault();

		console.log('mailchimp form submitted');

    var params = {
      name: tpl.$('input[name=name]').val(),
      email: tpl.$('input[name=email]').val(),
      c: 'JSON_CALLBACK',
      u: tpl.$('input[name=mailchimpAPI]').val(),
      id: tpl.$('input[name=mailchimpID]').val()
    };

    console.log(params);
	}
});
