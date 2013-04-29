// wysiwyg-helper.js

$(function(){
  //save data
  $('body').on('click', '#send-btn', function(){
    // console.log('the user: ', Session.get('currentUserId'));
    var headerInfo = $('.header-info').html();
    // var preventDuplicates = resumeHtml.find({_id: _id});
    console.log('the id', this._id);
    addHtml(headerInfo);
  });

  var addHtml = function(data) {
    resumeHtml.insert({headerInfo: data, linked_id: Session.get('currentUserId')});
    console.log(resumeHtml.find({}));
  }

  var updateHtml = function(data) {
    resumeHtml.update({headerInfo: data, linked_id: Session.get('currentUserId')});
  }
})