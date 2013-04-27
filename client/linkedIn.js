Meteor.subscribe("experts");

Template.profiles.allProfiles = function(){
  return Experts.find({}, {sort: {firstName: 1}});
  console.log(Experts.find({}, {sort: {firstName: 1}}));
}