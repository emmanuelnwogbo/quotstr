import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import Routes from "./routes"

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

Routes(app);

const PORT = process.env.PORT || 8080

app.listen(PORT, error => {
  if (error) {
    return console.log(error)
  }

  return console.log(`server started on port ${PORT}`)
});