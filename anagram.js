function formatStr(str) {
  return str.toLowerCase()
    .split('')
    .filter(x => x.match(/[a-z1-9_]/))
    .sort()
    .join('');
  /*
    // Brad's solution
    .replace(/[^\w]/g, '')
    .split('')
    .sort()
    .join('');
     */
}

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

module.exports = isAnagram;
