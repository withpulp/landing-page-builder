AutoForm.hooks({
	editSettings: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
			console.log(currentDoc);
    }
  }
});
