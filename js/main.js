"use strict";

/*JAVASCRIPT MARÍA*/

//¿Por qué si todos los meses tienen class selector-month no me aplica la función call-back en todos?

//MESES JOB DESDE

var monthOption = document.querySelector('.selector-month');
monthOption.addEventListener('change',showAlertWithMonth);

function showAlertWithMonth(event) {
  var select= event.currentTarget;
  var input= select.options[select.selectedIndex];

  alert ('El mes seleccionado es ' + input.value);
}

// //MESES JOB HASTA
//
// var monthOption = document.querySelector('#month-to-job');
// monthOption.addEventListener('change',showAlertWithMonthTo);
//
// function showAlertWithMonthTo(event) {
//   var select= event.currentTarget;
//   var input= select.options[select.selectedIndex];
//
//   alert ('El mes seleccionado hasta es ' + input.value);
// }
//
// //MESES EDUCATION desde
//
// var monthOption = document.querySelector('#month-from-education');
// monthOption.addEventListener('change',showAlertWithMonthFrom);
//
// function showAlertWithMonthFrom(event) {
//   var select= event.currentTarget;
//   var input= select.options[select.selectedIndex];
//
//   alert ('El mes seleccionado en estudios desde es ' + input.value);
// }
//
// //MESES EDUCATION hasta
//
// var monthOption = document.querySelector('#month-to-education');
// monthOption.addEventListener('change',showAlertWithMonthTo);
//
// function showAlertWithMonthTo(event) {
//   var select= event.currentTarget;
//   var input= select.options[select.selectedIndex];
//
//   alert ('El mes seleccionado en estudios hasta es ' + input.value);
// }


//Misma duda de meses para años

//AÑOS DESDE JOB

var selectorYears = document.querySelector ('.selector-year-from');
var acumulador= '';
var currentYear= 2017;
var firstYear= 1950;

selectorYears.innerHTML + selectorYears.innerHTML + chooseYearsFrom(1950, 2017);

function chooseYearsFrom(firstYear, currentYear) {
  for (var i= firstYear; i <= currentYear; i++) {
    acumulador= acumulador + '<option>'+ i + '</option>'
  }
  return acumulador;
}

selectorYears.innerHTML= acumulador;

//AÑOS HASTA JOB

var selectorYears = document.querySelector ('.selector-year-to');
var acumulador= '';
var currentYear= 2017;
var firstYear= 1950;

selectorYears.innerHTML + selectorYears.innerHTML + chooseYearsTo(1950, 2017);

function chooseYearsTo(firstYear, currentYear) {
  for (var i= firstYear; i <= currentYear; i++) {
    acumulador= acumulador + '<option>'+ i + '</option>'
  }
  return acumulador;
}

selectorYears.innerHTML= acumulador;


// CON LOS AÑOS DE 2017 A 1950


// var selectorYears = document.querySelector ('.selector-year-to');
// var acumulador= '';
// var currentYear= 2017;
// var firstYear= 1950;
//
// selectorYears.innerHTML + selectorYears.innerHTML + chooseYearsTo(2017,1950);
//
// function chooseYearsTo(currentYear,firstYear){
//
//   for (var i= currentYear; i >= firstYear; i++) {
//     acumulador= acumulador + '<option>'+ i + '</option>'
//   }
//     return acumulador;
// }
//
// selectorYears.innerHTML= acumulador;

//EJEMPLO ALEX

// selectorYears.innerHTML + selectorYears.innerHTML + chooseYears(1950, 2017);

// var content = '';
// var currentYear=2017;
// for (var i = 0; i < array.length; i++) {
// array[i]
// }
//
// content += '<option>' + year + '</option>'
// pruebaElem.innerHTML = content;
//
// --------------------------------------------------------------------------------
//
// function addYears(initYear, currentYear) {
//   var acumulador= ''
//   for (var i= initYear; i <= currentYear; i++) {
//     acumulador= acumulador + '<option>'+ i + '</option>'
//   }
//   return acumulador;
// }
//
// var selectorYears = document.querySelector ('#selectorYears');
//
// selectorYears.innerHTML + selectorYears.innerHTML + addYears(1950, 2017);
