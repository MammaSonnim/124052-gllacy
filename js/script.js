(function () {

  ymaps.ready(init);
  var myMap;

  function init() {
    myMap = new ymaps.Map('map', {
        center: [59.938429885190054, 30.32991749740603],
        zoom: [16],
        controls: []
      }),
      myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl');

    myPlacemark = new ymaps.Placemark([59.93866675783276,30.32307250000002], {
      hintContent: 'г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8',
    }, {
      iconLayout: 'default#image',
      iconImageHref: './img/img_map-pin.png',
      iconImageSize: [218, 142],
      iconImageOffset: [-38, -125]
    });

    myMap.geoObjects.add(myPlacemark);
  }

  var openContact = document.querySelector('.open-modal');
  var modalContact = document.querySelector('.modal-contact');
  var closeContact = modalContact.querySelector('.modal-contact__close');
  var overlay = document.querySelector('.overlay');

  if (modalContact) {
    var formContact = modalContact.querySelector('.modal-contact__form');
    var nameContact = modalContact.querySelector('[name=name]');
    var emailContact = modalContact.querySelector('[name=email]');
    var textContact = modalContact.querySelector('[name=text]');
    var storageName = localStorage.getItem('nameContact');
    var storageEmail = localStorage.getItem('emailContact');

    openContact.addEventListener('click', function (event) {
      event.preventDefault();
      modalContact.classList.add('modal-contact--show');
      overlay.classList.add('overlay--show');

      if (storageName && !storageEmail) {
        nameContact.value = storageName;
        emailContact.focus();
      } else if (storageName && storageEmail) {
        nameContact.value = storageName;
        emailContact.value = storageEmail;
        textContact.focus();
      } else {
        nameContact.focus();
      }
    });

    formContact.addEventListener('submit', function (event) {
      if (nameContact.value || emailContact.value || textContact.value) {
        localStorage.setItem('nameContact', nameContact.value);
        localStorage.setItem('emailContact', emailContact.value);
      }
    });

    closeContact.addEventListener('click', function (event) {
      event.preventDefault();
      modalContact.classList.remove('modal-contact--show');
      overlay.classList.remove('overlay--show');
    });
    
    overlay.addEventListener('click', function (event) {
      modalContact.classList.remove('modal-contact--show');
      overlay.classList.remove('overlay--show');
    });

    window.addEventListener('keydown', function (event) {
      if (event.keyCode === 27) {
        if (modalContact.classList.contains('modal-contact--show')) {
          modalContact.classList.remove('modal-contact--show');
          overlay.classList.remove('overlay--show');
        }
      }
    });
  };

})();
