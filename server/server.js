//Anthony Singhavong: Server code is located here (mainly publishing collections & latex templates)

Meteor.startup(function () {
  Meteor.publish("resume-data", function() {
    return resumeData.find({});
  });

  Meteor.publish("resume-html", function() {
    return resumeHtml.find({});
  })
});