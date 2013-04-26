Meteor.startup(function () {
  Meteor.publish("experts", function() {
    return Experts.find({});
  });
});