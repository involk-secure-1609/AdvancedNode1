// The situation where the abundance of closures and in-place callback definitions
// transform the code into an unreadable and unmanageable blob is known as callback
// hell. It's one of the most well recognized and severe anti-patterns in Node.js and
// JavaScript in general. The typical structure of a code affected by this problem looks
// like the following:
// asyncFoo(function(err) {
// asyncBar(function(err) {
// asyncFooBar(function(err) {
// [...]
// });
// });
// });
// We can see how code written in this way assumes the shape of a pyramid due to the
// deep nesting and that's why it is also colloquially known as the pyramid of doom.
// The most evident problem with code such as the preceding one is the poor
// readability. Due to the nesting being too deep, it's almost impossible to keep
// track of where a function ends and where another one begins.


// These are some basic principles that can help us keep the nesting level low and
// improve the organization of our code in general:
// •You must exit as soon as possible. Use return, continue, or break,
// depending on the context, to immediately exit the current statement instead
// of writing (and nesting) complete if/else statements. This will help keep
// our code shallow.
// •You need to create named functions for callbacks, keeping them out of
// closures and passing intermediate results as arguments. Naming our
// functions will also make them look better in stack traces.
// •You need to modularize the code. Split the code into smaller, reusable
// functions whenever it's possible.
//dassdsa
