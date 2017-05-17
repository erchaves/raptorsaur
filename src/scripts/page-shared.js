import Modal from './components/modal';
// import Form from './components/form';
import Navigation from './components/navigation';

// todo: remove test
var dustRender = require('@erchaves/sugarcone').dustRender;

const $ = require('@erchaves/sprinkles');

export default class {
  constructor (data) {
    this.$el = $('body');
    this.modalEl = $('.js-component-modal')[0];

    this.init();
  }

  init() {
    this.modal = new Modal(this.modalEl);

    // used across all pages
    this.navigation = new Navigation({
      el: $('.js-navigation')[0],
    });

    // $(document).find('.form').map(function (el) {
    //   new Form(el);
    // });

    this.bindEvents();

    // todo: remove test
    // dustRender('partials/about', {}, function(html) {
    //   console.log('html');
    //   $('body').append(html);
    // });
  }

  handleOnEsc(e) {
    var isEsc = e.which === 27 || e.keyCode === 27;

    if (isEsc) {
      $.trigger('modal.close');

      // ensure that the navigation is closed
      this.navigation.toggle(false);
    }
  }

  handleNavigationToggle(isOpen) {
    var $body = this.$el;

    $body.toggleClass('nav-open', isOpen);
  }

  bindEvents() {
    $(document).on('keydown', this.handleOnEsc.bind(this));

    $.on('navigation.toggle', this.handleNavigationToggle.bind(this));
  }
}
