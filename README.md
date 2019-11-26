# Using Markov Chains to guess Trump's next tweet.

## What are Markov Chains?

They basically allow us to use probability to determine what the next state of something will be. We can use all of Trump's old tweets to roughly determine what the next word he will say is. Unfortunately it isn't super accurate and doesn't exactly provide us with "natural language", but neither does Trump, so in this case it's fine.

This is an excellent visual example of how they work.. http://setosa.io/ev/markov-chains/.

## Info

`tweets.txt` holds more than 30,000 of his tweets going back to 2009. Sourced from http://trumptwitterarchive.com/.

`generatengrams.js` generates a set of ngrams(2) in the format of a markov chain. This is saved as `tweetngrams.json`.

`generateTweets.js` can be run with node to generate 10 tweets... `node generateTweets.js`.

And finally the webpage https://foopod.github.io/trump should allow you to just have fun generating till your heart is content.

Enjoy :D