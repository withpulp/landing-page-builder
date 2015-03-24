Router.route('/', {
  name: 'home',
  data: function() {
    return Home.find();
  },
  waitOn: function () {
    return [
      Meteor.subscribe('home')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('home');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
/*
Router.route('/posts/:_id', {
  name: 'post',
  waitOn: function () {
    Meteor.subscribe('post', this.params._id)
  },
  data: function() {
    return Posts.findOne(this.params._id);
  },
  action: function () {
    if (this.ready())
      this.render('post')
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/posts/:postsLimit?', {
  name: 'posts'
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
*/
