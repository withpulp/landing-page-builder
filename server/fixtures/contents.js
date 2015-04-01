Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

var now = Date.now(),
    admin = 'admin';

Fixtures.contents = [
  {
    title: 'Cool Cat',
    subtitle: 'A short story about my cat.',
    heroTitle: 'This is my favorite cat.',
    heroContent: 'His name is Mittens. This cat does a lot of dumb shit but I still love him.',
    heroImage: 'http://placekitten.com/220/300',
    newsletter: 'on',
    mailchimpAPI: 'xxxxxxxxxxxxxxxxxxxxxxx-xxx',
    mailchimpID: 'xxxxxxxxxx',
    content: '##The story begins!\n\nHe lived, he scratched up my furniture. He ate for free and always hated when I tried to pet him. Scratched me a bunch of times. Then he grew old and died. He was the best cat ever. The end.',
    created: now,
    updated: now,
    author: admin,
    contentCall: function() {
      return this.content;
    }
  }
];
