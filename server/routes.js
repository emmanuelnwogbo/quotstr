import fs from 'fs';
import path from 'path';

//const filePath = path.join(__dirname, 'quotes.json');
const filePath2 = path.join(__dirname, 'quotes.js');
let quotes;

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

export default app => {
  app.get('/', (req, res) => {
    let results = [];
    fs.readFile(filePath2, {
      encoding: 'utf-8'
    }, (err, data) => {
      if (!err) {
        quotes = JSON.parse(data);
        quotes.forEach(quote => {
          if (Number(`${quotes.indexOf(quote)}`) <= Number(req.headers.limitend) &&
            Number(`${quotes.indexOf(quote)}`) >= Number(req.headers.limitstart)) {
            return results.push(quote);
          }
        });
        res.status(200).send({
          message: 'data sent',
          quotes: results
        });
      } else {
        console.log(err)
      }
    });
  })
}