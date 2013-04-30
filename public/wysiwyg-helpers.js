// wysiwyg-helper.js - all functions that occur inside of the wysiwyg is included into this file.

$(function(){
  //The current user in question
  var idLookUp = Session.get('curretUserId');

  //save data
  $('body').on('click', '#send-btn', function(){
    var resume = {},
    skillsList = [],
    educationList = [],
    educationDates = [],
    jobTitles = [],
    jobDates = [],
    jobSummaries = [];

    //TODO: Use recursion...??
    $('span').each(function(i){
     if($('span')[i].className === "firstname"){
        var firstname = $(this).text();
        resume["name"] = firstname;
      }
      if($('span')[i].className === "lastname"){
        var lastname = $(this).text();
        var first = resume["name"];
        resume["name"] = first + ' ' + lastname;
      }
      if($('span')[i].className === "email-address"){
        var email = $(this).text();
        resume["email"] = email;
      }
      if($('span')[i].className === "phone-number"){
        var phoneNumber = $(this).text();
        resume["phoneNumber"] = phoneNumber;
      }
      if($('span')[i].className === "location"){
        var location = $(this).text();
        resume["location"] = location;
      };
      if($('span')[i].className === "skill"){
        var skill = $(this).text();
        skillsList.push(skill);
        resume["skill-list"] = skillsList;
      }
      if($('span')[i].className === "degree"){
        var degree = $(this).text();
        educationList.push(degree);
        resume["education-list"] = educationList;
      }
      if($('span')[i].className === "degree-date"){
        var degreeDate = $(this).text();
        educationDates.push(degreeDate);
        resume["degree-date"] = educationDates;
      }
      if($('span')[i].className === "job-description"){
        var jobTitle = $(this).text();
        jobTitles.push(jobTitle);
        resume["job-titles"] = jobTitles;
      }
      if($('span')[i].className === "job-date"){
        var jobDate = $(this).text();
        jobDates.push(jobDate);
        resume["job-dates"] = jobDates;
      }
      if($('span')[i].className === "job-summary"){
        var jobSummary = $(this).text();
        jobSummaries.push(jobSummary);
        resume["job-summaries"] = jobSummaries;
      }
    });

    console.log(extractValues(resume));

    var preventDuplicateEntries = resumeHtml.find({linked_id: idLookUp});
    if(preventDuplicateEntries.count() === 0) {
      //insert only if id doesn't already exists
      addHtml(resume);
    } else {
      updateHtml(resume);
    }
  })
  var addHtml = function(data) {
    resumeHtml.insert(data);
    console.log('added ', resumeHtml.findOne({ id : idLookUp }));
  }

  var updateHtml = function(data) {
    resumeHtml.update({ _id : this._id }, data);
    console.log('updating ', resumeHtml.findOne({ id : idLookUp }));
  }

  // Valiation Helper Functions
  var extractValues = function(dataObj) {
    for(keys in dataObj){
      var values = dataObj[keys];
      validateStrings(values);
    }
  }

  var validateStrings = function(array){
    if(Object.prototype.toString.call(array) === "[object Array]"){
      console.log('is array!');
      for(var j = 0; j < array.length; j++){
        console.log(array[j]);
      }
    }
    if(Object.prototype.toString.call(array) === "[object String]"){
      console.log('is string!');
    }
  }
});

