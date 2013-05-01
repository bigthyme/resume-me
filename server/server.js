//Anthony Singhavong: Server code is located here (mainly publishing collections & latex templates)

Meteor.startup(function () {
  console.log('server is starting...');

  Meteor.publish("resume-data", function() {
    return resumeData.find({});
  });

  Meteor.publish("resume-html", function() {
    return resumeHtml.find({});
  })

  Meteor.methods({
    getResume: function(resumeId){
      console.log(resumeHtml.findOne({_id: resumeId}));
      return resumeHtml.findOne({_id: resumeId});
    },

    test: function(resumeId){
      console.log('finding ', getResume(resumeId));
      if(resumeId === undefined || resumeId <= 0){
        throw new Meteor.Error(404, 'No resume found!');
      }
      return 'found ' + resumeId;
    }
  });
});