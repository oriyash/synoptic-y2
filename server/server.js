var http=require('http');
const express=require('express');
const fileUpload = require('express-fileupload');
const router=express.Router();
var Busboy=require('busboy');
var path=require('path');
var app=express();
let fs = require('fs');
app.use(fileUpload({createParentPath: true,}));
app.get('/',function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="imageupload" method="post" enctype="multipart/form-data">');
  res.write('<label Upload image </label>');
  res.write('<input type="file"  name="imageupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
 
})

app.post('/imageupload',function(req, res){
  if (!req.files) {
    return res.status(400).send("No files were uploaded.");
  }
  const file = req.files.imageupload;
  const path = __dirname + "/files/" + file.name;

  file.mv(path, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.send({ status: "success", path: path });
  });
  //var busboy=Busboy({headers:req.headers});
  //busboy.on('file', function(image,file,images, encoding, mimetype){
  //var saveTo=path.join('./uploads/'+images);
  //file.pipe(fs.createWriteSream(saveTo));
// })
 // busboy.on('finish', function(){
 // res.sendFile(saveTo);
 //})
 //return req.pipe(busboy);
})
app.listen(3000, function(){
 console.log("running on port 3000");
})