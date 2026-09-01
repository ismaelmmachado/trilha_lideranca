(function () {
  'use strict';

  var MENU_ITEMS = [
    { href: 'index.html', label: 'Início' },
    { href: 'mapa.html', label: 'Mapa' },
    { href: 'material-de-apoio.html', label: 'Material de Apoio' }
  ];

  function currentPage() {
    var path = window.location.pathname;
    var file = path.split('/').pop() || 'index.html';
    return file === '' ? 'index.html' : file;
  }

  function renderHeader() {
    var cur = currentPage();
    var items = MENU_ITEMS.map(function (item) {
      var isCurrent = item.href === cur;
      return '<li><a href="' + item.href + '"' +
        (isCurrent ? ' aria-current="page"' : '') +
        '>' + item.label + '</a></li>';
    }).join('');

    return '<a class="skip-link" href="#main">Pular para o conteúdo</a>' +
      '<header class="site-header">' +
      '<div class="container header-inner">' +
      '<a class="logo-link" href="index.html">' +
      '<span class="logo-text">VITRAL</span>' +
      '<span class="logo-signature">IGREJA EM PESSOAS</span>' +
      '</a>' +
      '<nav class="nav" aria-label="Menu principal">' +
      '<button class="nav-toggle" aria-expanded="false" aria-controls="nav-menu">Menu</button>' +
      '<ul id="nav-menu" class="nav-menu">' + items + '</ul>' +
      '</nav>' +
      '</div>' +
      '</header>';
  }

  function renderFooter() {
    return '<footer class="site-footer">' +
      '<div class="container footer-inner">' +
      '<strong>Trilha de Liderança</strong>' +
      '<div class="footer-divider"></div>' +
      '<p>Comunidade Vitral · IPIB São José do Rio Preto</p>' +
      '<p class="footer-copy">&copy; ' + new Date().getFullYear() + ' Comunidade Vitral</p>' +
      '</div>' +
      '</footer>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var placeholder = document.getElementById('site-header-placeholder');
    if (placeholder) {
      placeholder.outerHTML = renderHeader();
    }

    var footerPlaceholder = document.getElementById('site-footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = renderFooter();
    }
  });
})();
