const ascii = require('./ascii');

const krypt = (data, end) => {
    let finalText = '';

    const message = data.split('');
    message.map(char => finalText += encrypt(char, end))

    return finalText;
}

const unkrypt = (data, end) => {
    let finalText = '';

    const message = data.split(end);
    message.map(char => {
        if (decrypt(char)) finalText += decrypt(char)
    })

    return finalText;
}

const encrypt = (char, end) => {
    let final = '';
    let searchCharCode = ascii[char] + 3;

    for (let index = 3; index > 0; index--) {
        searchCharCode += index
        searchCharCode = generateCode(searchCharCode, char)

        final += codeToChar(getCode(searchCharCode));
    }
    final += end
    return final;
}

const generateCode = (code, char) => {
    if(!ascii[code]) {
        proxCode = ascii[char] + 1;
        if (proxCode > ascii.max) {
            proxCode = ascii[char] - 1;
            return generateCode(proxCode, char)
        } 
    }
    return code;
}

const getCode = (code) => {
    for (const key in ascii) {
        if (ascii[key] == code) {
            return ascii[key];
        }
    }
}

const decrypt = (part) => {
    const char = part.charAt(0)
    const code = ascii[char]
    return codeToChar(code-6);
}

const codeToChar = (charCode) => {
    return String.fromCharCode(charCode)
}

module.exports = {
    krypt,
    unkrypt
}