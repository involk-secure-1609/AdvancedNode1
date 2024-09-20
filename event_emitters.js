var EventEmitter = require("events").EventEmitter;
var util = require("util");
var fs = require("fs");


// using Es6
// i will have to register the event listeners later
// class findPattern extends EventEmitter {
//   constructor(regex) {
//     super();
//     this.regex = regex;
//     this.files = [];
//   }

//   addFile(file) {
//     this.files.push(file);
//     return this;
//   }

//   find() {
//     var self = this;
//     self.files.forEach(function (file) {
//       fs.readFile(file, "utf8", function (err, content) {
//         if (err) return self.emit("error", err);
//         self.emit("fileread", file);
//         var match = null;
//         if ((match = content.match(self.regex)))
//           match.forEach(function (elem) {
//             self.emit("found", file, elem);
//           });
//       });
//     });
//     return this;
//   }
// }
function FindPattern(regex) {
  EventEmitter.call(this);
  this.regex = regex;
  this.files = [];
}
util.inherits(FindPattern, EventEmitter);
FindPattern.prototype.addFile = function (file) {
  this.files.push(file);
  return this;
};
FindPattern.prototype.find = function () {
  var self = this;
  self.files.forEach(function (file) {
    fs.readFile(file, "utf8", function (err, content) {
      if (err) return self.emit("error", err);
      self.emit("fileread", file);
      var match = null;
      if ((match = content.match(self.regex)))
        match.forEach(function (elem) {
          self.emit("found", file, elem);
        });
    });
  });
  return this;
};

/*

This code demonstrates how to create a custom object, FindPattern, which inherits from EventEmitter and uses Node.js's events and fs modules to search for patterns in files. The object emits events at different stages of the process, such as when a file is read or a pattern is found.

Let’s break it down:

1. Required Modules:
javascript
Copy code
var EventEmitter = require('events').EventEmitter;
var util = require('util');
var fs = require('fs');
events: The EventEmitter class from Node.js is used to create, listen for, and emit custom events.
util: This module provides utilities, including util.inherits, which sets up inheritance between constructor functions.
fs: The file system module (fs) is used to read the contents of files asynchronously.
2. FindPattern Constructor:
javascript
Copy code
function FindPattern(regex) {
  EventEmitter.call(this); // Call the parent EventEmitter constructor.
  this.regex = regex;      // Store the regular expression pattern to search for.
  this.files = [];         // Initialize an empty array to store file paths.
}
FindPattern is a constructor function that accepts a regular expression (regex) as an argument. This will be the pattern that the user wants to search for in files.
It initializes two properties:
regex: stores the regular expression pattern.
files: an array to hold the file paths where the search will occur.
EventEmitter.call(this) calls the EventEmitter constructor, giving FindPattern the ability to emit events.
3. Inherit from EventEmitter:
javascript
Copy code
util.inherits(FindPattern, EventEmitter);
This sets up the inheritance chain so that FindPattern inherits from EventEmitter. This allows instances of FindPattern to emit and listen for events.

*/
