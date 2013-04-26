// Linkedin API Helper functions
var profileSearchAttributes = [
      "id","firstName","lastName","industry","headline",
      "location","distance","currentShare","network",
      "summary","specialties","interests","positions",
      "skills","educations","phoneNumbers","imAccounts",
      "primaryTwitterAccount","date-of-birth","main-address"
];

var onLinkedinLoad = function() {
  //auth event handler
  IN.Event.on(IN, "auth", function(){
    //user has been successfully autenticated
    IN.API.Profile("me")
      .fields(profileSearchAttributes)
      .result(addProfile);
  });
}

var addProfile = function(profile){
  var userObj = profile.values[0];
  for(key in userObj){
    console.log(key + ', ' + userObj[key])
  }
  // Experts.insert(profile);
}

// var onLinkedAuth = function() {
//   //me = the signed in user
//   IN.API.Profile('me').result(displayProfiles);
// }

// var displayProfiles = function(profiles) {
//   member = profiles.values[0];
//   document.getElementById('profiles').innerHTML =
//   "<p id=\"" + member.id + "\">Hello " +  member.firstName + " " + member.lastName + "</p>";
// }