Meteor.subscribe("experts");

Template.profiles.allProfiles = function(){
  return Experts.find({}, {sort: {firstName: 1}});
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
  "click .expert" : function(e){
    console.log(this.firstName);
    Session.set('currentExpert', this.firstName);
  }
})
