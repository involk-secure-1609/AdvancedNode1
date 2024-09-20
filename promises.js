// In very simple terms, promises are an abstraction that allow an asynchronous
// function to return an object called a promise, which represents the eventual result
// of the operation. In the promises jargon, we say that a promise is pending when
// the asynchronous operation is not yet complete, it's fulfilled when the operation
// successfully completes, and rejected when the operation terminates with an error.
// Once a promise is either fulfilled or rejected, it's considered settled.
// To receive the fulfillment value or the error (reason) associated with the rejection,
// we can use the then() method of the promise. The following is its signature:
// promise.then([onFulfilled], [onRejected])


// Promises allow to transform this typical CPS code into a better structured and more
// elegant code, such as the following:
// asyncOperation(arg)
// .then(function(result) {
// //do stuff with result
// }, function(err) {
// //handle error
// });


// If an exception is thrown (using the throw statement) from
// the onFulfilled() or onRejected() handler, the promise returned by the then()
// method will automatically reject with the exception as the rejection reason. This is
// a tremendous advantage over CPS, as it means that with promises, exceptions will
// propagate automatically across the chain, and that the throw statement is not an
// enemy anymore.

// Constructor (new Promise(function(resolve, reject) {})):
// This creates a new promise that fulfills or rejects based on the behavior
// of the function passed as an argument. The arguments of the constructor
// are explained as follows:
// °resolve(obj): This will resolve the promise with a fulfillment value,
// which will be obj if obj is a value. It will be the fulfillment value of
// obj if obj is a promise or a thenable.
// °reject(err): This rejects the promise with the reason err. It is a
// convention to have err to be an instance of Error.
// Static methods of the Promise object:

// Promise.resolve(obj): This creates a new promise from a thenable
// or a value.
// Promise.reject(err): This creates a promise that rejects with err
// Promise.all(array): This creates a promise that fulfills with an
// as the reason.
// array of fulfillment values when every item in the array fulfills, and
// rejects with the first rejection reason if any item rejects. Each item in
// the array can be a promise, a generic thenable, or a value.