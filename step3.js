const fs = require("fs");
const axios = require("axios");

// Print helper function.
function print(output, path=null){
    if(path){
        console.log("output", output)
        fs.writeFile(path, output, function(error){
            if (error) {
                console.log(error);
                process.exit(1);
            }
        });
    } else {
        console.log(output)   
    }
}

// Get data from website function.
async function webCat(url){
    try {
        return await axios.get(url);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

// Main function of cat.
async function cat(argv){
    let input;
    let path;

    // Is this an --out command or not?
    if(argv.length < 5){
        input = argv[2]
    }else {
        // If not then we have to decide it if's html or not.
        if (argv[4].startsWith("http")){
            input = argv[4];
        } else {
            input = "./" + argv[4]
        }
        path = argv[3]
    }

    // get the data
    let output;
    if(input.startsWith("http")){
        resp = await webCat(input)
        output = resp.data

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



cat(process.argv)