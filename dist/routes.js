"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var filePath = _path["default"].join(__dirname, 'quotes.json');

var quotes;

var _default = function _default(app) {
  app.get('/', function (req, res) {
    var num = 0;

    _fs["default"].readFile(filePath, {
      encoding: 'utf-8'
    }, function (err, data) {
      if (!err) {
        quotes = JSON.parse(data);
        quotes.map(function (quote) {
          num += 1;
          quote.id = num;
          return quote;
        });
        res.status(200).send({
          message: 'data sent',
          quotes: quotes
        });
      } else {
        console.log(err);
      }
    });
  });
};

exports["default"] = _default;