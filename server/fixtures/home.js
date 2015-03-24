// The "||" notation doesn't work yet
Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

var now = Date.now();

Fixtures.home = [
	{
		content: 'markdown goes here',
		date: now,
		updated: now,
		author: 'admin',
    contentCall: function() {
			return this.content;
		}
	}
];
