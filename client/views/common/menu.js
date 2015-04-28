Template.menu.rendered = function() {
	$('.ui.dropdown').dropdown();
};

Template['menu'].events({
	'click .logout' : function () {
		Meteor.logout();
	}
});
