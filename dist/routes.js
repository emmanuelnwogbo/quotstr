"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var filePath = _path["default"].join(__dirname, 'quotes.json');

var filePath1 = _path["default"].join(__dirname, 'quotes.js');

var filePath2 = _path["default"].join(__dirname, 'quotes2.js');

var filePath3 = _path["default"].join(__dirname, 'quotes3.js');

var filePath4 = _path["default"].join(__dirname, 'quotes4.js');

var filePath5 = _path["default"].join(__dirname, 'quotes5.js');
/*fs.readFile(filePath, {
  encoding: 'utf-8'
}, (err, data) => {
  if (!err) {
    let num = 0;
    quotes = JSON.parse(data);
    const results = quotes.map(quote => {
      num += 1;
      quote.id = num;
      return quote;
    });
    console.log(results)
    fs.writeFile(filePath2, JSON.stringify(results), (err) => {
      if (!err) {
        return console.log('file saved')
      }
      return console.log(err)
    })
  }
})*/


function sendQuotes(limit, res) {
  if (limit <= 20) {
    return _fs["default"].readFile(filePath1, {
      encoding: 'utf-8'
    }, function (err, data) {
      var quotes = JSON.parse(data);

      if (!err) {
        return res.status(200).send({
          message: 'data received',
          dataLength: quotes.length,
          quotes: quotes
        });
      }

      return console.log(err);
    });
  }

  if (limit >= 21 && limit <= 40) {
    return _fs["default"].readFile(filePath2, {
      encoding: 'utf-8'
    }, function (err, data) {
      var quotes = JSON.parse(data);

      if (!err) {
        return res.status(200).send({
          message: 'data received',
          dataLength: quotes.length,
          quotes: quotes
        });
      }

      return console.log(err);
    });
  }

  if (limit >= 41 && limit <= 60) {
    return _fs["default"].readFile(filePath3, {
      encoding: 'utf-8'
    }, function (err, data) {
      var quotes = JSON.parse(data);

      if (!err) {
        return res.status(200).send({
          message: 'data received',
          dataLength: quotes.length,
          quotes: quotes
        });
      }

      return console.log(err);
    });
  }

  if (limit >= 61 && limit <= 80) {
    return _fs["default"].readFile(filePath4, {
      encoding: 'utf-8'
    }, function (err, data) {
      var quotes = JSON.parse(data);

      if (!err) {
        return res.status(200).send({
          message: 'data received',
          dataLength: quotes.length,
          quotes: quotes
        });
      }

      return console.log(err);
    });
  }

  if (limit >= 81 && limit <= 100) {
    return _fs["default"].readFile(filePath5, {
      encoding: 'utf-8'
    }, function (err, data) {
      var quotes = JSON.parse(data);

      if (!err) {
        return res.status(200).send({
          message: 'data received',
          dataLength: quotes.length,
          quotes: quotes
        });
      }

      return console.log(err);
    });
  }
}

var _default = function _default(app) {
  app.get('/', function (req, res) {
    if (req.headers.limitend) {
      var limitend = req.headers.limitend;
      return sendQuotes(limitend, res);
    } else {
      res.status(200).send({
        message: 'Welcome. Hello from quotes api'
      });
    }
  });
};

exports["default"] = _default;