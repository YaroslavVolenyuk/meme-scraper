import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';
import axios from 'axios';
import cheerio from 'cheerio';
import Jimp from 'jimp';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

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

// bender meme: https://make-memes.com/images/memes/bender.jpg

/*


const benderMemne = async function () {
  const image = await Jimp.read(
    'https://make-memes.com/images/memes/bender.jpg',
  );
  const font = await Jimp.loadFont(Jimp.FONT_SANS_10_WHITE);
  image.print(font, 0, 0, 'Karl');
  image.write('memes/');
};

await benderMemne();



const fileName = 'bender.jpg';
const imageCaption = 'Hello Karl';
let loadedImage;

Jimp.read(fileName)
  .then(function (image) {
    loadedImage = image;
    return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  })
  .then(function (font) {
    loadedImage.print(font, 10, 10, imageCaption).write(fileName);
  })
  .catch(function (err) {
    console.error(err);
  });


  */
