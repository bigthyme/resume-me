Meteor.subscribe("experts");

Template.profiles.allProfiles = function(){
  console.log(Experts.find({}));
  return Experts.find({});
}

Template.main.currentUser = function(){
  console.log(Session.get('currentUserId'));
  return Session.get('currentUserId');
};

// Template.expert.showInfo = function(){
//   var expertInfo = Session.get('currentExpert');
//   var foundInfo = Experts.findOne({firstName: expertInfo});
//   return foundExpert;
// }

// Template.profiles.events({
//   "click .IN-widget" : function(e){
//     alert(this.firstName);
//     Session.set('currentUser', this.firstName);
//   }
// })
