/**
 * 对待编码字符进行特定模式的编码
 * 目前仅有字母模式，其他模式待添加
 */

import {
  alphanumericValues,
} from './constant';

/* eslint-disable */
// A模式字符转换为codewords函数
export default (str) => {
  let codewords = '';
  let strArr = [];
  for (let i = 0; i < str.length;) {
    strArr.push(str.substr(i, 2));
    i += 2;
  }
  strArr.forEach((el) => {
    if (el.length === 2) {
      let short_codewords =
        (alphanumericValues[el[0]] * 45 + alphanumericValues[el[1]]).toString(2);
      let full_codewords = short_codewords.padStart(11, '0');
      codewords += full_codewords;
    } else {
      let short_codewords = alphanumericValues[el[0]].toString(2);
      let full_codewords = short_codewords.padStart(6, '0');
      codewords += full_codewords;
    }
  });
  return codewords;
}
