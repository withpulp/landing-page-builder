Template['subscribe'].events({
  'submit .subscribe.form': function(e, tpl) {
		e.preventDefault();

    // @TODO: move all this into server method for security
    // remove hidden fields from form - pull from db

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

    $.ajax({
      type: 'POST',
      url: url,
      data: params,
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
	}
});
