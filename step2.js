const fs = require("fs")

function cat(path){
    fs.readFile(path, "utf8", function(error, data){
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log(`Here is some data: ${data}`)
    })
}

module.exports = cat;

// Node command lines:
// > const cat = require("./step1")

// > cat("./one.txt")