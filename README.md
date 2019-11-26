# Using Markov Chains to guess Trump's next tweet.

`tweets.txt` is holds more than 30,000 of his tweets going back to 2009. Sourced from http://trumptwitterarchive.com/.

`generatengrams.js` generates a set of ngrams(2) in the format of a markov chain. This is saved as `tweetngrams.json`.

`generateTweets.js` can be run with node to generate 10 tweets... `node generateTweets.js`.

And finally the webpage https://foopod.github.io/trump should allow you to just have fun generating till your heart is content.

Enjoy :D