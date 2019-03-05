const fs = require("fs");
const axios = require("axios");

async function cat(argv){
    let input
    let path

    // what args do we have?
    if(argv.length < 5){
        input = argv[2]
    }else {
        input = "./" + argv[4]
        path = argv[3]
    }

    // get the data
    let output;
    if(input.startsWith("http")){
        output = await webCat(input)

        print(output, path)
    } else {
        fs.readFile(input, "utf8", function(error, data){
            if (error) {
                console.log(error);
                process.exit(1);
            }
            output = data

            print(output, path)
        }) 
    } 
    
};

function print(output, path=null){
    // how should we output?
    if(path){
        console.log("outpt", output)
        fs.writeFile(path, output, function(error){
            if (error) {
                console.log(error);
                process.exit(1);
            }
        });
    }else {
        console.log(output)   
    }
}

async function webCat(url){
    try {
        return await axios.get(url);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}


cat(process.argv)