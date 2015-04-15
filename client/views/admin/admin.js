Template.admin.rendered = function () {
	Session.set('notAdmin', false);
};

Template['admin'].events({
	'click .settings.button' : function (e) {
		e.preventDefault();
		Session.set('toggleSettings', !Session.get('toggleSettings'));
	}
});
