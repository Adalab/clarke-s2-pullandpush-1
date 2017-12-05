'use strict';

var activateSection = document.querySelector('.eye-logo');

activateSection.addEventListener('click', asignClass);
function asignClass() {
  if (activateSection.classList.contains('eye-logo')); {
      if (activateSection.classList.contains('hidden')); {
          activateSection.classList.remove('hidden');
        }
else {
    activateSection.classList.add('hidden');
  }
}
}
