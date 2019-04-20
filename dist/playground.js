"use strict";

axios.get("http://localhost:8080").then(function (res) {
  console.log(res);
})["catch"](function (err) {
  console.log(err);
});

var fs = require('fs');

fs.writeFile("/tmp/test", "Hey there!", function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});
fs.readFile(filePath, {
  encoding: 'utf-8'
}, function (err, data) {
  if (!err) {
    quotes = JSON.parse(data);
    quotes.map(function (quote) {
      num += 1;
      quote.id = num;
      return quote;
    });
    fs.writeFile(filePath2, {
      encoding: 'utf-8'
    }, function (err, data) {
      if (!err) {
        return console.log('file saved', data);
      }

      return console.log(err);
    });
  }
});