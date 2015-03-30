Template['menu'].events({
	'click .logout' : function () {
		Meteor.logout();
	}
});
