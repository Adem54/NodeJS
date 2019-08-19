const express = require("express");
const app = express();
const fs = require("fs");

const keyPath = "data.json";
const {
  readFile,
  createFile,
  updateFile,
  deleteFile
} = require("./src/functions");
readFile().then(data => {
  console.log(data);
});

app.get("/", showData);
async function showData(request, response) {
  const data = await readFile();
  response.send(data);
}

app.get("/home", (request, response) => {
  response.send("Burası home ana sayfadır ");
});
app.post("/", async (request, response) => {
  const name = await createFile();
  let newItem = { id: 5, name: "Kamuran Serçe" };

  //let newName = name.splice(index, 1, newItem);
  //console.log("Newname:", newName);

  name.push(newItem);

  fs.writeFile("names.json", JSON.stringify(name), function(err, data) {
    if (err) throw err;
  });
  response.send(name);
});
app.post("/hakkimizda", (request, response) => {
  response.send("Burası da post gönderilen hakkimizda sayfasıdır");
});

app.put("/:id", async (request, response) => {
  const name = await updateFile();

  let id = request.params.id;
  name[id].name = "Selahattin Kaya";
  console.log("name:", name);

  fs.writeFile("names.json", JSON.stringify(name), function(err, data) {
    if (err) throw err;
  });
  response.send(name);
});

app.delete("/:id", deleteData);
async function deleteData(request, response) {
  const name = await deleteFile();
  //Normalde içerisinde 4 eleman var ama bu şekilde uzunluğunu belli bir sayıya eşitlersek o zaman fazla kalan elemanlar dizi içerisinden gider ve içerisinde artık 2 eleman kalır 2 eleman silinmiş olur bu şekilde
  let param = request.params;
  let id = param.id;
  console.log(param);
  name.splice(id, 1);
  // console.log(name);
  //fs.writeFile ile veriyi yazarken eğer json dosyasına veri yazacaksak verinin oraya JSON.stringify içerisinde gönderilmesi gerekir yoksa veri json dosyasına istediğimiz şekilde gitmeyecektir
  fs.writeFile("names.json", JSON.stringify(name), function(err, data) {
    if (err) throw err;
  });

  response.send(name); //Tekrar get yapınca silinmemiş halini getirir bu şekilde ondan dolayı dosya da değişiklik yapmak için name en son halini writeFile ile yazdıralım
}

app.listen(3327, () => {
  console.log("sunucumuz çalışıyor mu kontrol edelim");
});
