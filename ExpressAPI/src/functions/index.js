"use strict";
//Anladığım kadarıyla biz burda önce diğer sayflarda oluşturduğumuz  fonksiyonları alıyoruz daha sonra burdan da export ediyoruz ve fonksiyonların hepsini ayrı ayrı almak yerine direk hepsini bu sayfadan alınmasını sağlıyoruz yani aslında bu sayfa bir nevi ara geçiş sayfası rolü üstleniyor

// // 1. YOL

// const createName = require('./createName');
// const deleteName = require('./deleteName');
// const readName = require('./readName');
// const updateName = require('./updateName');

// module.exports = { createName, deleteName, readName, updateName };

/////////////////////////////////////////////
//Burda index.js bir geçiş güzergahı gibi kullanılmış yani 4 tane ayrı dosyadan buraya import edilip burdan da ana dosyaya export edilmiş yani tabiri caizse burda birleştirilip app.js de tek seferde alınması sağlanmış
// 2. YOL (KISA YOL)
module.exports = {
  createFile: require("./createName"),
  deleteFile: require("./deleteName"),
  readFile: require("./readName"),
  updateFile: require("./updateName")
};
