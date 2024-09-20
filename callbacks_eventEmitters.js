function helloEvents() {
  var eventEmitter = new EventEmitter();
  setTimeout(function () {
    eventEmitter.emit("hello", "world");
  }, 100);
  return eventEmitter;
}
function helloCallback(callback) {
  setTimeout(function () {
    callback("hello", "world");
  }, 100);
}
// The two functions helloEvents() and helloCallback() can be considered
// equivalent in terms of functionality; the first communicates the completion of the
// timeout using an event, the second uses a callback to notify the caller instead,
// passing the event type as an argument. But what really differentiates them is the
// readability, the semantic, and the amount of code that is required to be implemented
// or used. While we cannot give a deterministic set of rules to choose between one or
// the other style, we can certainly provide some hints to help take the decision.
// As a first observation, we can say that callbacks have some limitations when it comes
// to supporting different types of events. In fact, we can still differentiate between
// multiple events by passing the type as an argument of the callback, or by accepting
// several callbacks, one for each supported event. However, this cannot exactly be
// considered an elegant API. In this situation, an EventEmitter can give a better
// interface and leaner code.
// Another case where the EventEmitter might be preferable is when the same event
// can occur multiple times, or not occur at all. A callback, in fact, is expected to be
// invoked exactly once, whether the operation is successful or not. The fact that we have
// a possibly repeating circumstance should let us think again about the semantic nature
// of the occurrence, which is more similar to an event that has to be communicated
// rather than a result; in this case an EventEmitter is the preferred choice.
