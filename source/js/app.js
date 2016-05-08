import { $, $$ } from './utils';
import pubSub from './components/SimplePubSub';

class App {

  start () {
    this._bindActions();
    this._init();
  }

  _test (e) {
    console.log(e.currentTarget);
    pubSub.trigger('test');
  }

  _bindActions () {
    $('body').onclick = this._test.bind(this);
  }

  _init () {
    pubSub.bind('test', () => console.log('testing pubsub'));
  }
}

export default App;
