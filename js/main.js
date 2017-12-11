'use strict';

// HACKS
// Estos permite usar enter y ademas evita el submit que recarga la pagina, ya que paro lo que el evento va ejecutar por defecto.
document.onsubmit = function(event) {
  console.log (serialize(document.forms[0]));
  event.preventDefault();
  numInput.value = '';
};

// PERSONAL DATA
var personalData = document.querySelector('.personal-data');
personalData.onchange = function(event) {
  var targetField = document.querySelector('.js-' + event.target.name);
  targetField.innerHTML = event.target.value;
};


// EXPERIENCE
var jobExperience = document.querySelector('.job-experience');
jobExperience.onchange = function(event) {
  var allJobs = document.querySelectorAll('.job-entry')
  var reviewJobs = document.querySelectorAll('.preview-job-set')
  for (var i = 0; i < allJobs.length; i++) {
    var aJob = allJobs[i].querySelector('.position');
    var aReJob = reviewJobs[i].querySelector('.js-position');
    aReJob.innerHTML = aJob.value + ' |';

    var aJob = allJobs[i].querySelector('.company');
    var aReJob = reviewJobs[i].querySelector('.js-company');
    aReJob.innerHTML = aJob.value + ' |';

    var aJob = '';
    var aReJob = reviewJobs[i].querySelector('.js-jobdata');
    aReJob.innerHTML = 'fecha';

    var aJob = allJobs[i].querySelector('.description-into');
    var aReJob = reviewJobs[i].querySelector('.js-explanation');
    aReJob.innerHTML = aJob.value;
  }
};


var upButtonList = document.querySelectorAll('.up');
for (var i = 0; i < upButtonList.length; i++) {
  upButtonList[i].onclick = function (event){
    var clickedJob = event.target.parentElement;
    var previousJob = clickedJob.previousElementSibling;
    if (previousJob.className === 'job-entry') {
      jobExperience.insertBefore(clickedJob, previousJob);
      jobExperience.onchange();
    }
  }
}

var downButtonList = document.querySelectorAll('.down');
for (var i = 0; i < downButtonList.length; i++) {
  downButtonList[i].onclick = function (event){
    var clickedJob = event.target.parentElement;
    var nextJob = clickedJob.nextElementSibling;
    if (nextJob.className === 'job-entry') {
      jobExperience.insertBefore(clickedJob, nextJob.nextSibling);
      jobExperience.onchange();
    }
  }
}
