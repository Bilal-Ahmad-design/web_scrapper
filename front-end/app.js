const summary = document.querySelector('.summary');
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
console.log(cors);

//

(async function () {
  const url = `http://127.0.0.1:9000/data`;
  const data = await fetch(url);

  console.log(data);
})();
