'use strict';

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
};
window.onload = function (){
  document.querySelectorAll('.eye-logo').forEach(function (input) {
    input.addEventListener('click', toggle);

  });
};

// var showLegend = document.querySelectorAll('.form-tittle');
// var collapseTab = document.querySelectorAll('.tab');
// var id = event.currentTarget.getAttribute('data-id');
//
// function showFieldset(event) {
//   // event.currentTarget();
//   for (var id = 0; id < showLegend.length; id++){
//   if (collapseTab.classList.contains('hidden')){
//     collapseTab.classList.remove('hidden');
//   }  else{
//     collapseTab.classList.add ('hidden');
//   };
//   }
//   var id = currentTarget.getAttribute('data-id');
//   for (var id = 0; id < showLegend.length; id++) {
//     showLegend[id].addEventListener('click', showFieldset);
//   }

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

//
// window.onload = function (){
// document.querySelectorAll('.form-title').forEach(function (div) {
// for (var i = 0; i < showFieldset.length; i++){
// div[i].addEventListener('click', showFieldset);
// };
// });
// };
// // var fieldset = document.querySelectorAll('.form-title');
//
// function showFieldset(event) {
// for (var i = 0; i < fieldset.length; i++) {
//   fieldset[i].classList.remove('hidden');
// }
// }
// // for (var i = 0; i < fieldset.length; i++) {
// //   fieldset[i].classList.toggle('hidden');
// // }
// fieldset.addEventListener('click', showFieldset);
