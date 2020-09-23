const fs = require('fs')
const stream = fs.createWriteStream('./big_file.txt')

for (let i=0; i<1000000; i++) {
  stream.write(`这是第${i}行内容，我们需要很多内容，需要要不停滴写写写啊啊啊啊啊~~~嗝嗝嗝嗝嗝\n`)
}

stream.end()
console.log('done')
