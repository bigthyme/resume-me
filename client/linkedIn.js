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

// Template.linkedinInfo.wysiwyg = function(){
//   // TODO: Fix this hackety hack!!!
//   setTimeout(function(){
//     //headerInfo
//     // $('.firstname').wysiwyg();
//     // $('.lastname').wysiwyg();
//     // $('.email-address').wysiwyg();
//     // $('.phone-number').wysiwyg();
//     // $('.location').wysiwyg();
//     // $('.skills-list').wysiwyg();
//     // $('.skills-list').wysiwyg();
//     // $('.skills').wysiwyg();
//     // $('.education').wysiwyg();
//     // $('.experience').wysiwyg();
//   }, 1000);
// }

Template.resumeBody.events({
  //detects any span class inside of the resumeBody template
  "click span" : function(e){
    var spanName = e.target.className;
    var spanNode = '.' + spanName;
    $(spanNode).wysiwyg();
  },

  "mouseover span": function(e){
    var spanName = e.target.className;
    var spanNode = '.' + spanName;
    setTimeout(function(){
      $(spanNode).tooltip({
        title: 'Double click any field to edit it!',
        placement: 'right'
      });
    }, 100);
  }
});
