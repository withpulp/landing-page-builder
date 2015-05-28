Template['subscribe'].events({
  'submit .subscribe.form': function(e, tpl) {
		e.preventDefault();

    var username = tpl.$('input[name=mailchimpUsername]').val(),
        dc = tpl.$('input[name=mailchimpDC]').val(),
        url = '//' + username + '.' + dc + '.list-manage.com/subscribe/post-json',
        params = {
          name: tpl.$('input[name=name]').val(),
          email: tpl.$('input[name=email]').val(),
          c: 'JSON_CALLBACK',
          u: tpl.$('input[name=mailchimpAPI]').val(),
          id: tpl.$('input[name=mailchimpID]').val()
        };

    console.log(params);
    console.log(url);
	}
});
