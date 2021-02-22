/*
Script written with ❤ by @fotiecodes
Twitter: @fotie_codes
Github: https://github.com/FotieMConstant/
Hope this script helps anyone in need!
*/

const fs = require('fs')
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("Hi, Welcome to vue-pather script: Please make sure you are in the 'dist' directory before you run the script!")
rl.question("Please provide file name(index.html): ", function(FileName) {
        path = require('path'),    
        filePath = path.join(__dirname, FileName); // asigning the file name user entered as path
        console.log("Working on your file ⌛");
        // reading the file
        fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
            if (!err) {
                // store modified data
                // modifying each and every line that matches with the new path
                let newData = data.replace( new RegExp("/favicon.ico","g"), "./favicon.ico");
                    newData = newData.replace(new RegExp("/css/app","g"),"./css/app");
                    newData = newData.replace(new RegExp("/css/chunk-vendors","g"),"./css/chunk-vendors");
                    newData = newData.replace( new RegExp("/js/app","g"),"./js/app");
                    newData = newData.replace(new RegExp("/js/chunk-vendors","g"),"./js/chunk-vendors");

                    // checking if the file exists
                    if (fs.existsSync(FileName)) {
                        fs.unlinkSync(FileName); // remove file first
                    }
                
                fs.appendFile(FileName, newData, err => {
                    if (err) {
                      console.error(err)
                      return
                    }
                    // done
                    console.log("✨All good, done updating file! 👍")
                  })
               
                // console.log('received data: ' + String(newData));
                // response.writeHead(200, {'Content-Type': 'text/html'});
                // response.write(data);
                // response.end();
            } else {
                console.log(err);
            }
        });

        rl.close();
});

    



// fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })