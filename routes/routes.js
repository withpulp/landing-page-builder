Router.route('/', {
  name: 'home',
  waitOn: function () {
    return [
      Meteor.subscribe('contents')
    ]
  },
  data: function() {
    return Contents.find();
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

Router.route('/admin/new', {
  name: 'new'
}, function () {
  this.render('new');
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/admin/edit', {
  name: 'edit'
}, function () {
  this.render('edit');
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
