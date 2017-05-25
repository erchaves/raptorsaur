const $ = require('@erchaves/sprinkles');

export default class {
  constructor(el) {
    this.$infoTooltip = $('.js-info-tooltip', el);
    this.$infoContent = $('.js-info-content', el);

    this.init();
  }

  init() {
    this.bindEvents();
  }

  handleTooltipToggle(e) {
    e.preventDefault();
    this.$infoContent.toggleClass('hide');
  }

  bindEvents() {
    // use bind(this) if the bound funtion needs to reference the 'this' module instance
    this.$infoTooltip.on('click', this.handleTooltipToggle.bind(this));
  }
}
