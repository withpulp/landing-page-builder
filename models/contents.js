Contents = new Mongo.Collection('contents');

Contents.allow({
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

Contents.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: 'Title',
		max: 100
	}
}));
