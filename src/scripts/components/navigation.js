const $ = require('@erchaves/sprinkles');

class Navigation {
  constructor(opts) {
    var el = opts.el;

    this.el = el;
    this.$navToggle = $('.js-nav-toggle', this.el);

    this.bindEvents();
    this.init();
  }

  toggle(shouldOpen) {
    var isOpen;

    $(this.el).toggleClass('is-open', shouldOpen);

    // check after the toggle
    isOpen = $(this.el).hasClass('is-open');

    $.trigger('navigation.toggle', isOpen);
  }

  handleToggle(e) {
    e.preventDefault();
    this.toggle();
  }

  bindEvents() {
    this.$navToggle.on('click', this.handleToggle.bind(this));
  }

  init() {
  }
}

export default Navigation;
