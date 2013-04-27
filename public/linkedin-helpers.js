// Linkedin API Helper functions
var profileSearchAttributes = [
      "id","firstName","lastName","industry","headline",
      "location","distance", "summary","specialties","interests","positions","skills","educations","phoneNumbers","imAccounts","primaryTwitterAccount","date-of-birth","main-address"
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

  //find logged in user's unique indentifiers in the db
  var preventDuplicates = Experts.find({firstName: linkedinInfo.firstName, lastName: linkedinInfo.lastName, distance: 0});
  console.log(preventDuplicates.count());
  if (preventDuplicates.count() < 1) {
    addInfo(linkedinInfo);
  } else {
    console.log(linkedinInfo.firstName + ' ' + linkedinInfo.lastName + ' has been updated!');
  }
}

//Adds validated information to a database
var addInfo = function(profile) {
  Experts.insert({distance: profile.distance, firstName: profile.firstName, lastName: profile.lastName, });
}

var updateInfo = function(profile) {
  Experts.update({distance: profile.distance, firstName: profile.firstName, lastName: profile.lastName}, profile);
}
