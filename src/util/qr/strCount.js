/**
 * 字符串长度生成器
 */
import {
  charCountBits,
} from './constant';

/**
 * str: 待编码字符
 * version: 二维码版本
 * mode: 编码模式
 */
export default (str, version, mode) => {
  const length = charCountBits(version)[mode];
  return str.length.toString(2).padStart(length, '0');
};
