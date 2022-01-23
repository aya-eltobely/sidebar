var btnopen = document.getElementById('btnopen'),
    btnclose = document.getElementById('btnclose'),
    asidee = document.getElementById('asidee');

btnopen.addEventListener('click', function() {

  asidee.classList.toggle('showaside');

});

btnclose.addEventListener('click', function() {

  asidee.classList.toggle('showaside');

});
