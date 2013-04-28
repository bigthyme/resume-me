// wysiwyg-helper.js

$(function(){
  //save data
  $('body').on('click', '#send-btn', function(){
    // console.log('the user: ', Session.get('currentUserId'));
    var headerInfo = $('.header-info').html();
    resumeHtml.insert({headerInfo: headerInfo, linked_id: Session.get('currentUserId')});
    console.log(resumeHtml.find({}));
  });
})