//Client subscriptions
Meteor.subscribe("resume-data");
Meteor.subscribe("resume-html");

Template.resumeBody.currentResume = function(){
  console.log('found current user info: ' , resumeData.findOne({ id : Session.get('currentUserId')}));
  return resumeData.findOne({ id : Session.get('currentUserId')});
};

Template.main.currentUser = function(){
  return Session.get('currentUserId');
};

Template.welcome.userName = function(){
  return Session.get('currentUserName');
}

Template.resumeBody.events({
  //detects any span class inside of the resumeBody template
  "click span" : function(e){
    var spanName = e.target.className;
    var spanNode = '.' + spanName;
    $(spanNode).wysiwyg();
  },

  //pops tooltip on mouseover
  "mouseover span": function(e){
    var spanName = e.target.className;
    var spanNode = '.' + spanName;
    setTimeout(function(){
      $(spanNode).tooltip({
        title: 'Double click here to edit ' + spanName,
        placement: 'right'
      });
    }, 100);
  }
});
