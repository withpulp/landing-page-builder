Template['subscribe'].events({
  'submit .subscribe.form': function(e, tpl) {
		e.preventDefault();

    var params = {
          name: tpl.$('input[name=name]').val(),
          email: tpl.$('input[name=email]').val()
        };

    /*
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
        return console.log(error.reason);
			} else {
				console.log('subscription saved ' + params);
			}
    });
	}
});
