"use strict";

axios.get("http://localhost:8080").then(function (res) {
  console.log(res);
})["catch"](function (err) {
  console.log(err);
});