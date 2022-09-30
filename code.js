
// Question Number #2 Unique Characters

const uniqueChars = (str = '') => {
   for(let i = 0; i < str.length; i++){
      const el = str[i];
      if(str.indexOf(el) !== str.lastIndexOf(el)){
         return false;
      };
   };
   return true;
};
console.log(uniqueChars('moonday'));
// I think the runtime would be o(1) because it takes the worst case scenario. 
// The str.length could be < 5 meaning that the runtime is 0(1)

// Question Number #3 Pangram Sentence

function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "false";
     }
    }
   
   return "true";
 }
 console.log(pangrams('abcdefghijklmnopqrstuvwxyz'))

//  I think the runtime on this would be o(1) because it has to run through out the
// entire alphabet. which is more than five times.

// Question #4 Longest Word

function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = 0;

    for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
        longestWord = strSplit[i].length
    }
}
return longestWord
}

console.log(findLongestWord('the quick brown fox jumped over the lazy dog'))

// This would be o(n) because the worst case scenario could be < 5