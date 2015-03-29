Template.menu.rendered = function() {
	if (Contents.find().count() === 0) {
		Session.set('noContent', true);
  } else {
		Session.set('noContent', false);
  }
};

Template['menu'].events({
	'click .logout' : function () {
		Meteor.logout();
	}
});
