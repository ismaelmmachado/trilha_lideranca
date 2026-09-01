(function () {
  'use strict';

  var grid = document.getElementById('modulos-grid');
  if (!grid) return;

  fetch('dados/modulos.json')
    .then(function (r) { return r.json(); })
    .then(function (modulos) {
      modulos.forEach(function (m) {
        var card = document.createElement('a');
        card.href = 'modulo-' + m.id + '.html';
        card.className = 'modulo-card';
        card.innerHTML =
          '<div class="modulo-numero">' + m.icone + '</div>' +
          '<h3>' + m.titulo + '</h3>' +
          '<p>' + m.resumo + '</p>';
        grid.appendChild(card);
      });
    })
    .catch(function () {
      grid.innerHTML = '<p>Não foi possível carregar os módulos.</p>';
    });
})();
