// Anthony Singhavong: wysiwyg-helper.js - all functions that occur inside of the wysiwyg is included into this file

$(function(){

  //save data
  $('body').on('click', '#send-btn', function(){

    //current Linkedin User Id
    var linkedinID = Session.get('currentUserId');

    var resume = {},
    skillsList = [],
    educationList = [],
    educationDates = [],
    jobTitles = [],
    jobDates = [],
    jobSummaries = [],
    educationDetails = {};

    //Add LinkedinID to the resume object
    resume['linkedinId'] = linkedinID;

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
      if($('span')[i].className === "headline"){
        var headline = $(this).text();
        resume['headline'] = headline
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
      }
      if($('span')[i].className === "degree-date"){
        var degreeDate = $(this).text();
        educationDates.push(degreeDate);
      }
      if($('span')[i].className === "job-description"){
        var jobTitle = $(this).text();
        jobTitles.push(jobTitle);
      }
      if($('span')[i].className === "job-date"){
        var jobDate = $(this).text();
        jobDates.push(jobDate);
      }
      if($('span')[i].className === "job-summary"){
        var jobSummary = $(this).text();
        jobSummaries.push(jobSummary);
      }
      //TODO: Modularize this..HOT FIX!!!
      var convertJobDetailsArr = function(){
        var jobs = _.zip(jobTitles, jobSummaries, jobDates);
        resume['job-details'] = _.map(jobs, function(job){
          return _.object(['jobTitle', 'jobSummary', 'jobDate'], job);
        });
      }

      var convertEducationDetailsArr = function(){
        var degrees = _.zip(educationDates, educationList);
        console.log('converting edu data..', degrees);
        resume['education-details'] = _.map(degrees,function(degree){
            return _.object(['education', 'educationDate'], degree);
        });
      }
      convertJobDetailsArr();
      convertEducationDetailsArr();
    })


    var addHtml = function(data) {
      resumeHtml.insert(data);
      console.log('adding html!');
    }

    var updateHtml = function(data) {
      resumeHtml.update({ _id : Session.get('currentResumeId') }, data);
      console.log(resumeHtml.findOne({}));
    }


    var preventDuplicateEntries = resumeHtml.findOne({linkedinId: linkedinID});

    if(!preventDuplicateEntries) {
      console.log('resume', resume);
      //adds the current resume for the first time.
      addHtml(resume);
      preventDuplicateEntries = resumeHtml.findOne({linkedinId: linkedinID});
      //Set Mongo Collection ID
      Session.set('currentResumeId', preventDuplicateEntries._id);
      console.log('adding!');
    } else {
      //updates the current resume with latest info.
      updateHtml(resume);
      (Session.get('currentResumeId')) ? console.log(Session.get('currentResumeId')) : Session.set('currentResumeId', preventDuplicateEntries._id);
      console.log('updating!');
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
});


