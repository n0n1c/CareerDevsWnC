var quotes = [
      "\"I pretended to be somebody I wanted to be until finally I became that person. Or he became me. -Cary Grant\"",
      "\"Your preparation for the real world is not in the answers you’ve learned, but in the questions you’ve learned how to ask yourself. -Bill Watterson\"",
      "\"Imagination is more important than knowledge. For knowledge is limited to all we now know and understand, while imagination embraces the entire world, and all there ever will be to know and understand. -Albert Einstein\"",
      "\"Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth. -Sherlock Holmes\""
      ]
  function newQuote() {
      var randomNumber = Math.floor(Math.random() * (quotes.length));
      document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  };

  function tweetQuote() {
    window.open('https://twitter.com/intent/tweet?text=' + document.getElementById('quoteDisplay').innerHTML);
  };
