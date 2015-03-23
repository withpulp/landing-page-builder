Home = new Mongo.Collection('home');

Home.allow({
	'insert': function(userId, doc) {
		return !!userId;
	},
	'update': function(userId, doc) {
		return !!userId;
	},
	'remove': function(userId, doc) {
		return !!userId;
	}
});
