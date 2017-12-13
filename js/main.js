"use strict";

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

  //Cuando el usuario elige el mes en la lista de meses, ese mes tiene que incluirse en el PDF

  var jobExperience= document.querySelectorAll('.job-experience');
  jobExperience.onchange= function(event) {
  var allMonth= document.querySelectorAll('.selector-month');
  var reviewCalendar= document.querySelectorAll('.preview-job-set');
  for (var i = 0; i < allMonth.length; i++) {
    var allSelectMonth= allMonth[i].querySelector('.js-jobdata');
    allSelectMonth.innerHTML=
  }
  }

//   var fruits = document.querySelectorAll('.fruits li');
// for (var i = 0; i < fruits.length; i++) {
//   fruits[i].addEventListener('click', showAlertWithFruit);
// }
//
// function showAlertWithFruit(event){
//   alert(event.currentTarget.innerHTML);
// }
//
//   selectorMonth.onchange= function(event) {
//   var targetCalendar= document.querySelector('.js-'+ event.target.jobdata);
//   targetCalendar.innerHTML= event.target.option.value;
//
//   }
//
//   function hide(e){
//   e.currentTarget.style.visibility = "hidden";
//   // Cuando esta funcion es usada como un controlador de evento: this === e.currentTarget
// }
//
// var ps = document.getElementsByTagName('p');
//
// for(var i = 0; i < ps.length; i++){
//   ps[i].addEventListener('click', hide, false);
// }



//   <script>
// function myFunction(event) {
//     var x = event.target;
//     document.getElementById("parrafo").innerHTML = "Triggered by a " + x.tagName boton + " element";
// }
// </script>

//getElementById--->
// tagname--->js-jobdata

  // <div class="calendar">
  //   <label for="month" class="from-to">Hasta</label>
  //   <select id="month" class="selector-month" name="month">
  //
  //   </select>
  //
  //   <label for="year" class="from-to"></label>
  //   <select id="year" class="selector-year" name="year">
  //
  //   </select>
  // </div>

  // <div class="preview-jobs">
  //   <h2 class="preview-title">Experiencia</h2>
  //
  //   <div class="preview-set">
  //     <span class="js-company">Empresa |</span>
  //     <span class="js-position">Puesto |</span>
  //     <span class="js-jobdata">mes año - mes año</span>
  //     <p class="js-explanation">
  //       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  //     </p>
  //   </div>
