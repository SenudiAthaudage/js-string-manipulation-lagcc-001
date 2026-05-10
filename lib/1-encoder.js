'use strict';

var encoder = function(phrase){
  //Step 1
  let encoded = phrase.replace(/e/g, "3")
                  .replace(/g/g, "8")
                  .replace(/s/g, "5")
                  .replace(/b/g, "6");
  //Step 2
  encoded = encoded.replace(/ /g, "$");

  //Step 3
  encoded = encoded.split("").reverse().join("");

  return encoded;
};

module.exports = encoder;
