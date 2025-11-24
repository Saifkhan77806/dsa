function countCharacters(str) {
  // 1. Remove "// TODO:" prefix
  let cleaned = str.replace(/^\s*\/\/\s*:\s*/i, '');

  // 2. Remove ALL spaces
  cleaned = cleaned.replace(/\s+/g, '');

  // 3. Convert to lowercase
  cleaned = cleaned.toLowerCase();

  // 4. Count characters (letters only)
  const counts = {};

  for (const char of cleaned) {
    if (/[a-z]/.test(char)) {     // only count letters
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  // 5. Sort by letter and format output
  return Object.keys(counts)
    .sort()
    .map(key => `${key} ${counts[key]}`);
}

// Example:
console.log(countCharacters("// TODO: Complete this challenge ASAP!"));
