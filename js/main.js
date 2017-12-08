"use strict";

/*JAVASCRIPT MARÍA*/

//MESES JOB DESDE

var monthOption = document.querySelector('#month-from-job');
monthOption.addEventListener('change',showAlertWithMonthFrom);

function showAlertWithMonthFrom(event) {
  var select= event.currentTarget;
  var input= select.options[select.selectedIndex];

  alert ('El mes seleccionado desde es ' + input.value);
}

//MESES JOB HASTA

var monthOption = document.querySelector('#month-to-job');
monthOption.addEventListener('change',showAlertWithMonthTo);

function showAlertWithMonthTo(event) {
  var select= event.currentTarget;
  var input= select.options[select.selectedIndex];

  alert ('El mes seleccionado hasta es ' + input.value);
}

//MESES EDUCATION desde

var monthOption = document.querySelector('#month-from-education');
monthOption.addEventListener('change',showAlertWithMonthFrom);

function showAlertWithMonthFrom(event) {
  var select= event.currentTarget;
  var input= select.options[select.selectedIndex];

  alert ('El mes seleccionado en estudios desde es ' + input.value);
}

//MESES EDUCATION hasta

var monthOption = document.querySelector('#month-to-education');
monthOption.addEventListener('change',showAlertWithMonthTo);

function showAlertWithMonthTo(event) {
  var select= event.currentTarget;
  var input= select.options[select.selectedIndex];

  alert ('El mes seleccionado en estudios hasta es ' + input.value);
}




//AÑOS

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
