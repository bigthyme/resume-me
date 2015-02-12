// Linkedin API Helper functions
var profileSearchAttributes = [
  "id","firstName","lastName","industry","headline",
  "location","distance", "summary","specialties","interests","positions","skills","educations","phoneNumbers","primaryTwitterAccount","email-address"
];


var onLinkedInLoad = function() {
  $('a[id*=li_ui_li_gen_]').html('<img src="http://eval2hire.com/eval2hire/user_data/images/linkedin-login-button1.png" height="31" width="200" border="0" />');
  IN.Event.on(IN, "auth", function(){
    //pass 'me' as auth token
    IN.API.Profile("1cf9c7e4-8de1-44ac-bb86-bf236292399d")
      .fields(profileSearchAttributes)
      .result(getInfo);
  })
}

//Gets profile information
var getInfo = function(profile) {
  console.log('profile ', profile.values);
  var linkedinInfo = profile.values[0];
  Session.set('currentUserId', linkedinInfo.id);
  Session.set('currentUserName', linkedinInfo.firstName);
  //find logged in user's unique indentifiers in the db
  var preventDuplicates = resumeData.find({id: linkedinInfo.id});
  console.log(preventDuplicates.count());
  if (preventDuplicates.count() === 0) {
    addInfo(linkedinInfo);
    console.log('user saved!');
  } else {
    updateInfo(linkedinInfo);
  }
}

//Adds validated information to a database
var addInfo = function(profile) {
  console.log('saving user to the db!');
  resumeData.insert(profile);
}

var updateInfo = function(profile) {
  resumeData.update({ _id: profile.id }, profile);
  console.log(profile.firstName + ' ' + profile.lastName + ' has been updated!');
}
