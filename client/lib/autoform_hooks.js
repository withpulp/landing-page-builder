AutoForm.hooks({
	editContent: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
			console.log(currentDoc);
			// on form submit =>
			// if newsletter === true
			// set newsletter session to true
			// else
			// set newsletter session to false
    }
  }
});
