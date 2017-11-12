/* eslint-disable */
import {
  encodingModeValues,
  charCountBits,
  alphanumericValues,
} from './constant';

import StrCounter from "./strCount";
import EncodeStr from './encodeStr';

export default (str, errLevel) => {
  // 判断str类型，选取编码方式
  if (!str.split('').every(el => alphanumericValues[el] )) {
    return '暂不支持非字母格式的字符编码';
  }
  if (str.length > 11) {
    return '长度先别超过11';
  }
  const modeBites = encodingModeValues.Alphanumeric;
  return `${str}: ${modeBites}, ${StrCounter(str, 1, 'A')}, ${EncodeStr(str)}`;
};
