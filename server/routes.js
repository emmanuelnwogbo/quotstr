import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, 'quotes.json');
const filePath1 = path.join(__dirname, 'quotes1.json');
const filePath2 = path.join(__dirname, 'quotes2.json');
const filePath3 = path.join(__dirname, 'quotes3.json');
const filePath4 = path.join(__dirname, 'quotes4.json');
const filePath5 = path.join(__dirname, 'quotes5.json');
//const filepathJson = path.join(__dirname, 'quotes5.json');

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
    return fs.readFile(filePath1, {
      encoding: 'utf-8'
    }, (err, data) => {
      let quotes = JSON.parse(data);
      console.log(quotes)
      if (!err) {
        return res.status(200).send({
          message: 'data received',
          dataLength: quotes.length,
          quotes
        })
      }
      return console.log(err)
    })
  }

  if (limit >= 21 && limit <= 40) {
    return fs.readFile(filePath2, {
      encoding: 'utf-8'
    }, (err, data) => {
      let quotes = JSON.parse(data);
      if (!err) {
        return res.status(200).send({
          message: 'data received',
          dataLength: quotes.length,
          quotes
        })
      }
      return console.log(err)
    })
  }

  if (limit >= 41 && limit <= 60) {
    return fs.readFile(filePath3, {
      encoding: 'utf-8'
    }, (err, data) => {
      let quotes = JSON.parse(data);
      if (!err) {
        return res.status(200).send({
          message: 'data received',
          dataLength: quotes.length,
          quotes
        })
      }
      return console.log(err)
    })
  }

  if (limit >= 61 && limit <= 80) {
    return fs.readFile(filePath4, {
      encoding: 'utf-8'
    }, (err, data) => {
      let quotes = JSON.parse(data);
      if (!err) {
        return res.status(200).send({
          message: 'data received',
          dataLength: quotes.length,
          quotes
        })
      }
      return console.log(err)
    })
  }

  if (limit >= 81 && limit <= 100) {
    return fs.readFile(filePath5, {
      encoding: 'utf-8'
    }, (err, data) => {
      let quotes = JSON.parse(data);
      if (!err) {
        return res.status(200).send({
          message: 'data received',
          dataLength: quotes.length,
          quotes
        })
      }
      return console.log(err)
    })
  }
}

export default app => {
  app.get('/', (req, res) => {
    if (req.headers.limitend) {
      let { limitend } = req.headers
      return sendQuotes(limitend, res)
    }
    else {
      res.status(200).send({
        message: 'Welcome. Hello from quotes api',
      })
    }
  })
}