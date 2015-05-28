Contents = new Mongo.Collection('contents');

Contents.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	},
	remove: function(userId, doc) {
		return !!userId;
	}
});

Contents.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: 'Title',
		max: 50,
		autoform: {
      afFieldInput: {
        class: 'edit title',
				placeholder: 'Title',
				autofocus: true
      }
    }
	},
	subtitle: {
		type: String,
		label: 'Subtitle',
		max: 100,
		autoform: {
      afFieldInput: {
        class: 'edit sub title',
				placeholder: 'Subtitle'
      }
    }
	},
	heroTitle: {
		type: String,
		label: 'Hero Title',
		max: 100,
		autoform: {
      afFieldInput: {
        class: 'edit hero title',
				placeholder: 'Hero Title'
      }
    }
	},
	heroContent: {
		type: String,
		label: 'Hero Content',
		max: 200,
		autoform: {
      afFieldInput: {
        type: 'textarea',
        class: 'edit hero content',
				placeholder: 'Hero Content'
      }
    }
	},
	heroImage: {
		type: String,
		label: 'Hero Image',
		optional: true,
		autoform: {
      afFieldInput: {
        class: 'hero image',
				placeholder: 'Enter full image url...'
      }
    }
	},
	content: {
		type: String,
		label: 'Landing Page Content',
		optional: true,
		autoform: {
      afFieldInput: {
        type: 'textarea',
        class: 'edit content',
				placeholder: 'Write some markdown'
      }
    }
	},
	newsletter: {
		type: Boolean,
		label: 'Enable Newsletter',
		optional: true,
		autoform: {
      afFieldInput: {
        class: 'newsletter toggle'
      }
    }
	},
	newsletterHeader: {
		type: String,
		label: 'Subscription Form Header',
		optional: true,
		autoform: {
			afFieldInput: {
				class: 'newsletter header',
				placeholder: 'Enter Newsletter Header...'
			}
		}
	},
	mailchimpUsername: {
		type: String,
		label: 'Mailchimp Username',
		optional: true,
		autoform: {
      afFieldInput: {
        class: 'newsletter username',
				placeholder: 'Enter Mailchimp Username...'
      }
    }
	},
	mailchimpDC: {
		type: String,
		label: 'Mailchimp DC',
		optional: true,
		autoform: {
      afFieldInput: {
        class: 'newsletter dc',
				placeholder: 'Enter Mailchimp DC...'
      }
    }
	},
	mailchimpAPI: {
		type: String,
		label: 'Mailchimp API Key',
		optional: true,
		autoform: {
      afFieldInput: {
        class: 'newsletter api',
				placeholder: 'Enter Mailchimp API Key...'
      }
    }
	},
	mailchimpID: {
		type: String,
		label: 'Mailchimp ID',
		optional: true,
		autoform: {
      afFieldInput: {
        class: 'newsletter id',
				placeholder: 'Enter Mailchimp List ID...'
      }
    }
	},
	overlay: {
		type: Boolean,
		label: 'Enable Overlay',
		optional: true,
		autoform: {
      afFieldInput: {
        class: 'overlay toggle',
				id: 'overlay'
      }
    }
	},
	overlayTimeout: {
		type: String,
		label: 'When would you like the overlay to trigger?',
		optional: true,
		autoform: {
			afFieldInput: {
				class: 'overlay timeout',
				placeholder: 'Enter time in seconds...'
			}
		}
	},
	overlayTitle: {
		type: String,
		label: 'Overlay Title',
		optional: true,
		autoform: {
			afFieldInput: {
				class: 'overlay title',
				placeholder: 'Overlay Title..'
			}
		}
	},
	overlayContent: {
		type: String,
		label: 'Overlay Content',
		optional: true,
		autoform: {
			afFieldInput: {
				class: 'overlay content',
				placeholder: 'Overlay Content..'
			}
		}
	}
}));
