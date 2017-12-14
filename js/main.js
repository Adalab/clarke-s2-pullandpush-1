"use strict";



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

//mover arriba
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

//mover abajo
var downButtonList = document.querySelectorAll('.down');
for (var i = 0; i < downButtonList.length; i++) {
  downButtonList[i].onclick = function (event) {
    var clickedJob = event.target.parentElement;
    var nextJob = clickedJob.nextElementSibling;
    if (nextJob.className === 'job-entry') {
      jobExperience.insertBefore(clickedJob, nextJob.nextSibling);
      jobExperience.onchange();
    }
  }
}

//borrar
var deleteButton = document.querySelectorAll('.delete');
for (var i = 0; i < deleteButton.length; i++) {
  deleteButton[i].onclick =function (event) {
    var clickedJob = event.target.parentElement;
    var aJob = clickedJob.querySelector('.position');
    aJob.value = '';

    var aJob = clickedJob.querySelector('.company');
    aJob.value = '';

    var aJob = clickedJob.querySelector('.description-into');
    aJob.value = '';
    jobExperience.onchange();
  }
}

function toggleInput(target){
  if (target.classList.contains('hidden'))
  target.classList.remove('hidden');
  // aside.classList.remove('hidden');
  else
  target.classList.add('hidden');
  // aside.classList.add('hidden');
}
 //
 // con este evento se activa o desactiva el ojo
var toggle = function(){
  document.querySelectorAll('.eye-logo').forEach(toggleInput);
  var aside = document.querySelector('.preview');
  toggleInput(aside);
  var main = document.querySelector('main');
toggleInput(main);
};
window.onload = function (){
  document.querySelectorAll('.eye-logo').forEach(function (input) {
    input.addEventListener('click', toggle);

  });
};


  var fieldset = document.querySelectorAll('.form-title');
function showFieldset(event) {
  var idFieldset = event.currentTarget.getAttribute('data-id');
  var tab = document.querySelectorAll('.tab');
  tab[idFieldset].classList.toggle('hidden');
}

// var editButton = document.querySelectorAll('.edit-button');


for (var i = 0; i < fieldset.length; i++) {
  fieldset[i].addEventListener('click', showFieldset);
};


// botoncejo de imprimir e ir ready to the interviews
var printButton = document.querySelector('#print-cv');
function printCv () {
var pdfCv = document.querySelector('.preview-a4');
pdfCv.style.display = "block";
var pdfView = pdfCv.innerHTML;
//  a ver, se genera esta variable para que lo que salga en la pantalla una vez que cancele la impresión
// se muestre guachi en la web
var pdf = document.body.innerHTML;

document.body.innerHTML = pdfView;
window.print();
// y esa variable que habíamos generado que parecía que
document.body.innerHTML = pdf;

}
printButton.addEventListener('click', printCv);

/*JAVASCRIPT MARÍA*/


//MESES
var monthOption= ['','enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
var acumuladorMonths= '';

for (var i= 0; i <= monthOption.length; i++) {
acumuladorMonths= acumuladorMonths + '<option>'+ monthOption[i] + '</option>';
  }

var selectorMonth= document.querySelectorAll('.selector-month');
for (var i = 0; i < selectorMonth.length; i++){
  selectorMonth[i].innerHTML= acumuladorMonths;
}


//AÑOS

var selectorYears = document.querySelectorAll('.selector-year');
var acumuladorYears= '';
var currentYear= 1950;
var firstYear= 2017;


for (var i= firstYear; i >= currentYear; i--) {
  acumuladorYears= acumuladorYears + '<option>'+ i + '</option>'
}

  for (var i = 0; i < selectorYears.length; i++){
    selectorYears[i].innerHTML= acumuladorYears;
  }

  // //Cuando el usuario elige el mes en la lista de meses, ese mes tiene que incluirse en el PDF
  //
  // var jobExperience= document.querySelectorAll('.job-experience');
  // jobExperience.onchange= function(event) {
  // var allMonth= document.querySelectorAll('.selector-month');
  // var reviewCalendar= document.querySelectorAll('.preview-job-set');
  // for (var i = 0; i < allMonth.length; i++) {
  //   var allSelectMonth= allMonth[i].querySelector('.js-jobdata');
  //   allSelectMonth.innerHTML=
  // }
  // }
