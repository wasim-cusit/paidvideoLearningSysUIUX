/**
 * Panel UX: mobile sidebar toggle + backdrop + ESC close
 */
(function() {
  'use strict';

  function initPanel() {
    var sidebar = document.querySelector('.panel-sidebar');
    if (!sidebar) return;

    var backdrop = document.querySelector('.panel-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'panel-backdrop';
      document.body.appendChild(backdrop);
    }

    function open() {
      sidebar.classList.add('open');
      backdrop.classList.add('show');
    }
    function close() {
      sidebar.classList.remove('open');
      backdrop.classList.remove('show');
    }
    function toggle() {
      if (sidebar.classList.contains('open')) close();
      else open();
    }

    document.querySelectorAll('[data-panel-menu]').forEach(function(btn) {
      btn.addEventListener('click', toggle);
    });
    backdrop.addEventListener('click', close);

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') close();
    });

    // Close sidebar after navigation on mobile
    sidebar.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        close();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPanel);
  } else {
    initPanel();
  }
})();

