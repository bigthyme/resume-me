//Anthony Singhavong: Template Helpers are located in this file

//Client subscriptions
Meteor.subscribe("resume-data");
Meteor.subscribe("resume-html");

Template.resumeBody.currentResume = function(){
  console.log('found current user info: ' , resumeData.findOne({ id : Session.get('currentUserId')}));

  return resumeData.findOne({ id : Session.get('currentUserId')});
};

Template.main.currentUser = function(){
  return Session.get('currentUserId') || "";
};

Template.welcome.userName = function(){
  return Session.get('currentUserName') || "";
}

Template.welcome.changeText = function(){
  return Session.get('buttonClicked') || "";
}

Template.welcome.changeTextAgain = function(){
  return Session.get('templatePreview') || "";
}

Template.resumeBody.confirmed = function(){
  return Session.get('buttonClicked') || "";
}

Template.pickResume.previewClicked = function(){
  return Session.get('templatePreview') || "";
}

Template.pickResume.previewClicked = function(){
  return Session.get('templatePreview') || "";
}

Template.resumeTemplate.getResumeHtml = function(){
  return resumeHtml.findOne({_id : Session.get('currentResumeId')})
}

Template.pickResume.events({
  "click .template-resume" : function(e){
    $('.thumbnail').fadeOut();

    setTimeout(function(){
      Session.set('templatePreview', true);
      $('.welcome-msg h4').html('Great Choice!');
      $('body').css('background-color', 'rgba(0,0,0,0.9)').css('font-weight', 500);
    }, 600);

    console.log('the current resume ', Session.get('currentResumeId'));
  }
});

// Template.resumeTemplate.events({
//   "click #pdf": function(e){
//     $.ajax({
//       type: 'POST',
//       dataType: 'jsonp',
//       url: 'http://htmltopdfapi.com/querybuilder/api.php',
//       data: 'http://resume.meteor.com',
//       success: function(data){
//         console.log('POSTing: ', data);
//       },
//       error: function(){
//         console.log('Oopsies!');
//       }
//     });
//   }
// });

Template.linkedinInfo.events({
  "click #next": function(e){
    Session.set('buttonClicked', true);
  },

});

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
