'use strics';

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  blackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/);
  },
  Windows: function () {
    return navigator.userAgent.match(/IeMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.blackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}
