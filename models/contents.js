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
		max: 50
	},
	subtitle: {
		type: String,
		label: 'Subtitle',
		max: 100
	},
	heroTitle: {
		type: String,
		label: 'Hero Title',
		max: 100
	},
	heroContent: {
		type: String,
		label: 'Hero Content',
		max: 200
	},
	heroImage: {
		type: String,
		label: 'Hero Image',
		optional: true
	},
	content: {
		type: String,
		label: 'Landing Page Content',
		optional: true
	},
	newsletter: {
		type: Boolean,
		label: 'Enable Newsletter'
	},
	mailchimpAPI: {
		type: String,
		label: 'Mailchimp API Key'
	},
	mailchimpID: {
		type: String,
		label: 'Mailchimp ID'
	}
}));
