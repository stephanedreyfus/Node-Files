const fs = require("fs");
const acios = require("axios");

function cat(path){
    fs.readFile(path, "utf8", function(error, data){
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log(`Here is some data: ${data}`)
    })
};

// Node command lines:
// > const cat = require("./step1")

// > cat("./one.txt")

async function webCat(url){
    let urlResponse = await axios.get(url);
    console.log(urlResponse.data);
}


module.exports = {
    cat,
    webCat
}