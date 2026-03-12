/**
 * LearnVault – Shared scripts
 * Navigation, accessibility, and small UX enhancements
 */

(function() {
  'use strict';

  // Highlight current page in nav
  var path = window.location.pathname || '';
  var page = path.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    var href = (a.getAttribute('href') || '').split('?')[0];
    if (href === page || (page === '' && href === 'index.html')) {
      a.style.color = 'var(--accent)';
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    var id = a.getAttribute('href').slice(1);
    if (id && document.getElementById(id)) {
      a.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      });
    }
  });

  // Toast helper (lightweight notifications)
  window.LearnVaultToast = function(opts) {
    opts = opts || {};
    var title = opts.title || 'Done';
    var msg = opts.message || '';
    var type = opts.type || 'success'; // success | warn
    var timeout = typeof opts.timeoutMs === 'number' ? opts.timeoutMs : 2600;

    var stack = document.querySelector('.toast-stack');
    if (!stack) {
      stack = document.createElement('div');
      stack.className = 'toast-stack';
      document.body.appendChild(stack);
    }

    var toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.innerHTML =
      '<div class="icon">' + (type === 'success' ? '✓' : '!' ) + '</div>' +
      '<div><div class="title"></div><div class="msg"></div></div>';
    toast.querySelector('.title').textContent = title;
    toast.querySelector('.msg').textContent = msg;
    stack.appendChild(toast);

    window.setTimeout(function() {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(6px)';
      toast.style.transition = 'opacity 180ms, transform 180ms';
      window.setTimeout(function() { toast.remove(); }, 220);
    }, timeout);
  };
})();
