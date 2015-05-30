Template['subscribe'].events({
  'submit .subscribe.form': function(e, tpl) {
		e.preventDefault();

    // @TODO: move all this into server method for security
    // remove hidden fields from form - pull from db

    var username = tpl.$('input[name=mailchimpUsername]').val(),
        dc = tpl.$('input[name=mailchimpDC]').val(),
        url = '//' + username + '.' + dc + '.list-manage.com/subscribe/post-json';
        /*
        params = {
          name: tpl.$('input[name=name]').val(),
          email: tpl.$('input[name=email]').val(),
          c: 'JSON_CALLBACK',
          u: tpl.$('input[name=mailchimpAPI]').val(),
          id: tpl.$('input[name=mailchimpID]').val()
        };*/

    var params = {
          FNAME: tpl.$('input[name=name]').val(),
          EMAIL: tpl.$('input[name=email]').val()
        };

    console.log(params);
    console.log(url);

    Meteor.call('submitSubscription', params, function(error) {
			if (error) {
				return console.log(error.reason);
			} else {
				console.log('method called ' + params);
			}
		});

    Meteor.call('saveSubscription', params, function(error) {
      if (error) {
        return console.log(error.reason);
			} else {
				console.log('subscription saved ' + params);
			}
    });
	}
});
