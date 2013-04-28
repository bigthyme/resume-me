Meteor.startup(function () {
  Meteor.publish("resume-data", function() {
    return resumeData.find({});
  });
});