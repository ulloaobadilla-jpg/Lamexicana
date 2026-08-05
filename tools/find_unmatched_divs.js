const fs = require('fs');
const text = fs.readFileSync('index.html', 'utf8');
const regex = /<\/?div\b/ig;
const stack = [];
let m;
while ((m = regex.exec(text)) !== null) {
  const tag = m[0];
  const idx = m.index;
  if (tag.startsWith('</')) {
    if (stack.length) stack.pop();
    else console.log('Unmatched closing </div> at', idx);
  } else {
    stack.push(idx);
  }
}
if (stack.length === 0) {
  console.log('All divs matched');
} else {
  console.log('Unmatched opening <div> count:', stack.length);
  stack.forEach((pos, i) => {
    const before = text.slice(Math.max(0,pos-200), pos+200);
    const linesBefore = text.slice(0,pos).split('\n').length;
    console.log(`-- Unmatched #${i+1} at index ${pos} (approx line ${linesBefore}) --`);
    console.log(before);
  });
}
