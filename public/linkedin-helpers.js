// Linkedin API Helper functions
var profileSearchAttributes = [
      "id","firstName","lastName","industry","headline",
      "location","distance", "summary","specialties","interests","positions","skills","educations","phoneNumbers","primaryTwitterAccount","date-of-birth","main-address"
];

var onLinkedInLoad = function() {
  IN.Event.on(IN, "auth", function(){
    //pass 'me' as auth token
    IN.API.Profile("me")
      .fields(profileSearchAttributes)
      .result(getInfo);
  })
}

//Gets profile information
var getInfo = function(profile) {
  var linkedinInfo = profile.values[0]
  var currentUserId = Session.set('currentUserId', linkedinInfo.id);
  //find logged in user's unique indentifiers in the db
  var preventDuplicates = Experts.find({id: linkedinInfo.id});
  console.log(preventDuplicates.count());
  if (preventDuplicates.count() < 1) {
    addInfo(linkedinInfo);
  } else {
    updateInfo(linkedinInfo);
    console.log(linkedinInfo.firstName + ' ' + linkedinInfo.lastName + ' has been updated!');
  }
}

//Adds validated information to a database
var addInfo = function(profile) {
  Experts.insert(profile);
  // var currentUserId = Session.set('currentUserId', profile._id);
}

var updateInfo = function(profile) {
  Experts.update({ _id: profile.id }, profile);
}
