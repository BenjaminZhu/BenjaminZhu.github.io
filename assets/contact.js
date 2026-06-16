document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.email-link[data-contact]').forEach(function (link) {
    var parts = link.dataset.contact.split('|');
    if (parts.length !== 2) {
      return;
    }

    var reverse = function (value) {
      return value.split('').reverse().join('');
    };
    var address = reverse(parts[0]) + '@' + reverse(parts[1]);

    link.href = 'mailto:' + address;
    link.title = address;
  });
});
