const fs = require("fs");
const axios = require("axios");

function cat(input){
    if(input.startsWith("http")){
        webCat(input)
    } else {
        fs.readFile(input, "utf8", function(error, data){
            if (error) {
                console.log(error);
                process.exit(1);
            }
            console.log(`Here is some data: ${data}`)
        }) 
    } 
};

async function webCat(url){
    try {
        let urlResponse = await axios.get(url);
        console.log(urlResponse.data); 
    }
    catch(error){
        console.log(error);
    }
}


module.exports = cat