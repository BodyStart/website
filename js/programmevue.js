document.addEventListener('DOMContentLoaded', function () {
  function ouvrirDetailsProgramme(boutonId) {
     let detailsProgramme = document.querySelector(`.details-programme${boutonId.slice(-1)}`);
     detailsProgramme.classList.toggle('show');
  }
 
  let boutonsDetailsProgramme = document.querySelectorAll('button[id^="ouvrir-detailsprogramme"]');
 
  boutonsDetailsProgramme.forEach(function (bouton) {
     bouton.addEventListener('click', function () {
       ouvrirDetailsProgramme(bouton.id);
     });
  });
 });