"use strict";

/*JAVASCRIPT MARÍA*/


//MESES
var monthOption= ['','enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
var acumulador= '';

for (var i= 0; i <= monthOption.length; i++) {
acumulador= acumulador + '<option>'+ monthOption[i] + '</option>';
  }

var selectorMonth= document.querySelectorAll('.selector-month');
for (var i = 0; i < selectorMonth.length; i++){
  selectorMonth[i].innerHTML= acumulador;
}


//AÑOS

var selectorYears = document.querySelectorAll('.selector-year');
var acumulador= '';
var currentYear= 1950;
var firstYear= 2017;


for (var i= firstYear; i >= currentYear; i--) {
  acumulador= acumulador + '<option>'+ i + '</option>'
}

  for (var i = 0; i < selectorYears.length; i++){
    selectorYears[i].innerHTML= acumulador;
  }

  
