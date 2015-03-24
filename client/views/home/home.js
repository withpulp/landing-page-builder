Template.home.rendered = function () {
  var content = $('.edit.content').val();
  Session.set('md', content);
};

Template['home'].events({
	'keyup .edit.content': function(e) {
		e.preventDefault();
		var content = $(e.target).val();

		Session.set('md', '');
		Session.set('md', content);
	},
	'click .submit.button': function(e) {
		e.preventDefault();

		var now = Date.now();

    var contentId = this._id,
		    contentEntry = {
          content: $('.edit.content').val(),
          updated: now
        };

    Home.update(contentId, {$set: contentEntry}, function(err) {
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
