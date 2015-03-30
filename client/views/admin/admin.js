Template.admin.rendered = function () {
	Session.set('notAdmin', false);
	if (Contents.find().count() === 0) {
		Session.set('noContent', true);
  } else {
		Session.set('noContent', false);
  }
};
