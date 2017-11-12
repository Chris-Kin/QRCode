/**
 * 字符串长度生成器
 */
import {
  charCountBits,
} from './constant';

export default (str, version, mode) => {
  const length = charCountBits(version)[mode];
  return str.length.toString(2).padStart(length, '0');
};
