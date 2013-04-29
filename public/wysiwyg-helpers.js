// wysiwyg-helper.js

$(function(){
  var idLookUp = Session.get('currentUserId');
  //save data
  $('body').on('click', '#send-btn', function(){
    var headerInfo = $('.header-info').cleanHtml();
    var preventDuplicateEntries = resumeHtml.find({linked_id: idLookUp});
    if(preventDuplicateEntries.count() === 0) {
      //insert only if id doesn't already exists
      addHtml(headerInfo);
    } else {
      updateHtml(headerInfo);
    }
  });

  var addHtml = function(data) {
    //TODO: using linkedin id, need to use mongo_id.
    resumeHtml.insert({headerInfo: data, linked_id: idLookUp});
  }

  var updateHtml = function(data) {
    // resumeHtml.update({headerInfo: data, linked_id: Session.get('currentUserId')});
    console.log(idLookUp);
  }
});