const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let str = expr.match(/.{1,10}/g);
  
  let arr = str.map((i) => {
    i = i.replace(/^0+/, "").match(/.{1,2}/g)
    let tempArr = i.map((item) => {
      if (item == '10' ) {
        item = '.';
      } else if (item == '11') {
        item = '-';
      } else if (item == '**') {
        item = ' ';
      }
      return item;
    });
    return tempArr.join('');
  });
  
  let result = arr.map((i) => {
      for (let [key, value] of Object.entries(MORSE_TABLE)) {
        if (i == key) {
          return i = value;
        } 
      }
      return i.replace(/\s+/g, ' ');
  });

  return result.join('')
}

module.exports = {
    decode
}