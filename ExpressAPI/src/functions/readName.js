/*  Fatih a nin hazır attığı kısım
//////////////////////////////////////////////////////////////////////////
const fs = require("fs");
const util = require("util");

const readPromise = util.promisify(fs.readFile);

const FILE_PATH = "../names.json";

// Async fonksiyonu
async function readName() {
  //Bu fonksiyon çalıştığında  biz names.json sayfasındkaki veriyi JSON.parse ile objeye çevrilmiş birşekilde o veriyi promise olarak okuyan bir fonks yazmış oluyoruz
  // KISA YOL
  return JSON.parse(await readPromise(FILE_PATH)); //Json verisini obje de almamız için JSON.parse ile çevrime işlemini direk burda yapılmış

  // UZUN YOL
  // Buffer nesnesi donderiyor
  const names = await readPromise("../names.json");
  const namesJSON = JSON.parse(names);
  return namesJSON;
}
readName().then(data => {
  console.log(data);
});
module.exports = readName; //Bu modülü başka sayfalara aktarmak için module.exports yaparız

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
//Fatih a nin hazır attığı kısım
//////////////////////////////////////////////////////////////77

//Burası get işlemi için kullanabiliiriz
const fs = require("fs");
const util = require("util");

let keyPath = "./names.json";
let readPromise = util.promisify(fs.readFile);

async function readFile() {
  const data = await readPromise(keyPath);
  //console.log(JSON.parse(data));
  return JSON.parse(data);
}
/*
readFile().then(data => {
  console.log(data);
});  

*/
module.exports = readFile;
