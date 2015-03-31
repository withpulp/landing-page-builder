Template.editor.rendered = function() {
	if (Contents.find().count() === 0) {
		Session.set('noContent', true);
  } else {
		Session.set('noContent', false);
  }

	var $editor = $('textarea.content');

	$editor.elastic();
};
