(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  var year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (toggle && menu) {
    function isMenuOpen() {
      return menu.classList.contains('open');
    }

    function setMenu(open) {
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-locked', open);
    }

    function focusablesInMenu() {
      return Array.prototype.filter.call(
        menu.querySelectorAll('a[href]'),
        function (el) { return el.offsetParent !== null; }
      );
    }

    toggle.addEventListener('click', function () {
      setMenu(!isMenuOpen());
    });

    document.addEventListener('keydown', function (e) {
      if (!isMenuOpen()) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        setMenu(false);
        toggle.focus();
        return;
      }
      if (e.key === 'Tab') {
        var items = [toggle].concat(focusablesInMenu());
        var first = items[0];
        var last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    document.addEventListener('click', function (e) {
      if (isMenuOpen() && !e.target.closest('.nav')) {
        setMenu(false);
        toggle.focus();
      }
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        setMenu(false);
      }
    });
  }
})();
