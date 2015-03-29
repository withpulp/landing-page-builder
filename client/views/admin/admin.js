Template.admin.rendered = function () {
	Session.set('notAdmin', false);

	$tabs = $('.ui.secondary.menu .item');

	$tabs.tab();
};
