if (Meteor.isClient) {
	Template.test.helpers ({
		testHelper: function () {
			return Template.subtest();
		}
	
	});
}