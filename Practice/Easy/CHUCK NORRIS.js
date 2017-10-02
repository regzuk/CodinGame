print(readline().split('')
.map(c => '0'.concat(c.charCodeAt(0).toString(2)).slice(-7))
.join('')
.match(/(.)\1*/g)
.map(x => (x[0] === '1' ? '0 ' : '00 ') + '0'.repeat(x.length))
.join(' '));
