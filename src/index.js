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
    // write your solution here
    const NEW_MORSE_TABLE = {
        '**********': " "
    };
    for (let prop in MORSE_TABLE) {
        let x = [];
        for (let char of prop) {
            if (char == '.') {
                x.push(10);    
            } else {
                x.push(11);
            }
        }
        let keyLetter = x.join('').padStart(10, '0');
        NEW_MORSE_TABLE[keyLetter] = MORSE_TABLE[prop];
    }

    if (expr.length%10 == 0) {
        let arrDecodedLatter = [];
        let exprLength = expr.length/10;
        for (let i = 0; i < exprLength; i++) {
            arrDecodedLatter.push(NEW_MORSE_TABLE[expr.slice(i*10, (i+1)*10)]);
        }
        return arrDecodedLatter.join('');

    } else {
        console.log('expression is wrong');
        return 'expression is wrong';
    }
    
}

module.exports = {
    decode
}