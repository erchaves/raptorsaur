// todo: make this more clear #sugarconeDist
import * as Pages from '../../dist/sugarcone/page-module-index';
import PageShared from './page-shared';

const sugarconeApp = require('@erchaves/sugarcone').app;
const $ = require('@erchaves/sprinkles');

class App {
  constructor (data) {
    this.route = data.route || 'home';
  }

  init() {
    const pageEl = $('.js-page')[0];

    const Page = sugarconeApp.getPage(Pages, this.route);

    // shared module to be run on every page
    this.shared = new PageShared();
    if (Page) {
      this.page = new Page(pageEl);
    }
  }
}

export default App;
