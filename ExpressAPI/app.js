'use strict';

const Express = require('express');
const app = new Express();

// Eger functions klasorundeki tum modulleri `index` dosyasindan export edersek bu sekilde hepsini kolayca elde edebiliriz
const { readName, createName, deleteName, updateName } = require('./src/functions'); // './src/functions/index' yazmaya gerek yok

// Asagidaki kod otomatik olarak JSON nesnesini parse eder.
// Bu tur app.use(...) kullanimina middleware diyoruz. Express middleware konusu arastirilabilir
app.use(Express.json());

// Callback fonksiyonunu async olusturuyorum ki iceride await ile promis fonksiyondan veriyi direkt elde edebilelim.
app.get('/', async (request, response) => {
  const names = await readName();
  response.json(names);
});

app.post('/', (request, response) => {
  // createName();
});

app.put('/:id', (request, response) => {
  // updateName();
});

app.delete('/:id', (request, response) => {
  // deleteName();
});

app.listen(3300, error => {
  if (error) return console.error(error);

  console.log(`Server started on http://localhost:3300`);
});
