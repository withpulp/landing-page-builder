Subscriptions = new Mongo.Collection('subscriptions');

Subscriptions.allow({
	insert: function() {
		return true;
	},
	update: function(userId, doc) {
		return !!userId;
	},
	remove: function(userId, doc) {
		return !!userId;
	}
});
