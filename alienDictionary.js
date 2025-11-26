// output 1

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const ref = {};
  for (let i = 0; i < order.length; i++) ref[order[i]] = i;

  // compare each adjacent pair; stop at words.length - 1 so words[i+1] exists
  for (let i = 0; i < words.length - 1; i++) {
    const a = words[i];
    const b = words[i + 1];
    let j = 0;

    // compare characters while both strings have characters left
    while (j < a.length && j < b.length) {
      const ra = ref[a[j]];
      const rb = ref[b[j]];
      if (ra < rb) {
        // a < b for this pair — pair is ordered correctly; check next pair
        break;
      }
      if (ra > rb) {
        // a > b -> not sorted
        return false;
      }
      j++;
    }

    // if we exhausted b but a is longer, then a > b (e.g. "apple" vs "app")
    if (j === b.length && a.length > b.length) return false;
  }

  return true;
};


// output 2

var isAlienSorted = function(words, order) {
    const ref = {};
    
    for(let i = 0; i<order.length; i++){
        ref[order[i]] = i;
    }
    
    for(let i = 0; i < words.length; i++){
        const currWords = words[i];
        const nextWords = words[i + 1]
        
        
        for(let j = 0; j < words[i].length; j++){
            const curr = currWords[j]
            const next = nextWords[j];
            
           
            
            if(next === undefined) return false;
            
            if(ref[curr] < ref[next] ) return true;
            
            if( ref[curr] === ref[next]) continue
            else if(ref[curr] > ref[next]) return false
        }
    }
    
    // console.log(ref);
    
    
    return true;
};


console.log(isAlienSorted(["hello","leetcode"],"hlabcdefgijkmnopqrstuvwxyz"));

console.log(
    isAlienSorted(
        ["word","world","row"],
        "worldabcefghijkmnpqstuvxyz"
        )
    )
    
console.log(
    isAlienSorted(
        ["apple","app"],
        "abcdefghijklmnopqrstuvwxyz"
        )
    )
    
console.log(
    isAlienSorted(
        ["fxasxpc","dfbdrifhp","nwzgs","cmwqriv","ebulyfyve","miracx","sxckdwzv","dtijzluhts","wwbmnge","qmjwymmyox"],
        "zkgwaverfimqxbnctdplsjyohu"
        )
    )
