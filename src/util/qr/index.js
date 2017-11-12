/* eslint-disable */
import {
  encodingModeValues,
  charCountBits,
  alphanumericValues,
} from './constant';

import ModeBites from './modeBites';
import StrCounter from "./strCount";
import EncodeStr from './encodeStr';
import FillCapacity from './fillCapacity';

export default (str, errLevel) => {
  // 判断str类型，选取编码方式
  if (!str.split('').every(el => alphanumericValues[el] )) {
    return '暂不支持非字母格式的字符编码';
  }
  if (str.length > 11) {
    return '长度先别超过11';
  }
  const modeBits = ModeBites('Alphanumeric');
  const countBits = StrCounter(str, 1, 'A');
  const encodeStrBits = EncodeStr(str, 'A');
  const temp1 = `${modeBits}${countBits}${encodeStrBits}`;
  const fullBits = FillCapacity(temp1, 1, 'Q');
  return `${str}: ${fullBits}`;
};
