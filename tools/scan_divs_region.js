const fs = require('fs');
const text = fs.readFileSync('index.html', 'utf8');
const start = 13800; const end = 14100;
const region = text.slice(start,end);
console.log('---REGION---');
console.log(region);
console.log('---TAGS SEQUENCE---');
const regex = /<\/?div\b/g;
let m;
while ((m = regex.exec(region)) !== null) {
  const tag = m[0];
  console.log(tag, 'at', start + m.index, 'context:', region.slice(Math.max(0,m.index-40), m.index+40).replace(/\n/g,'\\n'));
}
