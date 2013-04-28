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
  var preventDuplicates = resumeData.find({id: linkedinInfo.id});
  console.log(preventDuplicates.count());
  if (preventDuplicates.count() === 0) {
    addInfo(linkedinInfo);
    console.log('user saved!');
  } else {
    updateInfo(linkedinInfo);
    console.log(linkedinInfo.firstName + ' ' + linkedinInfo.lastName + ' has been updated!');
  }
}

//Adds validated information to a database
var addInfo = function(profile) {
  console.log('saving user to the db!');
  resumeData.insert(profile);
}

var updateInfo = function(profile) {
  console.log('this is the profile id', profile.id);
  resumeData.update({ _id: profile.id }, profile);
}
