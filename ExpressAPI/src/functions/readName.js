'use strict';

const fs = require('fs');
const util = require('util');

const readPromise = util.promisify(fs.readFile);

const FILE_PATH = '../names.json';

// Async fonksiyonu
async function readName() {
  // KISA YOL
  return JSON.parse(await readPromise(FILE_PATH));

  // UZUN YOL
  // Buffer nesnesi donderiyor
  const names = await readPromise('../names.json');
  const namesJSON = JSON.parse(names);
  return namesJSON;
}

module.exports = readName;

/**
 * readName fonksiyonu async eki aldigi icin diger bir modulde require ile import edildiginde names dizisini PROMISE olarak doner.
 * Diger modulde names dizisini kullanabilmek icin yine async-await veya then ile elde edebiliriz.
 * Ornegin:
 *    const readName = require('./readName');
 *    app.get('/', async function(request, response) {
 *        const names = await readName();
 *        response.json(names);
 *    }
 *
 * Yukaridaki ornegin kullanimini gormek icin app.js dosyasina bakabilirsiniz.
 */
