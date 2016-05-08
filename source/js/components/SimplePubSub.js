class PubSub {
  constructor (opts) {
    this.opts = opts;
    this.topics = {};
  }

  bind (topic, listener) {
    // create the topic if not yet created
    if(!this.topics[topic]) this.topics[topic] = [];

    // add the listener
    this.topics[topic].push(listener);
  }

  trigger (topic, data) {
    // return if the topic doesn't exist, or there are no listeners
    if(!this.topics[topic] || this.topics[topic].length < 1) return;

    // send the event to all listeners
    this.topics[topic].forEach(function(listener) {
      listener(data || {});
    });
  }
}

var pubSub = new PubSub();

export default pubSub;
