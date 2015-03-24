Template.home.rendered = function () {
  if (Home.find().count() === 0) {
		Session.set('noContent', true);
  } else {
		Session.set('noContent', false);
  }
};
