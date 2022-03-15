import axios from 'axios';
import * as cheerio from 'cheerio';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.get('/data', async (req, res, next) => {
  try {
    const URL = 'https://www.psx.com.pk/market-summary/';
    const articles = [];

    const response = await axios(URL);
    const html = response.data;
    const $ = cheerio.load(html);

    const eachI = $('.dataportal', html).each(function (item) {
      const title = $(this).text();

      articles.push({ title });
    });

    // console.log(html);
    res.json({
      total_Articles: articles.length,
      data: articles,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(9000, () => {
  console.log('server is running...');
});
