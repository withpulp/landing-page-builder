Template.home.rendered = function () {
  Session.set('notAdmin', true);
  if (Contents.find().count() === 0) {
		Session.set('noContent', true);
  } else {
		Session.set('noContent', false);
  }
};
