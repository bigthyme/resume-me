// Linkedin API Helper functions
var profileSearchAttributes = [
      "id","firstName","lastName","industry","headline",
      "location","distance","currentShare","network",
      "summary","specialties","interests","positions",
      "skills","educations","phoneNumbers","imAccounts",
      "primaryTwitterAccount","date-of-birth","main-address"
];

var expertSearchCritera = [
  "id","firstName","lastName","industry","headline",
      "location", "specialties"
];

var connectionsFind = ["firstName", "lastName", "industry"];

var onLinkedInLoad = function() {
  //auth event handler
  IN.Event.on(IN, "auth", function(){
    //pass me as auth token
    IN.API.PeopleSearch()
      .fields(expertSearchCritera)
      .result(showResults);
  })
}

// var findProfiles = function(profile) {
//   console.log('Looking for connections');
//   IN.API.PeopleSearch()
//      .fields(expertSearchCritera)
//      .result(showConnections);
// }

var showResults = function(profile) {
  var experts = profile;
  console.log(experts);
}

var getProfile = function(profile) {
  var expert = profile.values[0];
  var validateExpert = Experts.find({firstName: expert.firstName, lastName: expert.lastName});
  //prevent de-duping users
  (validateExpert.count < 1) ? addProfile(expert) : console.log(expert.firstName + ' ' + expert.lastName + ' already exists!');
}

var addProfile = function(profile) {
  if(profile){
    Experts.insert(profile);
  }
}

