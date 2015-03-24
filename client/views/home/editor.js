Template.editor.rendered = function() {
	var post = $('.edit.content').val();
  Session.set('post', post);

	if (Home.find().count() === 0) {
		Session.set('noContent', true);
  } else {
		Session.set('noContent', false);
  }
};

Template['editor'].events({
	'click .create.button': function(e) {
		e.preventDefault();
		var now = Date.now();

		var newPost = {
			post: $('.create.content').val(),
			date: now,
			updated: now,
			author: Meteor.userId(),
			postCall: function() {
				return this.post;
			}
		};

		Home.insert(newPost);
		Session.set('noContent', true);
		var post = $('.create.content').val();
	  Session.set('post', post);
		FlashMessages.sendSuccess('Content created');
	},
	'click .edit.button': function(e) {
		e.preventDefault();

		var now = Date.now();

    var thisPostId = this._id,
		    postEntry = {
          post: $('.edit.content').val(),
          updated: now
        };

    Home.update(thisPostId, {$set: postEntry}, function(err) {
      if (err) {
				FlashMessages.sendError('Error, error!');
        console.log(err.reason);
      } else {
				FlashMessages.sendSuccess('Post updated');
      }
    });
	},
	'keyup .edit.content': function(e) {
		e.preventDefault();
		var post = $(e.target).val();

		Session.set('post', '');
		Session.set('post', post);
	},
	'click .logout' : function () {
    Meteor.logout();
  }
});
