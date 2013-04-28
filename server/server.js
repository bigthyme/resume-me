Meteor.startup(function () {
  Meteor.publish("resume-data", function() {
    return resumeData.find({});
  });

  Meteor.publish("resume-html", function() {
    return resumeHtml.find({});
  })
});