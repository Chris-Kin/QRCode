/**
 * 填充bits长度至qr规格的最大承载量
 */

// TODO 数组长度应该为40，代表40种版本
const fullLong = {
  L: [19, 34, 55],
  M: [16, 28, 44],
  Q: [13, 22, 34],
  H: [9, 16, 26],
};

export default (bits, version, errType) => {
  const fullBitsLen = fullLong[errType][version - 1] * 8;
  if (fullBitsLen - bits.length <= 4) {
    return bits.padEnd(fullBitsLen, '0');
  }
  const terminator = `${bits}0000`;
  const l = 8 - (terminator.length % 8);
  const len = terminator.length + l;
  const times8 = terminator.padEnd(len, '0');
  if (times8.length >= fullBitsLen) {
    return times8;
  }
  console.log(fullBitsLen, bits, terminator, times8);
  return times8.padEnd(fullBitsLen, '1110110000010001');
};
