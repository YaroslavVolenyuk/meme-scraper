import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';
import axios from 'axios';
import cheerio from 'cheerio';

const url = 'https://' + process.argv[2];

// DOWNLOAD images and save them to the folder
function saveToDisk(imageUrlFromArray, indexOfImages) {
  const localPath = fs.createWriteStream(
    path.join(
      '/Users/yaroslav/projects/meme_scraper/memes/',
      indexOfImages.padStart(2, '0') + '.jpg',
    ),
  );

  https.get(imageUrlFromArray, function (response) {
    response.pipe(localPath);
  });
}

let images;

// get html and go through to find id 'images' and get array consist of  urls
axios
  .get(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const imagesSection = $('section').filter('#images');
    images = imagesSection
      .find('img')
      .map((i, img) => $(img).attr('src'))
      .get()
      .slice(0, 10);
    console.log(images);

    for (let i = 0; i <= images.length - 1; i++) {
      saveToDisk(images[i], String(i + 1));
    }
  })
  .catch((error) => {
    console.log(error);
  });
