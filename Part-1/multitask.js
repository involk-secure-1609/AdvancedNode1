const https = require("https");
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();

function doRequest() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  // eventually the callback function of crypto is executed
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("hash:", Date.now() - start);
  });
}

doRequest();

fs.readFile("multitask.js", "utf-8", () => {
  console.log("FS:", Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
doHash();
doHash();
doHash();
doHash();
doHash();
doHash();
doHash();
doHash();
