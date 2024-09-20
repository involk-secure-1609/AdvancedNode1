process.stdin
  .on("readable", function () {
    var chunk;
    console.log("New data available");
    while ((chunk = process.stdin.read()) !== null) {
      console.log(
        "Chunk read: (" + chunk.length + ') "' + chunk.toString() + '"'
      );
    }
  })
  .on("end", function () {
    process.stdout.write("End of stream");
  });

  /*
The data is read exclusively from within the readable listener, which is invoked
as soon as new data is available. The read() method returns null when there is
no more data available in the internal buffers; in such a case, we have to wait for
another readable event to be fired - telling us that we can read again - or wait for
the end event that signals the end of the stream. When a stream is working in binary
mode, we can also specify that we are interested in reading a specific amount of
data by passing a size value to the read() method. This is particularly useful when
implementing network protocols or when parsing specific data formats.
  */