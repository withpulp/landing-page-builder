AutoForm.hooks({
	editContent: {
		onSuccess: function(updateDoc, result) {
			console.log(result);
			// if newsletter === true
			// set newsletter session to true
			// else
			// set newsletter session to false
		}
  }
});
