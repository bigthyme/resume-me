Meteor.subscribe("resume-data");

Template.profiles.allProfiles = function(){
  console.log(resumeData.find({}));
  return resumeData.find({});
}

Template.main.currentUser = function(){
  console.log(Session.get('currentUserId'));
  return Session.get('currentUserId');
};

Template.listNumbers = function(){

}

// Template.expert.showInfo = function(){
//   var expertInfo = Session.get('currentExpert');
//   var foundInfo = Resumes.findOne({firstName: expertInfo});
//   return foundExpert;
// }

// Template.profiles.events({
//   "click .IN-widget" : function(e){
//     alert(this.firstName);
//     Session.set('currentUser', this.firstName);
//   }
// })
