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
      "location", "specialties", "distance"
];


var onLinkedInLoad = function() {
  IN.Event.on(IN, "auth", function(){
    //pass 'me' as auth token
    IN.API.PeopleSearch()
      .fields(expertSearchCritera)
      .params({"count": 5, "distance" : 1})
      .result(showSearchResults);
  })
}

var showSearchResults = function(profile) {
  if(profile){
    var experts = profile.people.values;
    console.log(experts);
    for(var i = 0; i < experts.length; i++){
      addExpert(experts[i]);
      // var validateExpert = Experts.find({firstName: experts[i].firstName, lastName: experts[i].lastName});
      //   (validateExpert.count < 1) ? addExpert(experts[i]) : console.log(experts[i].firstName + ' already exists');
    }
  }
}

var addExpert = function(profile) {
  if(profile){
    Experts.insert(profile);
  }
}

