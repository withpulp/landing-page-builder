Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

var now = Date.now(),
    admin = 'admin';

Fixtures.contents = [
  {
    title: 'Title',
    subtitle: 'Subtitle',
    heroTitle: 'Hero Title',
    heroContent: 'This is the hero content',
    heroImage: 'http://placekitten.com/200/350',
    newsletter: true,
    mailchimpAPI: 'xxxxxxxxxxxxxxxxxxxxxxx-xxx',
    mailchimpID: 'xxxxxxxxxx',
    content: '##Hello!\n\nWrite your content with markdown.',
    date: now,
    updated: now,
    author: admin,
    contentCall: function() {
      return this.content;
    }
  }
];
