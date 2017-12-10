'use strict';


 var toggle = function(){
document.querySelectorAll('.eye-logo').forEach(function(input){
if (input.classList.contains('hidden'))
input.classList.remove('hidden');
else
input.classList.add('hidden');
  });

};
window.onload = function (){
document.querySelectorAll('.eye-logo').forEach(function (input) {
input.addEventListener('click', toggle);

});
};
