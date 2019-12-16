var fs = require('fs'),
readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('tweets.txt'),
    output: false,
    console: false
});

function isAllowed(word){
    if(word.includes("http")){
        return false;
    }
    if(word.includes("amp")){
        return false;
    }
    return true;
}

var dataset = {};

rd.on('line', function(line) {
    var words = line.split(" ");
    for(var i = 0; i <words.length-2; i++){
        var found = false;
        if(isAllowed(words[i]) && isAllowed(words[i+1]) && isAllowed(words[i+2])){
            words[i] = words[i].replace("'", '');
            words[i] = words[i].replace('"', '');
            words[i] = words[i].replace("”", '');
            if(words[i].startsWith(".")){
                words[i] = words[i].replace(".", '');
            }
            if(!(words[i].includes("(") && words[i].includes(")"))){
                words[i] = words[i].replace("(", '');
                words[i] = words[i].replace(")", '');
            }
            if(dataset[words[i] + " " + words[i+1]]){
                dataset[words[i] + " " + words[i+1]].push(words[i+2]);
                found = true;
            }
            if(!found){
                dataset[words[i] + " " + words[i+1]]=[words[i+2]];
            }
        }
    }
   
});

rd.on('close', function() {
    fs.writeFile('tweetngrams.json',JSON.stringify(dataset), function(e){
        console.log(e);
    });
});