/**
 * 字符模式有四类,各自简记为
 * Numeric mode：N
 * Alphanumberic mode:A
 * Byte mode:B
 * Japanese mode: J
 */

// encoding mode对应的value
const encodingModeValues = {
  Numeric: '0001',
  Alphanumeric: '0010',
  Byte: '0100',
  Kanji: '1000',
  ECI: '0111',
}

// Character Count Indicator位数
/**
Numeric mode: 10 bits
Alphanumeric mode: 9 bits
Byte mode: 8 bits
Japanese mode: 8 bits
 */
const charCountBits = (version) => {
  if (1 <= version <= 9) {
    return {
      N: 10,
      A: 9,
      B: 8,
      J: 8
    }
  } else if (10 <= version <= 26) {
    return {
      N: 12,
      A: 11,
      B: 16,
      J: 10
    }
  } else if (27 <= version <= 40) {
    return {
      N: 14,
      A: 13,
      B: 16,
      J: 12
    }
  }
}

// 字母模式各个字符值
const alphanumericValues = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'A': 10,
  'B': 11,
  'C': 12,
  'D': 13,
  'E': 14,
  'F': 15,
  'G': 16,
  'H': 17,
  'I': 18,
  'J': 19,
  'K': 20,
  'L': 21,
  'M': 22,
  'N': 23,
  'O': 24,
  'P': 25,
  'Q': 26,
  'R': 27,
  'S': 28,
  'T': 29,
  'U': 30,
  'V': 31,
  'W': 32,
  'X': 33,
  'Y': 34,
  'Z': 35,
  ' ': 36,
  '$': 37,
  '%': 38,
  '*': 39,
  '+': 40,
  '-': 41,
  '.': 42,
  '/': 43,
  ':': 44
}

// A模式字符转换为codewords函数
const AEncodingFunc = (str) => {
  let codewords = '';
  let strArr = [];
  for (let i = 0; i < str.length;) {
    strArr.push(str.substr(i, 2));
    i += 2;
  }
  strArr.forEach(el => {
    if (el.length === 2) {
      let short_codewords =
        (alphanumericValues[el[0]] * 45 + alphanumericValues[el[1]]).toString(2);
      let full_codewords = pad0(short_codewords, 11);
      codewords += full_codewords;
    } else {
      let short_codewords = alphanumericValues[el[0]].toString(2);
      let full_codewords = pad0(short_codewords, 6);
      codewords += full_codewords;
    }
  });
  return codewords;
}

// 二进制码 左侧补0
const pad0 = (str, bit) => {
  if (str.length >= bit) {
    return str;
  }
  let ans = str;
  const count = bit - str.length;
  for (let i = 0; i < count; i++) {
    ans = '0' + ans;
  }
  return ans;
}
