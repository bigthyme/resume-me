// wysiwyg-helper.js

$(function(){
  //The current user in question
  var idLookUp = Session.get('curretUserId');

  //save data
  $('body').on('click', '#send-btn', function(){
    var resume = {};

    $('span').each(function(i){
      // if($('span')[i].className === "firstname"){
      //   resume.firstname = $(this).text();
      // };
      if(resume[$('span')[i].className]){
        console.log('matching key!');
        var preConcat = resume[$('span')[i].className];
      }

      resume[$('span')[i].className] = $(this).text();
      console.log(resume);
    });
    // for( var i = 0; i < $('span').length - 1; i++) {
    //   if($('span')[i].attr('class') === "firstname"){
    //     $('span')[i].innerText;
    //   };
    // };

    // var headerInfo = $('.header-info').cleanHtml();
    // var skillsInfo = $('.skills').cleanHtml();
    // var educationInfo = $('.education').cleanHtml();
    // var experienceInfo = $('.experience').cleanHtml();

    // //TODO: This is a hackety hack!!!
    // var saveData = [headerInfo, skillsInfo, educationInfo, experienceInfo];

    // var validatedData = validateStrings(saveData);
    // console.log(validatedData);

    // var preventDuplicateEntries = resumeHtml.find({linked_id: idLookUp});
    // if(preventDuplicateEntries.count() === 0) {
    //   //insert only if id doesn't already exists
    //   addHtml(saveData);
    //   console.log(saveData);
    //   // Session.set('dataReady', saveData);
    // } else {
    //   updateHtml(saveData);
    //   // Session.set('dataReady', saveData);
    // }
  });

  var addHtml = function(data) {
    //TODO: using linkedin id, need to use mongo_id.
    resumeHtml.insert({ headerData: data[0], skillsData: data[1], educationData: data[2], experienceData: data[3], linked_id: idLookUp });
    console.log('adding!');
  }

  var updateHtml = function(data) {
    resumeHtml.update({ _id : this._id }, {headerData: data[0], skillsData: data[1], educationData: data[2], experienceData: data[3], linked_id: idLookUp });
    console.log('updating!');
  }
});

// Valiation Functions
var validateStrings = function(dataArray) {
  console.log(dataArray[0]);
}
