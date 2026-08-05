const fs = require('fs');
const path = 'index.html';
const text = fs.readFileSync(path, 'utf8');
const count = (re) => {
  const m = text.match(re);
  return m ? m.length : 0;
};
console.log('div_open', count(/<div\b/g));
console.log('div_close', count(/<\/div>/g));
console.log('section_open', count(/<section\b/g));
console.log('section_close', count(/<\/section>/g));
console.log('main_open', count(/<main\b/g));
console.log('main_close', count(/<\/main>/g));
console.log('script_open', count(/<script\b/g));
console.log('script_close', count(/<\/script>/g));
console.log('comment_open', count(/<!--/g));
console.log('comment_close', count(/-->/g));
console.log('---TAIL---');
console.log(text.slice(-500));
