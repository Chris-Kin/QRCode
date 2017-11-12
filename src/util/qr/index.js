/* eslint-disable */
import {
  encodingModeValues,
  charCountBits,
  alphanumericValues,
} from './constant';

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
    ans = `0${ans}`;
  }
  return ans;
}

export default {};
