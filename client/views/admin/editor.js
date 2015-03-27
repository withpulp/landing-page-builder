Template.editor.rendered = function() {
	if (Contents.find().count() === 0) {
		Session.set('noContent', true);
  } else {
		Session.set('noContent', false);
  }

	var $editor = $('textarea.content');
	$editor.elastic();
};

Template['editor'].events({
	'click .create.button': function(e) {
		e.preventDefault();
		var now = Date.now();

		var newContent = {
			content: $('.create.content').val(),
			date: now,
			updated: now,
			author: Meteor.userId(),
			contentCall: function() {
				return this.content;
			}
		};

		Contents.insert(newContent);
		Router.go('home');
		FlashMessages.sendSuccess('Content created');
	},
	'click .edit.button': function(e) {
		e.preventDefault();

		var now = Date.now();

    var thisContentId = this._id,
		    contentEntry = {
          content: $('.edit.content').val(),
          updated: now
        };

    Contents.update(thisContentId, {$set: contentEntry}, function(err) {
      if (err) {
				FlashMessages.sendError('Error, error!');
        console.log(err.reason);
      } else {
				Router.go('home');
				FlashMessages.sendSuccess('Content updated');
      }
    });
	}
});
