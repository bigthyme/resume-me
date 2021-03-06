//Anthony Singhavong: Server code is located here (mainly publishing collections & latex templates)

Meteor.startup(function () {
  Meteor.publish("resume-data", function() {
    return resumeData.find({});
  });

  Meteor.publish("resume-html", function() {
    return resumeHtml.find({});
  })

  Meteor.methods({
    getResume: function(resumeId){
      var resume = resumeHtml.findOne({_id: resumeId});
      var resumeName = resume.name;
      // return resumeHtml.findOne({_id: resumeId});
    },

    test: function(resumeId){
      if(resumeId === undefined || resumeId <= 0){
        throw new Meteor.Error(404, 'No resume found!');
      }
      return 'found ' + resumeId;
    }
  });
});