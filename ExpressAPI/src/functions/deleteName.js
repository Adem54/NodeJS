const fs = require("fs");
const util = require("util");

let keyPath = "./names.json";
let deleteFilePro = util.promisify(fs.readFile);
/*
fs.writeFile(
  keyPath,
  "",
  function(err, data) {
    if (err) throw err;
  }
);
*/

let deleteFile = async function() {
  let data = await deleteFilePro(keyPath);
  return JSON.parse(data);
};
/* Veriyi dışarda görütnülemek için then ile çıkartmamız gerekir promise veri olduğu için ama içerde console yaparsak o şekildde de görüntüleyebilriz
writeFile().then(data => {
  console.log(data);
});
*/
module.exports = deleteFile;
