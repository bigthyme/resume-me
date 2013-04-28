Meteor.subscribe("resume-data");
Meteor.subscribe("resume-html");

Template.profiles.allProfiles = function(){
  console.log(resumeData.find({}));
  return resumeData.find({});
}

Template.main.currentUser = function(){
  console.log(Session.get('currentUserId'));
  return Session.get('currentUserId');
};
