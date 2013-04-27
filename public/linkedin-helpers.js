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

var findProfiles = function(profile) {
  IN.API.Raw("/people-search:(facets:(code,buckets:(code,name,count)))?facets=location&facet=location,us:84)")
      .result(function peopleSearchCallback(result) {
        console.log(result);
      });
}

var addProfile = function(profile){
  if(profile){
    var member = profile.values[0];
    console.log(member);
    Experts.insert(member);
  }
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