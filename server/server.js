//Anthony Singhavong: Server code is located here (mainly publishing collections & latex templates)

Meteor.startup(function () {
  Meteor.publish("resume-data", function() {
    return resumeData.find({});
  });

  Meteor.publish("resume-html", function() {
    return resumeHtml.find({});
  })

  Meteor.methods({
    test: function(resumeId){
      console.log('finding ', resumeId);
      if(resumeId === undefined || resumeId <= 0){
        throw new Meteor.Error(404, 'No resume found!');
      }
      return 'found ' + resumeId;
    }
  });
});