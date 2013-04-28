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

Template.linkedinInfo.wysiwyg = function(){
  // TODO: This is a hackety hack!!!
  setTimeout(function(){
    console.log('setTimeout working!');
    $('.header-info').wysiwyg();
    $('.skills').wysiwyg();
    $('.education').wysiwyg();
    $('.experience').wysiwyg();
  }, 1000);
}

Template.linkedinInfo.events({
  "click span" : function(e){
    console.log('test');
  }
});
