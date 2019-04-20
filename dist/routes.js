Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

//const filePath = path.join(__dirname, 'quotes.json');
var filePath2 = _path["default"].join(__dirname, 'quotes.js');

var quotes;
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

var _default = function _default(app) {
  app.get('/', function (req, res) {
    var results = [];

    _fs["default"].readFile(filePath2, {
      encoding: 'utf-8'
    }, function (err, data) {
      if (!err) {
        quotes = JSON.parse(data);
        quotes.forEach(function (quote) {
          if (Number("".concat(quotes.indexOf(quote))) <= Number(req.headers.limitend) && Number("".concat(quotes.indexOf(quote))) >= Number(req.headers.limitstart)) {
            return results.push(quote);
          }
        });
        res.status(200).send({
          message: 'data sent',
          quotes: results
        });
      } else {
        console.log(err);
      }
    });
  });
};

exports["default"] = _default;