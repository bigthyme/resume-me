Meteor.subscribe("resume-data");
Meteor.subscribe("resume-html");

Template.resumeBody.allResumes = function(){
  console.log(resumeData.find({}));
  return resumeData.find({});
};

Template.main.currentUser = function(){
  console.log(Session.get('currentUserId'));
  return Session.get('currentUserId');
};

Template.welcome.userName = function(){
  return Session.get('currentUserName');
}

Template.linkedinInfo.editableContent = function(){
  //TODO: Need to modularize this!
    //TODO: why do we need the closure?
 $(function(){
    $('.header-info').wysiwyg();
    $('.skills').wysiwyg();
    $('.education').wysiwyg();
    $('.experience').wysiwyg();
  })
};

Template.linkedinInfo.events({
  "click span" : function(e){
    console.log('test');
  }
});
