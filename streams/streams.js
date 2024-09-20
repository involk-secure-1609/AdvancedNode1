// streams allow us to do things that would not be possible, by buffering
// data and processing it all at once. For example, consider the case in which we have
// to read a very big file, let's say, in the order of hundreds of megabytes or even
// gigabytes. Clearly, using an API that returns a big buffer when the file is completely
// read, is not a good idea. Imagine reading a few of these big files concurrently; our
// application will easily run out of memory. Besides that, buffers in V8 cannot be
// bigger than 0x3FFFFFFF bytes (a little bit less than 1 GB). So, we might hit a wall way
// before running out of physical memory


// PROGRAM TO COMPRESS A LARGE FILE
// The simplest way we have to fix our gzip application and make it work with big files
// is to use a streaming API. Let's see how this can be achieved; let's replace the contents
// of the module we just created with the following code:
// var fs = require('fs');
// var zlib = require('zlib');
// var file = process.argv[2];
// fs.createReadStream(file)
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream(file + '.gz'))
// .on('finish', function() {
// console.log('File successfully compressed');
// });