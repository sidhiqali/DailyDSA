/*
 * @lc app=leetcode id=2114 lang=javascript
 *
 * [2114] Maximum Number of Words Found in Sentences
 */

// @lc code=start
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {  
  let maxWord = sentences.reduce((max, sentence) => { 
  const wordCount = sentence.split(" ").length;
  return Math.max(max, wordCount);
}, 0);

    return maxWord;
};


// @lc code=end

