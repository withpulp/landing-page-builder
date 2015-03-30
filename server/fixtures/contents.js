Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

var now = Date.now(),
    admin = 'admin';

Fixtures.contents = [
  {
    title: 'Title',
    subtitle: 'Subtitle',
    heroTitle: 'Hero Title',
    heroContent: 'This is the hero content',
    heroImage: 'http://vignette1.wikia.nocookie.net/berserk/images/8/8c/Berserker_Armour_Version_2.png/revision/latest?cb=20120517182924',
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
