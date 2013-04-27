Meteor.subscribe("experts");

Template.profiles.allProfiles = function(){
  return Experts.find({});
}

Template.main.currentProfile = function(){
  var clickedExpert = Session.get('currentExpert');
  console.log('clicked: ' + clickedExpert);
  var foundExpert = Experts.findOne({firstName: clickedExpert});
  return foundExpert;
};

// Template.expert.showInfo = function(){
//   var expertInfo = Session.get('currentExpert');
//   var foundInfo = Experts.findOne({firstName: expertInfo});
//   return foundExpert;
// }

Template.profiles.events({
  "click .login" : function(e){
    console.log('test');
    Session.set('currentUser', this.firstName);
  }
})
