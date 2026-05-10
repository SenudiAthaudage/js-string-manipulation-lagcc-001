'use strict';

var decoder = function(encoded){
  let decoded = encoded.split("").reverse().join("");

  decoded = decoded.replace(/\$/g, " ");

  decoded = decoded.replace(/3/g, "e")
                  .replace(/8/g, "g")
                  .replace(/5/g, "s")
                  .replace(/6/g, "b");

  return decoded;
};

module.exports = decoder;

