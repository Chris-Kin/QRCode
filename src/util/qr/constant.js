/**
 * 字符模式有四类,各自简记为
 * Numeric mode：N
 * Alphanumberic mode:A
 * Byte mode:B
 * Japanese mode: J
 */
export const encodingModeValues = {
  Numeric: '0001',
  Alphanumeric: '0010',
  Byte: '0100',
  Kanji: '1000',
  ECI: '0111',
};

// Character Count Indicator位数
/**
Numeric mode: 10 bits
Alphanumeric mode: 9 bits
Byte mode: 8 bits
Japanese mode: 8 bits
 */
export const charCountBits = (version) => {
  if (version >= 1 && version <= 9) {
    return {
      N: 10,
      A: 9,
      B: 8,
      J: 8,
    };
  } else if (version >= 10 && version <= 26) {
    return {
      N: 12,
      A: 11,
      B: 16,
      J: 10,
    };
  } else if (version >= 27 && version <= 40) {
    return {
      N: 14,
      A: 13,
      B: 16,
      J: 12,
    };
  }
  return '';
};

// 字母模式各个字符值
/* eslint-disable */
export const alphanumericValues = {
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
  ':': 44,
};
/* eslint-enable */
