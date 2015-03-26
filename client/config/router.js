Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
});

Router.plugin('ensureSignedIn', {
  only: ['admin']
});
