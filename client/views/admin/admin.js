Template.admin.rendered = function () {
	Session.set('notAdmin', false);

	var newsletterValue = _.uniq(Contents.find({}, {
    sort: {newsletter: 1}, fields: {newsletter: true}
  }).fetch().map(function(x) {
    return x.newsletter;
  }), true);

	if (newsletterValue) {
		console.log(newsletterValue);
		Session.set('newsletter', true);
	} else {
		console.log(newsletterValue);
		Session.set('newsletter', false);
	}
};
