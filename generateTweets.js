var dataset = require('./tweetngrams.json');
var fs = require('fs');

var output = "";

// How Many?
var n = 10;

function chooseStart(){
    var done = false;
    while(!done){
        var word = Object.keys(dataset)[Math.floor(Math.random() * Object.keys(dataset).length)];
        if(word.slice(-1) != "." && word.slice(-1) != "\"" && word[0] === word[0].toUpperCase()){
            return word;
        }
    }
}

for(var t = 0; t < n; t++){
    var sentence = chooseStart();
    var currentWord = sentence;

    var finished = false;
    while(!finished){
        var nextWord  = "";
        // for(var i = 0; i < dataset.length; i++){
        //     if(dataset[i].word == currentWord){
        //         nextWord = dataset[i].followedBy[Math.floor(Math.random() * dataset[i].followedBy.length)]
        //     }
        // }
        console.log(currentWord);
        if(dataset[currentWord]){
            nextWord = dataset[currentWord][Math.floor(Math.random() * dataset[currentWord].length)];
            sentence += " " +nextWord;
            currentWord = currentWord.split(" ")[1] + " " + nextWord;
            if(currentWord.slice(-1) == "." || currentWord.slice(-1) == "!"){
                finished = true;
            }
        } else {
            finished = true;
        }
    }
    console.log(sentence);
    output += sentence+"\n";
}

fs.writeFile('3grams.txt', output, function(e){
    console.log("done");
});