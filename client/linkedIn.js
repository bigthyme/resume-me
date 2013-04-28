Meteor.subscribe("resume-data");
Meteor.subscribe("resume-html");

Template.resumeBody.currentResume = function(){
  console.log('found current user info: ' , resumeData.findOne({ id : Session.get('currentUserId')}));
  return resumeData.findOne({ id : Session.get('currentUserId')});
};

Template.main.currentUser = function(){
  console.log(Session.get('currentUserId'));
  return Session.get('currentUserId');
};

Template.welcome.userName = function(){
  return Session.get('currentUserName');
}

Template.linkedinInfo.wysiwyg = function(){
  // TODO: Fix this hackety hack!!!
  setTimeout(function(){
    $('.header-info').wysiwyg();
    $('.skills').wysiwyg();
    $('.education').wysiwyg();
    $('.experience').wysiwyg();
  }, 1000);
}

Template.linkedinInfo.events({
  "click .header-info" : function(e){
    var myEventHandler = function () {alert('hello')};
    $('.header-info').unbind('click', myEventHandler);
    $('header-info').bind('click', myEventHandler);
  }
});
