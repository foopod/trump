var dataset = require('./tweetngrams.json');


// How Many?
var n = 10;

function chooseStart(){
    var done = false;
    while(!done){
        var word = dataset[Math.floor(Math.random() * dataset.length)].word;
        if(word.slice(-1) != "." && word.slice(-1) != "\""){
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
        for(var i = 0; i < dataset.length; i++){
            if(dataset[i].word == currentWord){
                nextWord = dataset[i].followedBy[Math.floor(Math.random() * dataset[i].followedBy.length)]
            }
        }
        sentence += " " +nextWord;
        currentWord = nextWord;
        if(currentWord.slice(-1) == "." || currentWord.slice(-1) == "!"){
            finished = true;
        }
    }
    console.log(sentence);
}