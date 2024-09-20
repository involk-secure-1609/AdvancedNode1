var chance = require("chance").Chance();
require("http")
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    function generateMore() {
      //[1]
      while (chance.bool({ likelihood: 95 })) {
        var shouldContinue = res.write(
          chance.string({ length: 16 * 1024 - 1 })
        );
        if (!shouldContinue) {
          //[3]
          console.log("Backpressure");
          return res.once("drain", generateMore);
        }
      }
      res.end("\nThe end...\n", function () {
        console.log("All data was sent");
      });
    }
    generateMore();
  })
  .listen(8081, function () {
    console.log("Listening");
  });


  // Similar to a liquid flowing in a real piping system, Node.js streams can also suffer
// from bottlenecks, where data is written faster than the stream can consume it.
// The mechanism to cope with this problem consists of buffering the incoming data;
// however, if the stream doesn't give any feedback to the writer, we might incur a
// situation where more and more data is accumulated into the internal buffer, leading
// to undesired levels of memory usage.

// To prevent this from happening, writable.write() will return false when
// the internal buffer exceeds the highWaterMark limit. The Writable streams have
// a highWaterMark property, which is the limit of the internal buffer size beyond
// which the write() method starts returning false, indicating that the application
// should now stop writing. When the buffer is emptied, the drain event is emitted,
// communicating that it's safe to start writing again.
// This mechanism is called back-pressure.

