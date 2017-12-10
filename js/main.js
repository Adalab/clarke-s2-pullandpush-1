'use strict';

//  con este evento se activa o desactiva el ojo
var toggle = function(){
  document.querySelectorAll('.eye-logo').forEach(function(input){
    if (input.classList.contains('hidden'))
    input.classList.remove('hidden');
    // aside.classList.remove('hidden');
    else
    input.classList.add('hidden');
    // aside.classList.add('hidden');
  });

};
window.onload = function (){
  document.querySelectorAll('.eye-logo').forEach(function (input) {
    input.addEventListener('click', toggle);

  });
};

var showLegend = document.querySelectorAll('.form-tittle');
var collapseTab = document.querySelectorAll('.tab');
var idLegend = event.currentTarget.getAttribute('data-id');

function showFieldset(event) {
  for (var idLegend = 0; idLegend < showLegend.length; idLegend++){
    if (collapseTab.classList.contains('hidden')){
    collapseTab.classList.remove('hidden');
  }  else{
    collapseTab.classList.add ('hidden');
  };
}
var showLegend= document.querySelectorAll('.form-tittle');
var idLegend = event.currentTarget.getAttribute('data-id');
for (var idLegend = 0; idLegend < showLegend.length; idLegend++) {
  showLegend.addEventListener('click', showFieldset(event));
};


// function showContent(event) {
//   var content = document.querySelectorAll('.content');
//   var idButton = event.currentTarget.getAttribute('data-id');
//   content[idButton].classList.toggle('hidden');
// }
//
// var editButton = document.querySelectorAll('.edit-button');
// for (var i = 0; i < editButton.length; i++) {
//   editButton[i].addEventListener('click', showContent);
// };

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
