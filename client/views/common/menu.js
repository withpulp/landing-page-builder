Template.menu.rendered = function() {
	$('.ui.dropdown').dropdown();
};

Template['menu'].events({
	'click .logout' : function () {
		Meteor.logout();
	},
	'click .save.button': function(e) {
		e.preventDefault();

		var now = Date.now(),
				thisContentId = this._id,
		    contentEntry = {
					title: $('.title .edit.title').val(),
					subtitle: $('.sub.title .edit.sub.title').val(),
					heroTitle: $('.hero .hero.title').val(),
					heroContent: $('.hero .hero.content').val(),
					heroImage: $('.settings .hero.image').val(),
					newsletter: $('.settings .newsletter.toggle').is(':checked'),
					mailchimpAPI: $('.settings .newsletter.api').val(),
					mailchimpID: $('.settings .newsletter.id').val(),
          content: $('.markdown .edit.content').val(),
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
