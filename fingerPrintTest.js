function isMatch(fingerprintA, fingerprintB) {
  if (fingerprintA.length !== fingerprintB.length) return false;

  const len = fingerprintA.length;
  const allowed = Math.floor(len * 0.10); 
  let diff = 0;

  for (let i = 0; i < len; i++) {
    if (fingerprintA[i] !== fingerprintB[i]) {
      diff++;
      if (diff > allowed) return false; 
    }
  }

  return true;
}

// tests
console.log(isMatch("helloworld", "helloworld")); // true
console.log(isMatch("helloworld", "helloworlds")); // false (different length)
console.log(isMatch("helloworld", "jelloworld")); // true  (1 difference allowed)
console.log(isMatch(
  "thequickbrownfoxjumpsoverthelazydog",
  "thequickbrownfoxjumpsoverthelazydog"
)); // true
console.log(isMatch(
  "theslickbrownfoxjumpsoverthelazydog",
  "thequickbrownfoxjumpsoverthehazydog"
)); // depends on differences — function computes it
console.log(isMatch(
  "thequickbrownfoxjumpsoverthelazydog",
  "thequickbrownfoxjumpsoverthehazycat"
)); // likely false if differences > 10%

// Given two strings representing fingerprints, determine if they are a match using the following rules:

// Each fingerprint will consist only of lowercase letters (a-z).
// Two fingerprints are considered a match if:
// They are the same length.
// The number of differing characters does not exceed 10% of the fingerprint length.
