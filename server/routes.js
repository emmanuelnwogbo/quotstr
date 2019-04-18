import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, 'quotes.json');
let quotes;

export default app => {
  app.get('/', (req, res) => {
    let num = 0;
    fs.readFile(filePath, {
      encoding: 'utf-8'
    }, (err, data) => {
      if (!err) {
        quotes = JSON.parse(data);
        quotes.map(quote => {
          num += 1;
          quote.id = num;
          return quote;
        });
        res.status(200).send({
          message: 'data sent',
          quotes
        });
      } else {
        console.log(err)
      }
    });
  })
}