#! /usr/bin/env node
const path =  require('path');
const fs = require('fs');
const tinify = require('tinify');
const config = {
  tinypngkey:'G7rQfgXJjGWPlkcJL6sGbLQKv4M8xHJG'
};
// const imagemin = require('imagemin');
// const imageminWebp = require('imagemin-webp');
const chalk = require('chalk');
if(config.tinypngkey === ''){
  console.log(chalk.red('请在package.json 文件配置tinypng的key，如果没有key，请前往【https://tinypng.com/developers】申请'));
  return;
}
tinify.key = config.tinypngkey;
const filePath = './src/assets/img';
const files = fs.readdirSync(filePath);
const reg = /\.(jpg|png)$/;
const webp = require('webp-converter');
console.log(chalk.yellow('上传TinyPNG中...'));
async function compress(){
  for(let file of files){
    let stats = fs.statSync(path.join(filePath,file));
    if(!stats.isDirectory() && reg.test(file)){
      let filePathin = path.join(filePath,file);
      let filePathouput = filePathin.replace(/.png/,'.webp');
      console.log(chalk.red(path.join(filePath,file)));
      webp.cwebp(filePathin,filePathouput,'-q 80',function(status,error)
      {
        //if conversion successful status will be '100'
        //if conversion fails status will be '101'
        console.log(status,error);
      });
    }
  }
  // for(let file of files){
  //   let filePathAll = path.join(filePath,file);
  //   let stats = fs.statSync(path.join(filePath,file));
  //   if(!stats.isDirectory() && reg.test(file)){
  //     await new Promise((resolve,reject)=>{
  //       fs.readFile(filePathAll,(err,sourceData)=>{
  //         if(err){
  //           console.log(chalk.red(`${file} 压缩失败`));
  //           reject(err);
  //         }else{
  //           let fileSize = fs.statSync(filePathAll).size;

  //           tinify.fromBuffer(sourceData).toBuffer((err,resultData)=>{
  //             if(err){
  //               console.log(chalk.red(`${file} 压缩失败`));
  //               reject(err);
  //             }
  //             //将压缩后的文件保存覆盖
  //             fs.writeFile(filePathAll,resultData,err=>{
  //               let compressFileSize = fs.statSync(filePathAll).size;
  //               console.log(chalk.green(`${file} ${(fileSize / 1024).toFixed(2)}kb 压缩成功 ${(compressFileSize / 1024).toFixed(2)}kb ${((compressFileSize - fileSize) * 100 / fileSize).toFixed(1)}%`));
  //               resolve();
  //             });
  //           });

  //         }

  //       });
  //     });


  //   }
  // }

  // imagemin(['./src/assets/img/*.{jpg,png}'],'./src/assets/img/webp/',{
  //   use:[
  //     imageminWebp()
  //   ]
  // }).then(()=>{
  //   console.log(chalk.green('webp转换已完成～'));
  //   for(let file of files){
  //     let stats = fs.statSync(path.join(filePath,file));
  //     if(!stats.isDirectory() && reg.test(file)){
  //       let filePathin = path.join(filePath,file);
  //       let filePathouput = filePathin.replace(/.png/,'.webp');
  //       console.log(chalk.red(path.join(filePath,file)));
  //       webp.cwebp(filePathin,filePathouput,'-q 80',function(status,error)
  //       {
  //         //if conversion successful status will be '100'
  //         //if conversion fails status will be '101'
  //         console.log(status,error);
  //       });
  //     }
  //   }
  // });
  //   imagemin(['./src/assets/img/*.{jpg,png}'], 'src/assets/img/webp', {
  //     use: [imageminWebp({ quality: 50 })]
  //   }).then(() => {
  //     console.log('Images optimized');
  //   });


}

compress();

