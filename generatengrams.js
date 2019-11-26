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

var dataset = [];
var data = {"followedBy": []};

rd.on('line', function(line) {
    var words = line.split(" ");
    for(var i = 0; i <words.length-1; i++){
        var found = false;
        if(isAllowed(words[i])){
            for(var j = 0; j < dataset.length; j++){
                if(dataset[j].word == words[i]){
                    dataset[j].followedBy.push(words[i+1]);
                    // console.log("old word");
                    found = true;
                }
            }
            if(!found){
                dataset.push({"word": words[i], "followedBy": [words[i+1]]});
                // console.log("new word");
            }
        }
    }
});

rd.on('close', function() {
    fs.writeFile('tweetngrams.json', JSON.stringify(dataset), function(e){
        console.log("done");
    });
});