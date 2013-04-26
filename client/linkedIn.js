Meteor.subscribe("experts");

Template.profiles.profile = function(){
  return Experts.find({}, {sort: {firstName: 1}});
}